import React, { useState, useEffect } from 'react'
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
        setExpenses(expensesData)
        if (membersData.length > 0) {
          setSelectedMembers(new Set(membersData.map(m => m.id))) // Select all by default
        }
      } else {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const state = JSON.parse(raw)
          setMembers(state.members || [])
          setExpenses(state.expenses || [])
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

  const formatMoney = (amount, currency) => {
    const n = Number(amount || 0)
    const fixed = (Math.round(n * 100) / 100).toFixed(2)
    return `${fixed} ${currency}`
  }

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
      const paidByName = members.find(m => m.id === exp.paidBy)?.name || ''
      const memberAmounts = selectedMembersList.map(m => {
        const splitAmount = exp.splits?.[m.id] || 0
        return splitAmount > 0 ? Number(splitAmount).toFixed(2) : ''
      })
      rows.push([
        exp.date || '',
        exp.category || '',
        exp.currency || '',
        exp.description || exp.desc || '',
        Number(exp.amount || 0).toFixed(2),
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
      <div className="mb-6">
        <Link
          to="/split-expenses"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-4"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{t('Back to Budget Splitter', '返回费用分摊器')}</span>
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-header font-bold text-slate-800 mb-1">
              {t('Expenses', '费用')}
            </h1>
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
                  const paidByName = members.find(m => m.id === exp.paidBy)?.name || '-'
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
                                  disabled={splitAmount <= 0}
                                />
                              </label>
                              <Link 
                                to={`/split-expenses/expense/${exp.id}`}
                                className="hover:text-emerald-600 transition-colors"
                              >
                                {splitAmount > 0 ? formatMoney(splitAmount, exp.currency) : ''}
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

        <p className="text-xs text-slate-500 mt-4">
          {t('Tip: Click on any expense to view details or delete it.', '提示：点击任何费用可查看详情或删除。')}
        </p>
      </div>
    </div>
  )
}

export default ExpensesList
