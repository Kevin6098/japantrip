import React, { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { budgetService } from '../services/budgetService'

const STORAGE_KEY = 'jp_trip_budget_splitter_v1'
const USE_DATABASE = import.meta.env.VITE_USE_DATABASE === 'true' || false

const ExpensesList = () => {
  const { t } = useLanguage()
  const [members, setMembers] = useState([])
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMembers, setSelectedMembers] = useState(new Set())

  const normalizeExpenseForUI = (exp) => ({
    ...exp,
    paidBy: exp?.paidBy ?? exp?.paid_by ?? '',
    splitWith: exp?.splitWith ?? exp?.split_with ?? [],
    membersPaid: exp?.membersPaid ?? exp?.members_paid ?? {},
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      
      if (USE_DATABASE) {
        const [membersData, expensesData] = await Promise.all([
          budgetService.getMembers(),
          budgetService.getExpenses()
        ])
        setMembers(membersData)
        setExpenses((expensesData || []).map(normalizeExpenseForUI))
        if (membersData.length > 0) {
          setSelectedMembers(new Set(membersData.map(m => m.id))) // Select all by default
        }
      } else {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const state = JSON.parse(raw)
          setMembers(state.members || [])
          setExpenses((state.expenses || []).map(normalizeExpenseForUI))
          if (state.members && state.members.length > 0) {
            setSelectedMembers(new Set(state.members.map(m => m.id))) // Select all by default
          }
        }
      }
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const currencyDecimals = (currency) => (currency === 'JPY' ? 0 : 2)

  const getPaidById = (exp) => exp?.paidBy ?? exp?.paid_by ?? ''

  const formatMoney = (amount, currency) => {
    const dec = currencyDecimals(currency)
    const n = Number(amount || 0)
    const pow = 10 ** dec
    const fixed = (Math.round(n * pow) / pow).toFixed(dec)
    return `${fixed} ${currency}`
  }

  // ===== Settle Up (mobile-friendly) =====
  const [showSettleUp, setShowSettleUp] = useState(true)
  const [settleViewMemberId, setSettleViewMemberId] = useState('')

  useEffect(() => {
    if (!settleViewMemberId && members.length > 0) setSettleViewMemberId(members[0].id)
  }, [members, settleViewMemberId])

  const settleData = useMemo(() => {
    const usedCurrencies = new Set()
    const debtsByCurrency = {}

    expenses.forEach((raw) => {
      const exp = normalizeExpenseForUI(raw)
      const cur = exp.currency || 'JPY'
      usedCurrencies.add(cur)
      const payer = exp.paidBy
      if (!payer) return
      const paidMap = exp.membersPaid || {}
      const splits = exp.splits || {}
      Object.entries(splits).forEach(([debtorId, v]) => {
        const amt = Number(v || 0)
        if (!isFinite(amt) || amt <= 0) return
        if (debtorId === payer) return
        // If this member's checkbox is checked, they have already paid back for this expense.
        // So exclude their split amount from outstanding debts.
        if (Boolean(paidMap?.[debtorId])) return
        if (!debtsByCurrency[cur]) debtsByCurrency[cur] = {}
        if (!debtsByCurrency[cur][debtorId]) debtsByCurrency[cur][debtorId] = {}
        debtsByCurrency[cur][debtorId][payer] = (debtsByCurrency[cur][debtorId][payer] || 0) + amt
      })
    })

    const memberName = (id) => members.find(m => m.id === id)?.name || id
    const me = settleViewMemberId

    const perCurrency = {}

    const currencies = Array.from(usedCurrencies).sort()
    currencies.forEach((cur) => {
      const debts = debtsByCurrency[cur] || {}
      const owedToMe = {}
      const iOwe = {}

      Object.entries(debts).forEach(([debtorId, creditors]) => {
        Object.entries(creditors || {}).forEach(([creditorId, amt]) => {
          const n = Number(amt || 0)
          if (!isFinite(n) || n <= 0) return
          if (me) {
            if (creditorId === me) owedToMe[debtorId] = (owedToMe[debtorId] || 0) + n
            if (debtorId === me) iOwe[creditorId] = (iOwe[creditorId] || 0) + n
          }
        })
      })

      perCurrency[cur] = { owedToMe, iOwe }
    })

    return { currencies, memberName, perCurrency }
  }, [expenses, members, settleViewMemberId])

  const toggleMemberPaid = async (expenseId, memberId, currentStatus) => {
    try {
      const newStatus = !currentStatus
      const expense = expenses.find(e => e.id === expenseId)
      const membersPaid = expense?.membersPaid || expense?.members_paid || {}
      const updatedMembersPaid = { ...membersPaid, [memberId]: newStatus }
      
      if (USE_DATABASE) {
        await budgetService.updateExpense(expenseId, { members_paid: updatedMembersPaid })
        setExpenses(prev => prev.map(exp => 
          exp.id === expenseId ? { ...exp, members_paid: updatedMembersPaid, membersPaid: updatedMembersPaid } : exp
        ))
      } else {
        const updatedExpenses = expenses.map(exp => 
          exp.id === expenseId ? { ...exp, membersPaid: updatedMembersPaid } : exp
        )
        setExpenses(updatedExpenses)
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const state = JSON.parse(raw)
          state.expenses = updatedExpenses
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        }
      }
    } catch (error) {
      console.error('Error updating member paid status:', error)
    }
  }

  const exportCSV = () => {
    const selectedMembersList = members.filter(m => selectedMembers.has(m.id))
    const header = ['Date', 'Category', 'Currency', 'Description', 'Amount', 'PaidBy', ...selectedMembersList.map(m => m.name)]
    const rows = [header]
    expenses.forEach(exp => {
      const paidById = getPaidById(exp)
      const paidByName = members.find(m => m.id === paidById)?.name || ''
      const dec = (exp.currency || 'JPY') === 'JPY' ? 0 : 2
      const memberAmounts = selectedMembersList.map(m => {
        const splitAmount = exp.splits?.[m.id] || 0
        return splitAmount > 0 ? Number(splitAmount).toFixed(dec) : ''
      })
      rows.push([
        exp.date || '',
        exp.category || '',
        exp.currency || '',
        exp.description || exp.desc || '',
        Number(exp.amount || 0).toFixed(dec),
        paidByName,
        ...memberAmounts
      ])
    })
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'japan_trip_budget.csv'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          <p className="mt-4 text-slate-600">{t('Loading...', '加载中...')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 md:py-12 border-b border-emerald-100 mb-8 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-100 rounded-xl shadow-inner">
            <i className="fa-solid fa-calculator text-emerald-600 text-2xl md:text-3xl"></i>
          </div>
          <div className="flex-1">
            <h1 className="font-header text-2xl md:text-3xl font-bold text-slate-800 mb-1">
              {t('Budget Splitter', '费用分摊器')}
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              {USE_DATABASE
                ? t('Database mode — data synced across devices.', '数据库模式 — 数据跨设备同步。')
                : t('Offline tracker — auto split expenses by selected members + per-member totals.', '离线追踪器 — 自动按选定成员分摊费用 + 每人总计。')
              }
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="inline-flex rounded-xl bg-white/70 border border-white/60 backdrop-blur-md p-1 shadow-sm">
          <Link
            to="/split-expenses?tab=add"
            className="px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all text-slate-700 hover:bg-white hover:shadow-sm"
          >
            <i className="fa-solid fa-receipt mr-2"></i>
            {t('Add an expense', '添加费用')}
          </Link>
          <Link
            to="/split-expenses?tab=summary"
            className="px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all text-slate-700 hover:bg-white hover:shadow-sm"
          >
            <i className="fa-solid fa-chart-pie mr-2"></i>
            {t('Summary', '摘要')}
          </Link>
          <span className="px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm bg-emerald-600 text-white shadow">
            <i className="fa-solid fa-list mr-2"></i>
            {t('Expenses', '费用')}
          </span>
          <Link
            to="/split-expenses?tab=members"
            className="px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all text-slate-700 hover:bg-white hover:shadow-sm"
          >
            <i className="fa-solid fa-users mr-2"></i>
            {t('Members', '成员')}
          </Link>
        </div>
      </div>

      {/* Page title / actions (match other tabs style) */}
      <div className="glass-card p-6 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-header text-xl font-bold text-slate-800 mb-1">
              {t('Expenses', '费用')}
            </h2>
            <p className="text-sm text-slate-600">
              {t('View and manage all expenses', '查看和管理所有费用')}
            </p>
          </div>
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            <i className="fa-solid fa-download mr-2"></i>
            {t('Export CSV', '导出CSV')}
          </button>
        </div>
      </div>

      {/* Member Filter */}
      <div className="glass-card p-4 mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {t('Show Members', '显示成员')}
        </label>
        <div className="flex flex-wrap gap-2">
          {members.map(m => (
            <label key={m.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedMembers.has(m.id)}
                onChange={() => {
                  setSelectedMembers(prev => {
                    const next = new Set(prev)
                    if (next.has(m.id)) {
                      next.delete(m.id)
                    } else {
                      next.add(m.id)
                    }
                    return next
                  })
                }}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="text-sm">{m.name}</span>
            </label>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setSelectedMembers(new Set(members.map(m => m.id)))}
            className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold"
          >
            {t('Select All', '全选')}
          </button>
          <span className="text-xs text-slate-400">|</span>
          <button
            onClick={() => setSelectedMembers(new Set())}
            className="text-xs text-slate-600 hover:text-slate-800 font-semibold"
          >
            {t('Deselect All', '全不选')}
          </button>
        </div>
      </div>

      {/* Expenses Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-2 font-semibold text-slate-700 min-w-[95px]">{t('Date', '日期')}</th>
                <th className="text-left p-2 font-semibold text-slate-700 min-w-[90px]">{t('Category', '类别')}</th>
                <th className="text-left p-2 font-semibold text-slate-700">{t('Description', '描述')}</th>
                <th className="text-left p-2 font-semibold text-slate-700 min-w-[95px]">{t('Paid by', '付款人')}</th>
                <th className="text-right p-2 font-semibold text-slate-700 min-w-[110px]">{t('Amount', '金额')}</th>
                {members.filter(m => selectedMembers.has(m.id)).map(m => (
                  <th key={m.id} className="text-right p-2 font-semibold text-slate-700 min-w-[120px]">{m.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan={5 + members.filter(m => selectedMembers.has(m.id)).length} className="p-4 text-center text-slate-500 text-sm">
                    {t('No expenses yet.', '还没有费用。')}
                  </td>
                </tr>
              ) : (
                [...expenses].sort((a, b) => (b.date || '').localeCompare(a.date || '')).map(exp => {
                  const paidById = getPaidById(exp)
                  const paidByName = members.find(m => m.id === paidById)?.name || '-'
                  const membersPaid = exp.membersPaid || exp.members_paid || {}
                  return (
                    <tr 
                      key={exp.id} 
                      className="border-t border-slate-200 hover:bg-slate-50"
                    >
                      <td className="p-2">
                        <Link 
                          to={`/split-expenses/expense/${exp.id}`}
                          className="block hover:text-emerald-600 transition-colors"
                        >
                          {exp.date || ''}
                        </Link>
                      </td>
                      <td className="p-2">
                        <Link 
                          to={`/split-expenses/expense/${exp.id}`}
                          className="block hover:text-emerald-600 transition-colors"
                        >
                          {exp.category || ''}
                        </Link>
                      </td>
                      <td className="p-2 max-w-xs break-words text-sm">
                        <Link 
                          to={`/split-expenses/expense/${exp.id}`}
                          className="block hover:text-emerald-600 transition-colors"
                        >
                          {exp.description || exp.desc || ''}
                        </Link>
                      </td>
                      <td className="p-2">
                        <Link 
                          to={`/split-expenses/expense/${exp.id}`}
                          className="block hover:text-emerald-600 transition-colors"
                        >
                          {paidByName}
                        </Link>
                      </td>
                      <td className="p-2 text-right font-semibold">
                        <Link 
                          to={`/split-expenses/expense/${exp.id}`}
                          className="block hover:text-emerald-600 transition-colors"
                        >
                          {formatMoney(exp.amount, exp.currency)}
                        </Link>
                      </td>
                      {members.filter(m => selectedMembers.has(m.id)).map(m => {
                        const splitAmount = exp.splits?.[m.id] || 0
                        const isPaid = membersPaid[m.id] || false
                        if (splitAmount <= 0) {
                          return (
                            <td key={m.id} className="p-2 text-right text-xs text-slate-400">
                              -
                            </td>
                          )
                        }
                        return (
                          <td 
                            key={m.id} 
                            className={`p-2 text-right text-xs ${isPaid ? 'bg-green-50' : ''}`}
                          >
                            <div className="flex items-center justify-end gap-2">
                              <label className="cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isPaid}
                                  onChange={(e) => {
                                    e.stopPropagation()
                                    toggleMemberPaid(exp.id, m.id, isPaid)
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                                  title={isPaid ? t('Paid', '已付款') : t('Not paid', '未付款')}
                                />
                              </label>
                              <Link 
                                to={`/split-expenses/expense/${exp.id}`}
                                className="hover:text-emerald-600 transition-colors"
                              >
                                {formatMoney(splitAmount, exp.currency)}
                              </Link>
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Settle Up (under expenses table) */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <button
              onClick={() => setShowSettleUp(v => !v)}
              className="w-full lg:w-auto px-4 py-3 bg-white border border-slate-200 text-slate-800 rounded-xl hover:bg-slate-50 transition-colors font-bold flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-handshake text-slate-700"></i>
              {t('Settle Up', '结算')}
              <i className={`fa-solid fa-chevron-${showSettleUp ? 'up' : 'down'} text-xs text-slate-500 ml-1`}></i>
            </button>

            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-700">{t('View as', '查看为')}</span>
                <select
                  value={settleViewMemberId}
                  onChange={(e) => setSettleViewMemberId(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm"
                >
                  {members.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {showSettleUp && (
            <div className="mt-4">
              <div className="text-xs text-slate-500 mb-3">
                {t(
                  'Debts are based on split shares owed to the payer. Checked boxes are treated as already paid back and are excluded.',
                  '欠款基于分摊金额（向付款人支付）。勾选表示已还款，将不计入结算。'
                )}
              </div>

              {settleData.currencies.length === 0 ? (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                  {t('No expenses yet.', '还没有费用。')}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <details className="bg-white border border-slate-200 rounded-xl p-4" open>
                      <summary className="cursor-pointer font-bold text-slate-800 flex items-center justify-between">
                        <span>{t('People who owe me', '谁欠我')}</span>
                        <span className="text-xs text-slate-500">{t('tap to collapse', '点击收起')}</span>
                      </summary>
                      <div className="mt-3 space-y-3">
                        {settleData.currencies.map(cur => {
                          const entries = Object.entries(settleData.perCurrency[cur]?.owedToMe || {})
                            .filter(([, v]) => v > 0)
                            .sort((a, b) => b[1] - a[1])
                          if (entries.length === 0) return null
                          return (
                            <div key={cur}>
                              <div className="text-xs font-semibold text-slate-600 mb-1">{cur}</div>
                              <div className="space-y-1">
                                {entries.map(([id, v]) => (
                                  <div key={id} className="flex items-center justify-between text-sm py-1">
                                    <span className="truncate">{settleData.memberName(id)}</span>
                                    <span className="font-semibold">{formatMoney(v, cur)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </details>

                    <details className="bg-white border border-slate-200 rounded-xl p-4" open>
                      <summary className="cursor-pointer font-bold text-slate-800 flex items-center justify-between">
                        <span>{t('I owe people', '我欠谁')}</span>
                        <span className="text-xs text-slate-500">{t('tap to collapse', '点击收起')}</span>
                      </summary>
                      <div className="mt-3 space-y-3">
                        {settleData.currencies.map(cur => {
                          const entries = Object.entries(settleData.perCurrency[cur]?.iOwe || {})
                            .filter(([, v]) => v > 0)
                            .sort((a, b) => b[1] - a[1])
                          if (entries.length === 0) return null
                          return (
                            <div key={cur}>
                              <div className="text-xs font-semibold text-slate-600 mb-1">{cur}</div>
                              <div className="space-y-1">
                                {entries.map(([id, v]) => (
                                  <div key={id} className="flex items-center justify-between text-sm py-1">
                                    <span className="truncate">{settleData.memberName(id)}</span>
                                    <span className="font-semibold">{formatMoney(v, cur)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </details>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <p className="text-xs text-slate-500 mt-4">
          {t('Tip: Click on any expense to view details or delete it.', '提示：点击任何费用可查看详情或删除。')}
        </p>
      </div>
    </div>
  )
}

export default ExpensesList
