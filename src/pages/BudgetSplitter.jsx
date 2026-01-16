import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const STORAGE_KEY = 'jp_trip_budget_splitter_v1'
const DEFAULT_MEMBERS = [
  'Soon Zheng Dong',
  'Soon Cheng Wai',
  'Soon Xin Yi',
  'See Siew Pheng',
  'Ang Shin Nee',
  'See Siew Tin',
  'See Siew Kim',
  'See Eng Kim',
  'See Yi Joe',
  'Koay Jun Ming'
]

const BudgetSplitter = () => {
  const { t } = useLanguage()
  const [members, setMembers] = useState([])
  const [expenses, setExpenses] = useState([])
  const [memberName, setMemberName] = useState('')
  const [expDate, setExpDate] = useState('')
  const [expCategory, setExpCategory] = useState('Meal')
  const [expCurrency, setExpCurrency] = useState('JPY')
  const [expDesc, setExpDesc] = useState('')
  const [expAmount, setExpAmount] = useState('')
  const [expPaidBy, setExpPaidBy] = useState('')
  const [splitMode, setSplitMode] = useState('equal')
  const [splitWith, setSplitWith] = useState(new Set())
  const [customSplits, setCustomSplits] = useState({})
  const [formWarn, setFormWarn] = useState('')

  useEffect(() => {
    loadState()
  }, [])

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    if (!expDate) setExpDate(today)
  }, [expDate])

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
        const state = { members: defaultMembers, expenses: [] }
        saveState(state)
        setMembers(defaultMembers)
        setExpenses([])
        if (defaultMembers.length > 0) setExpPaidBy(defaultMembers[0].id)
        return
      }
      const state = JSON.parse(raw)
      setMembers(state.members || [])
      setExpenses(state.expenses || [])
      if (state.members && state.members.length > 0) {
        setExpPaidBy(state.members[0].id)
        setSplitWith(new Set(state.members.map(m => m.id)))
      }
    } catch {
      const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
      setMembers(defaultMembers)
      setExpenses([])
    }
  }

  const saveState = (state = null) => {
    const toSave = state || { members, expenses }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }

  const uniqId = () => Math.random().toString(36).slice(2) + Date.now().toString(36)

  const formatMoney = (amount, currency) => {
    const n = Number(amount || 0)
    const fixed = (Math.round(n * 100) / 100).toFixed(2)
    return `${fixed} ${currency}`
  }

  const addMember = () => {
    const name = memberName.trim()
    if (!name) {
      setFormWarn(t('Member name cannot be empty.', '成员姓名不能为空。'))
      return
    }
    const newMember = { id: uniqId(), name }
    const newMembers = [...members, newMember]
    setMembers(newMembers)
    setMemberName('')
    setFormWarn('')
    if (!expPaidBy) setExpPaidBy(newMember.id)
    setSplitWith(prev => new Set([...prev, newMember.id]))
    saveState({ members: newMembers, expenses })
  }

  const removeMember = (id) => {
    const newMembers = members.filter(m => m.id !== id)
    const newExpenses = expenses.map(e => {
      const newSplits = { ...e.splits }
      delete newSplits[id]
      return {
        ...e,
        splits: newSplits,
        splitWith: (e.splitWith || []).filter(mid => mid !== id),
        paidBy: e.paidBy === id ? (newMembers[0]?.id || '') : e.paidBy
      }
    }).filter(e => e.paidBy)
    setMembers(newMembers)
    setExpenses(newExpenses)
    if (expPaidBy === id && newMembers.length > 0) setExpPaidBy(newMembers[0].id)
    setSplitWith(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
    saveState({ members: newMembers, expenses: newExpenses })
  }

  const toggleSplitWith = (id) => {
    setSplitWith(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const parseAmount = (input) => {
    if (!input || typeof input !== 'string') return NaN
    const trimmed = input.trim().toLowerCase()
    // Support "k" suffix (e.g., "5k" = 5000, "10k" = 10000)
    if (trimmed.endsWith('k')) {
      const num = Number(trimmed.slice(0, -1))
      if (isFinite(num)) return num * 1000
    }
    return Number(trimmed)
  }

  const buildSplits = () => {
    const checked = Array.from(splitWith)
    if (checked.length === 0) {
      return { ok: false, msg: t('Choose at least 1 member to split with.', '至少选择1个成员进行分摊。') }
    }
    const amt = parseAmount(expAmount)
    if (!isFinite(amt) || amt <= 0) {
      return { ok: false, msg: t('Enter a valid amount > 0. (You can use "k" suffix, e.g., "5k" = 5000)', '输入有效金额 > 0。（可使用"k"后缀，例如"5k" = 5000）') }
    }
    const splits = {}
    if (splitMode === 'equal') {
      // Use precise division to avoid floating-point errors
      // Calculate each person's share rounded to 2 decimals
      const each = Math.floor((amt * 100) / checked.length) / 100
      // Calculate remainder to ensure exact total
      const totalDistributed = each * checked.length
      const remainder = Math.round((amt - totalDistributed) * 100) / 100
      // Distribute the remainder to the first member to ensure exact total
      checked.forEach((id, index) => {
        if (index === 0) {
          splits[id] = Math.round((each + remainder) * 100) / 100
        } else {
          splits[id] = each
        }
      })
      return { ok: true, splits }
    }
    let sum = 0
    checked.forEach(id => {
      const v = Number(customSplits[id] || 0)
      splits[id] = v
      sum += v
    })
    const diff = Math.abs(sum - amt)
    if (diff > 0.01) {
      return {
        ok: false,
        msg: t(
          `Custom split total must equal the expense amount. Currently: ${formatMoney(sum, expCurrency)} (needs ${formatMoney(amt, expCurrency)}).`,
          `自定义分摊总额必须等于费用金额。当前：${formatMoney(sum, expCurrency)}（需要 ${formatMoney(amt, expCurrency)}）。`
        )
      }
    }
    return { ok: true, splits }
  }

  const addExpense = () => {
    setFormWarn('')
    if (members.length === 0) {
      setFormWarn(t('Add at least 1 member first.', '请先添加至少1个成员。'))
      return
    }
    if (!expPaidBy) {
      setFormWarn(t('Select who paid.', '选择付款人。'))
      return
    }
    const { ok, splits, msg } = buildSplits()
    if (!ok) {
      setFormWarn(msg)
      return
    }
    const parsedAmount = parseAmount(expAmount)
    const newExpense = {
      id: uniqId(),
      date: expDate || new Date().toISOString().split('T')[0],
      category: expCategory,
      currency: expCurrency,
      desc: expDesc.trim(),
      amount: parsedAmount,
      paidBy: expPaidBy,
      splitWith: Array.from(splitWith),
      splits
    }
    const newExpenses = [...expenses, newExpense]
    setExpenses(newExpenses)
    setExpDesc('')
    setExpAmount('')
    setCustomSplits({})
    saveState({ members, expenses: newExpenses })
  }

  const deleteExpense = (id) => {
    const newExpenses = expenses.filter(e => e.id !== id)
    setExpenses(newExpenses)
    saveState({ members, expenses: newExpenses })
  }

  const clearExpenses = () => {
    if (window.confirm(t('Clear all expenses (keep members)?', '清除所有费用（保留成员）？'))) {
      setExpenses([])
      saveState({ members, expenses: [] })
    }
  }

  const resetAll = () => {
    if (window.confirm(t('Reset EVERYTHING (members + expenses)?', '重置所有内容（成员 + 费用）？'))) {
      localStorage.removeItem(STORAGE_KEY)
      const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
      setMembers(defaultMembers)
      setExpenses([])
      setExpPaidBy(defaultMembers[0]?.id || '')
      setSplitWith(new Set(defaultMembers.map(m => m.id)))
      saveState({ members: defaultMembers, expenses: [] })
    }
  }

  const exportCSV = () => {
    const header = ['Date', 'Category', 'Currency', 'Description', 'Amount', 'PaidBy', ...members.map(m => m.name)]
    const rows = [header]
    expenses.forEach(exp => {
      const paidByName = members.find(m => m.id === exp.paidBy)?.name || ''
      const memberAmounts = members.map(m => {
        const splitAmount = exp.splits?.[m.id] || 0
        return splitAmount > 0 ? Number(splitAmount).toFixed(2) : ''
      })
      rows.push([
        exp.date || '',
        exp.category || '',
        exp.currency || '',
        exp.desc || '',
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

  const calculateTotals = () => {
    const totals = {}
    const catTotals = {}
    expenses.forEach(exp => {
      const cur = exp.currency || 'JPY'
      if (!totals[cur]) totals[cur] = {}
      if (!catTotals[cur]) catTotals[cur] = {}
      if (!catTotals[cur][exp.category]) catTotals[cur][exp.category] = 0
      catTotals[cur][exp.category] += Number(exp.amount || 0)
      Object.entries(exp.splits || {}).forEach(([mid, v]) => {
        if (!totals[cur][mid]) totals[cur][mid] = 0
        totals[cur][mid] += Number(v)
      })
    })
    return { totals, catTotals }
  }

  const { totals, catTotals } = calculateTotals()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 md:py-12 border-b border-emerald-100 mb-8 rounded-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-emerald-100 rounded-xl shadow-inner">
            <i className="fa-solid fa-calculator text-emerald-600 text-2xl md:text-3xl"></i>
          </div>
          <div>
            <h1 className="font-header text-2xl md:text-3xl font-bold text-slate-800 mb-1">
              {t('Budget Splitter', '费用分摊器')}
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              {t('Offline tracker — auto split expenses by selected members + per-member totals.', '离线追踪器 — 自动按选定成员分摊费用 + 每人总计。')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Input Form */}
        <div className="glass-card p-6">
          <h2 className="font-header text-xl font-bold text-slate-800 mb-4">
            {t('1) Members', '1) 成员')}
          </h2>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addMember()}
              placeholder={t('e.g., Ang', '例如：Ang')}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={addMember}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              {t('Add Member', '添加成员')}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {members.map(m => (
              <div key={m.id} className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full">
                <span className="text-sm">{m.name}</span>
                <button
                  onClick={() => removeMember(m.id)}
                  className="text-red-600 hover:text-red-800 text-xs font-bold"
                >
                  {t('Remove', '删除')}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mb-6">
            {t('Members are saved automatically.', '成员会自动保存。')}
          </p>

          <hr className="border-slate-200 my-6" />

          <h2 className="font-header text-xl font-bold text-slate-800 mb-4">
            {t('2) Add an expense', '2) 添加费用')}
          </h2>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Date', '日期')}
              </label>
              <input
                type="date"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Category', '类别')}
              </label>
              <select
                value={expCategory}
                onChange={(e) => setExpCategory(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Meal">Meal</option>
                <option value="Transport">Transport</option>
                <option value="Tickets">Tickets</option>
                <option value="Shopping">Shopping</option>
                <option value="Hotel">Hotel</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Currency', '货币')}
              </label>
              <select
                value={expCurrency}
                onChange={(e) => setExpCurrency(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="JPY">JPY</option>
                <option value="MYR">MYR</option>
                <option value="USD">USD</option>
                <option value="SGD">SGD</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Description', '描述')}
              </label>
              <input
                type="text"
                value={expDesc}
                onChange={(e) => setExpDesc(e.target.value)}
                placeholder={t('e.g., Ichiran ramen', '例如：一兰拉面')}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Amount', '金额')}
              </label>
              <input
                type="text"
                value={expAmount}
                onChange={(e) => setExpAmount(e.target.value)}
                placeholder={t('e.g., 4800 or 5k', '例如：4800 或 5k')}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Paid by', '付款人')}
              </label>
              <select
                value={expPaidBy}
                onChange={(e) => setExpPaidBy(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {members.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t('Split mode', '分摊模式')}
              </label>
              <select
                value={splitMode}
                onChange={(e) => setSplitMode(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="equal">{t('Equal split', '平均分摊')}</option>
                <option value="custom">{t('Custom amounts', '自定义金额')}</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {t('Split with (who should share this cost?)', '分摊对象（谁应分担此费用？）')}
            </label>
            <div className="flex flex-wrap gap-2">
              {members.map(m => (
                <label key={m.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={splitWith.has(m.id)}
                    onChange={() => toggleSplitWith(m.id)}
                    className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm">{m.name}</span>
                </label>
              ))}
            </div>
          </div>

          {splitMode === 'custom' && (
            <div className="mb-4 p-4 bg-slate-50 rounded-lg">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t('Custom split (enter each member\'s share)', '自定义分摊（输入每个成员的份额）')}
              </label>
              <div className="space-y-2">
                {members.filter(m => splitWith.has(m.id)).map(m => (
                  <div key={m.id} className="flex items-center gap-2">
                    <label className="text-sm w-24">{m.name}</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={customSplits[m.id] || ''}
                      onChange={(e) => setCustomSplits({ ...customSplits, [m.id]: e.target.value })}
                      placeholder="0"
                      className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {t('Tip: You can uncheck members above. Only checked members are counted.', '提示：您可以取消选中上面的成员。只计算选中的成员。')}
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={addExpense}
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              {t('Add Expense', '添加费用')}
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              {t('Reset All Data', '重置所有数据')}
            </button>
          </div>

          {formWarn && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              {formWarn}
            </div>
          )}
        </div>

        {/* Right Column: Summary & Expenses */}
        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-header text-xl font-bold text-slate-800 mb-1">
                {t('Summary', '摘要')}
              </h2>
              <p className="text-xs text-slate-500">
                {t('Totals are per member (based on splits), not "paid by".', '总计按成员（基于分摊），而非"付款人"。')}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportCSV}
                className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-semibold"
              >
                {t('Export CSV', '导出CSV')}
              </button>
              <button
                onClick={clearExpenses}
                className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm font-semibold"
              >
                {t('Clear Expenses Only', '仅清除费用')}
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="mb-6">
            {members.length === 0 ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                {t('No members yet.', '还没有成员。')}
              </div>
            ) : Object.keys(totals).length === 0 ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                {t('No expenses yet. Add your first expense on the left.', '还没有费用。在左侧添加您的第一笔费用。')}
              </div>
            ) : (
              Object.keys(totals).sort().map(cur => {
                const grand = Object.values(catTotals[cur] || {}).reduce((a, b) => a + b, 0)
                return (
                  <div key={cur} className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">{cur}</span>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                          {t('Totals', '总计')}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600">
                        {t('Total spent:', '总支出：')} <b>{formatMoney(grand, cur)}</b>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100">
                            <tr>
                              <th className="text-left p-2 font-semibold text-slate-700">{t('Member', '成员')}</th>
                              <th className="text-right p-2 font-semibold text-slate-700">{t('Their share', '他们的份额')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {members.map(m => {
                              const v = totals[cur][m.id] || 0
                              return (
                                <tr key={m.id} className="border-t border-slate-200">
                                  <td className="p-2">{m.name}</td>
                                  <td className="p-2 text-right font-semibold">{formatMoney(v, cur)}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100">
                            <tr>
                              <th className="text-left p-2 font-semibold text-slate-700">{t('Category', '类别')}</th>
                              <th className="text-right p-2 font-semibold text-slate-700">{t('Total', '总计')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(catTotals[cur] || {}).sort().map(cat => (
                              <tr key={cat} className="border-t border-slate-200">
                                <td className="p-2">{cat}</td>
                                <td className="p-2 text-right">{formatMoney(catTotals[cur][cat], cur)}</td>
                              </tr>
                            ))}
                            {Object.keys(catTotals[cur] || {}).length === 0 && (
                              <tr>
                                <td colSpan="2" className="p-2 text-xs text-slate-500 text-center">
                                  {t('No categories yet', '还没有类别')}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          <hr className="border-slate-200 my-6" />

          <h2 className="font-header text-xl font-bold text-slate-800 mb-4">
            {t('Expenses', '费用')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-2 font-semibold text-slate-700 min-w-[95px]">{t('Date', '日期')}</th>
                  <th className="text-left p-2 font-semibold text-slate-700 min-w-[90px]">{t('Category', '类别')}</th>
                  <th className="text-left p-2 font-semibold text-slate-700">{t('Description', '描述')}</th>
                  <th className="text-left p-2 font-semibold text-slate-700 min-w-[95px]">{t('Paid by', '付款人')}</th>
                  <th className="text-right p-2 font-semibold text-slate-700 min-w-[110px]">{t('Amount', '金额')}</th>
                  {members.map(m => (
                    <th key={m.id} className="text-right p-2 font-semibold text-slate-700 min-w-[100px]">{m.name}</th>
                  ))}
                  <th className="text-center p-2 font-semibold text-slate-700 min-w-[90px]">{t('Action', '操作')}</th>
                </tr>
              </thead>
              <tbody>
                {expenses.length === 0 ? (
                  <tr>
                    <td colSpan={5 + members.length + 1} className="p-4 text-center text-slate-500 text-sm">
                      {t('No expenses yet.', '还没有费用。')}
                    </td>
                  </tr>
                ) : (
                  [...expenses].sort((a, b) => (b.date || '').localeCompare(a.date || '')).map(exp => {
                    const paidByName = members.find(m => m.id === exp.paidBy)?.name || '-'
                    return (
                      <tr key={exp.id} className="border-t border-slate-200 hover:bg-slate-50">
                        <td className="p-2">{exp.date || ''}</td>
                        <td className="p-2">{exp.category || ''}</td>
                        <td className="p-2">{exp.desc || ''}</td>
                        <td className="p-2">{paidByName}</td>
                        <td className="p-2 text-right font-semibold">{formatMoney(exp.amount, exp.currency)}</td>
                        {members.map(m => {
                          const splitAmount = exp.splits?.[m.id] || 0
                          return (
                            <td key={m.id} className="p-2 text-right text-xs text-slate-600">
                              {splitAmount > 0 ? formatMoney(splitAmount, exp.currency) : ''}
                            </td>
                          )
                        })}
                        <td className="p-2 text-center">
                          <button
                            onClick={() => deleteExpense(exp.id)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-xs font-semibold"
                          >
                            {t('Delete', '删除')}
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            {t('Tip: If you want "who owes who" settlement later, tell me and I\'ll add it.', '提示：如果您想要"谁欠谁"的结算功能，告诉我，我会添加它。')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BudgetSplitter
