import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { budgetService } from '../services/budgetService'

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

// Feature flag: Set to true to use database, false for localStorage
const USE_DATABASE = import.meta.env.VITE_USE_DATABASE === 'true' || false

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
  // When equal split isn't divisible:
  // - random_extra: randomly assign the extra smallest units to some members (sum == amount)
  // - round_up_payer_earns: everyone rounds up; payer receives the extra (sum > amount)
  const [roundingMode, setRoundingMode] = useState('random_extra')
  const [splitWith, setSplitWith] = useState(new Set())
  const [customSplits, setCustomSplits] = useState({})
  const [formWarn, setFormWarn] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedCategories, setExpandedCategories] = useState(new Set())
  const [expandedMembers, setExpandedMembers] = useState(new Set())
  const [activeTab, setActiveTab] = useState('add')
  const [selectedMembers, setSelectedMembers] = useState(new Set())
  const location = useLocation()

  const normalizeExpenseForUI = (exp) => ({
    ...exp,
    paidBy: exp?.paidBy ?? exp?.paid_by ?? '',
    splitWith: exp?.splitWith ?? exp?.split_with ?? [],
    membersPaid: exp?.membersPaid ?? exp?.members_paid ?? {},
  })

  useEffect(() => {
    loadState()
  }, [])

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get('tab')
    if (tab === 'add' || tab === 'summary' || tab === 'members') {
      setActiveTab(tab)
    }
  }, [location.search])

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    if (!expDate) setExpDate(today)
  }, [expDate])

  // ========== DATABASE MODE ==========
  const loadFromDatabase = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const [membersData, expensesData] = await Promise.all([
        budgetService.getMembers(),
        budgetService.getExpenses()
      ])
      
      setMembers(membersData)
      setExpenses((expensesData || []).map(normalizeExpenseForUI))
      
      if (membersData.length > 0) {
        setExpPaidBy(membersData[0].id)
        setSplitWith(new Set(membersData.map(m => m.id)))
        setSelectedMembers(new Set(membersData.map(m => m.id))) // Select all by default
      } else {
        // Initialize with default members if database is empty
        await initializeDefaultMembers()
      }
    } catch (err) {
      console.error('Failed to load from database:', err)
      setError(t('Failed to load data from database. Using local storage.', '从数据库加载数据失败。使用本地存储。'))
      // Fallback to localStorage
      loadFromLocalStorage()
    } finally {
      setLoading(false)
    }
  }

  const initializeDefaultMembers = async () => {
    try {
      const defaultMembers = []
      for (const name of DEFAULT_MEMBERS) {
        const member = await budgetService.addMember({ name })
        defaultMembers.push(member)
      }
      setMembers(defaultMembers)
      if (defaultMembers.length > 0) {
        setExpPaidBy(defaultMembers[0].id)
        setSplitWith(new Set(defaultMembers.map(m => m.id)))
        setSelectedMembers(new Set(defaultMembers.map(m => m.id))) // Select all by default
      }
    } catch (err) {
      console.error('Failed to initialize default members:', err)
      throw err // Re-throw to allow error handling upstream
    }
  }

  // ========== LOCALSTORAGE MODE ==========
  const loadFromLocalStorage = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
        const state = { members: defaultMembers, expenses: [] }
        saveToLocalStorage(state)
        setMembers(defaultMembers)
        setExpenses([])
        if (defaultMembers.length > 0) setExpPaidBy(defaultMembers[0].id)
        return
      }
      const state = JSON.parse(raw)
      setMembers(state.members || [])
      setExpenses((state.expenses || []).map(normalizeExpenseForUI))
      
      if (state.members && state.members.length > 0) {
        setExpPaidBy(state.members[0].id)
        setSplitWith(new Set(state.members.map(m => m.id)))
        setSelectedMembers(new Set(state.members.map(m => m.id))) // Select all by default
      }
    } catch {
      const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
      setMembers(defaultMembers)
      setExpenses([])
    } finally {
      setLoading(false)
    }
  }

  const saveToLocalStorage = (state = null) => {
    const toSave = state || { members, expenses }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }

  const loadState = () => {
    if (USE_DATABASE) {
      loadFromDatabase()
    } else {
      loadFromLocalStorage()
    }
  }

  const uniqId = () => Math.random().toString(36).slice(2) + Date.now().toString(36)

  const currencyDecimals = (currency) => (currency === 'JPY' ? 0 : 2)

  const formatMoney = (amount, currency) => {
    const dec = currencyDecimals(currency)
    const n = Number(amount || 0)
    const pow = 10 ** dec
    const fixed = (Math.round(n * pow) / pow).toFixed(dec)
    return `${fixed} ${currency}`
  }

  // ======= Total Summary (cross-currency) =======
  // We model manual/current as "1 CUR = X MYR" (MYR pivot).
  const [showTotalSummary, setShowTotalSummary] = useState(false)
  const [totalBaseCurrency, setTotalBaseCurrency] = useState('JPY') // 'JPY' | 'MYR' | 'SGD'
  const [rateMode, setRateMode] = useState('manual') // 'manual' | 'current'
  const [manualRatesToMyr, setManualRatesToMyr] = useState({
    JPY: '0.032',
    SGD: '3.4',
  })
  const [currentRatesToMyr, setCurrentRatesToMyr] = useState(null) // { MYR:1, JPY:number, SGD:number }
  const [rateLoading, setRateLoading] = useState(false)
  const [rateError, setRateError] = useState('')
  const [pieMode, setPieMode] = useState('category') // 'category' | 'member'

  const fetchCurrentRatesToMyr = async () => {
    try {
      setRateError('')
      setRateLoading(true)
      // Frankfurter supports MYR, JPY, SGD; no API key required.
      // Response is 1 MYR = X {JPY,SGD}; we invert to get 1 CUR = X MYR.
      const res = await fetch('https://api.frankfurter.app/latest?from=MYR&to=JPY,SGD')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      const myrToJpy = Number(data?.rates?.JPY)
      const myrToSgd = Number(data?.rates?.SGD)
      if (!isFinite(myrToJpy) || myrToJpy <= 0) throw new Error('Bad JPY rate')
      if (!isFinite(myrToSgd) || myrToSgd <= 0) throw new Error('Bad SGD rate')
      setCurrentRatesToMyr({
        MYR: 1,
        JPY: 1 / myrToJpy,
        SGD: 1 / myrToSgd,
      })
    } catch (e) {
      console.error('Failed to fetch FX rate:', e)
      setRateError(t('Failed to fetch current rate. Use manual rate.', '获取实时汇率失败。请使用手动汇率。'))
    } finally {
      setRateLoading(false)
    }
  }

  useEffect(() => {
    if (rateMode === 'current') {
      fetchCurrentRatesToMyr()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rateMode])

  const effectiveRatesToMyr = (() => {
    if (rateMode === 'current') return currentRatesToMyr
    const parsed = { MYR: 1 }
    for (const cur of ['JPY', 'SGD']) {
      const n = Number(manualRatesToMyr?.[cur])
      parsed[cur] = isFinite(n) && n > 0 ? n : null
    }
    return parsed
  })()

  const convertToBase = (amount, fromCurrency, baseCurrency) => {
    if (fromCurrency === baseCurrency) return amount
    const rates = effectiveRatesToMyr
    if (!rates) return null

    // Only support these currencies for now
    const supported = new Set(['JPY', 'MYR', 'SGD'])
    if (!supported.has(fromCurrency) || !supported.has(baseCurrency)) return null

    // Convert fromCurrency -> MYR
    let inMyr = null
    if (fromCurrency === 'MYR') {
      inMyr = amount
    } else {
      const toMyr = rates[fromCurrency]
      if (!toMyr) return null
      inMyr = amount * toMyr
    }

    // MYR -> baseCurrency
    if (baseCurrency === 'MYR') return inMyr
    const baseToMyr = rates[baseCurrency]
    if (!baseToMyr) return null
    return inMyr / baseToMyr
  }

  const calculateTotalSummary = () => {
    const selected = new Set(selectedMembers)
    const supported = new Set(['JPY', 'MYR', 'SGD'])
    const usedCurrencies = new Set()
    const unknownCurrencies = new Set()

    const byCategory = {}
    const byMember = {}
    let grand = 0

    expenses.forEach((exp) => {
      const cur = exp.currency || 'JPY'
      usedCurrencies.add(cur)
      if (!supported.has(cur)) unknownCurrencies.add(cur)

      // sum only selected members' shares for this expense
      let selectedShare = 0
      Object.entries(exp.splits || {}).forEach(([mid, v]) => {
        if (!selected.has(mid)) return
        selectedShare += Number(v || 0)
      })
      if (selectedShare <= 0) return

      const converted = convertToBase(selectedShare, cur, totalBaseCurrency)
      if (converted == null) return

      grand += converted

      const cat = exp.category || 'Other'
      byCategory[cat] = (byCategory[cat] || 0) + converted

      Object.entries(exp.splits || {}).forEach(([mid, v]) => {
        if (!selected.has(mid)) return
        const amt = Number(v || 0)
        if (amt <= 0) return
        const conv = convertToBase(amt, cur, totalBaseCurrency)
        if (conv == null) return
        byMember[mid] = (byMember[mid] || 0) + conv
      })
    })

    return {
      grand,
      byCategory,
      byMember,
      usedCurrencies: Array.from(usedCurrencies).sort(),
      unknownCurrencies: Array.from(unknownCurrencies).sort(),
    }
  }

  const PieChart = ({ data, totalCurrency }) => {
    const entries = Object.entries(data || {}).filter(([, v]) => Number(v) > 0)
    const total = entries.reduce((s, [, v]) => s + Number(v), 0)
    if (total <= 0) {
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          {t('No data to show for the selected members.', '所选成员暂无可展示的数据。')}
        </div>
      )
    }

    const colors = [
      '#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6',
      '#06b6d4', '#22c55e', '#e11d48', '#64748b', '#f97316',
    ]

    let acc = 0
    const radius = 54
    const cx = 64
    const cy = 64
    const circumference = 2 * Math.PI * radius

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <svg width="140" height="140" viewBox="0 0 128 128" role="img" aria-label="pie chart">
            <circle cx={cx} cy={cy} r={radius} fill="transparent" stroke="#e2e8f0" strokeWidth="18" />
            {entries.map(([label, value], idx) => {
              const fraction = Number(value) / total
              const dash = fraction * circumference
              const dashArray = `${dash} ${circumference - dash}`
              const dashOffset = -acc * circumference
              acc += fraction
              return (
                <circle
                  key={label}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="transparent"
                  stroke={colors[idx % colors.length]}
                  strokeWidth="18"
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${cx} ${cy})`}
                />
              )
            })}
            <text x="64" y="62" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="600">
              {t('Total', '总计')}
            </text>
            <text x="64" y="78" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="800">
              {formatMoney(total, totalCurrency)}
            </text>
          </svg>
        </div>

        <div className="space-y-2">
          {entries
            .sort((a, b) => Number(b[1]) - Number(a[1]))
            .map(([label, value], idx) => (
              <div key={label} className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="inline-block w-3 h-3 rounded"
                    style={{ backgroundColor: colors[idx % colors.length] }}
                  />
                  <span className="truncate">{label}</span>
                </div>
                <div className="font-semibold whitespace-nowrap">{formatMoney(value, totalCurrency)}</div>
              </div>
            ))}
        </div>
      </div>
    )
  }

  // (Moved) Settle Up UI is shown on Expenses page.

  // ========== MEMBER OPERATIONS ==========
  const addMember = async () => {
    const name = memberName.trim()
    if (!name) {
      setFormWarn(t('Member name cannot be empty.', '成员姓名不能为空。'))
      return
    }

    try {
      setFormWarn('')
      
      if (USE_DATABASE) {
        const newMember = await budgetService.addMember({ name })
        const newMembers = [...members, newMember]
        setMembers(newMembers)
        if (!expPaidBy) setExpPaidBy(newMember.id)
        setSplitWith(prev => new Set([...prev, newMember.id]))
        setSelectedMembers(prev => new Set([...prev, newMember.id])) // Auto-select new member
      } else {
        const newMember = { id: uniqId(), name }
        const newMembers = [...members, newMember]
        setMembers(newMembers)
        if (!expPaidBy) setExpPaidBy(newMember.id)
        setSplitWith(prev => new Set([...prev, newMember.id]))
        setSelectedMembers(prev => new Set([...prev, newMember.id])) // Auto-select new member
        saveToLocalStorage({ members: newMembers, expenses })
      }
      
      setMemberName('')
    } catch (err) {
      setFormWarn(t('Failed to add member. Please try again.', '添加成员失败。请重试。'))
      console.error('Error adding member:', err)
    }
  }

  const removeMember = async (id) => {
    try {
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

      if (USE_DATABASE) {
        await budgetService.deleteMember(id)
        // Update expenses that reference this member
        for (const exp of newExpenses) {
          if (exp.id) {
            await budgetService.updateExpense(exp.id, {
              splits: exp.splits,
              splitWith: exp.splitWith,
              paidBy: exp.paidBy
            })
          }
        }
        setMembers(newMembers)
        setExpenses(newExpenses)
      } else {
        setMembers(newMembers)
        setExpenses(newExpenses)
        saveToLocalStorage({ members: newMembers, expenses: newExpenses })
      }

      if (expPaidBy === id && newMembers.length > 0) setExpPaidBy(newMembers[0].id)
      setSplitWith(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
      setSelectedMembers(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
      
      // Remove from expanded members if expanded
      setExpandedMembers(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    } catch (err) {
      setFormWarn(t('Failed to remove member. Please try again.', '删除成员失败。请重试。'))
      console.error('Error removing member:', err)
    }
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
    const dec = currencyDecimals(expCurrency)
    const scale = 10 ** dec
    const units = Math.round(amt * scale)

    if (expCurrency === 'JPY' && Math.abs(amt - Math.round(amt)) > 0.0000001) {
      return { ok: false, msg: t('JPY amounts must be whole yen (no decimals).', '日元金额必须是整数（无小数）。') }
    }

    if (splitMode === 'equal') {
      // Rule: If payer is included, let payer pay less so the remaining (n-1) people split evenly.
      // Example: 10 JPY / 3 people => payer 2, others 4 & 4.
      if (checked.length === 1) {
        splits[checked[0]] = units / scale
        return { ok: true, splits }
      }

      const includesPayer = expPaidBy && checked.includes(expPaidBy)
      if (includesPayer) {
        const n = checked.length
        const payerMax = Math.floor(units / n) // <= average
        let payerUnits = payerMax
        while (payerUnits >= 0 && (units - payerUnits) % (n - 1) !== 0) payerUnits -= 1
        if (payerUnits < 0) payerUnits = payerMax // fallback (shouldn't happen)
        const otherUnits = Math.round((units - payerUnits) / (n - 1))
        checked.forEach((id) => {
          splits[id] = (id === expPaidBy ? payerUnits : otherUnits) / scale
        })
        return { ok: true, splits }
      }

      // Payer NOT included in split group. Use configurable remainder handling.
      const n = checked.length
      const floorEach = Math.floor(units / n)
      const remainder = units - floorEach * n

      if (remainder === 0) {
        checked.forEach((id) => {
          splits[id] = floorEach / scale
        })
        return { ok: true, splits }
      }

      if (roundingMode === 'round_up_payer_earns') {
        const ceilEach = Math.ceil(units / n)
        checked.forEach((id) => {
          splits[id] = ceilEach / scale
        })
        return { ok: true, splits }
      }

      // Default: random assignment of the extra smallest units (sum == amount)
      const ids = [...checked].sort()
      // Fisher-Yates shuffle
      for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[ids[i], ids[j]] = [ids[j], ids[i]]
      }
      const extraSet = new Set(ids.slice(0, remainder)) // remainder is in smallest units
      checked.forEach((id) => {
        splits[id] = (floorEach + (extraSet.has(id) ? 1 : 0)) / scale
      })
      return { ok: true, splits }
    }

    let sum = 0
    checked.forEach(id => {
      const v = Number(customSplits[id] || 0)
      if (expCurrency === 'JPY' && Math.abs(v - Math.round(v)) > 0.0000001) {
        // mark invalid via sum mismatch; error message below is clearer
      }
      splits[id] = v
      sum += v
    })
    if (expCurrency === 'JPY' && Math.abs(sum - Math.round(sum)) > 0.0000001) {
      return { ok: false, msg: t('JPY custom splits must be whole yen (no decimals).', '日元自定义分摊必须是整数（无小数）。') }
    }

    const diff = Math.abs(sum - amt)
    const tolerance = dec === 0 ? 0 : 0.01
    if (diff > tolerance) {
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

  // ========== EXPENSE OPERATIONS ==========
  const addExpense = async () => {
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
    
    try {
      const parsedAmount = parseAmount(expAmount)
      const newExpense = {
        date: expDate || new Date().toISOString().split('T')[0],
        category: expCategory,
        currency: expCurrency,
        description: expDesc.trim(),
        amount: parsedAmount,
        paidBy: expPaidBy,
        splitWith: Array.from(splitWith),
        splits
      }

      if (USE_DATABASE) {
        const createdExpense = await budgetService.addExpense(newExpense)
        setExpenses(prev => [...prev, normalizeExpenseForUI(createdExpense)])
      } else {
        const expenseWithId = { id: uniqId(), ...newExpense }
        const newExpenses = [...expenses, expenseWithId]
        setExpenses(newExpenses.map(normalizeExpenseForUI))
        saveToLocalStorage({ members, expenses: newExpenses })
      }

      setExpDesc('')
      setExpAmount('')
      setCustomSplits({})
    } catch (err) {
      setFormWarn(t('Failed to add expense. Please try again.', '添加费用失败。请重试。'))
      console.error('Error adding expense:', err)
    }
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
        saveToLocalStorage({ members, expenses: updatedExpenses })
      }
    } catch (error) {
      console.error('Error updating member paid status:', error)
    }
  }

  const deleteExpense = async (id) => {
    try {
      if (USE_DATABASE) {
        await budgetService.deleteExpense(id)
        setExpenses(prev => prev.filter(e => e.id !== id))
      } else {
        const newExpenses = expenses.filter(e => e.id !== id)
        setExpenses(newExpenses)
        saveToLocalStorage({ members, expenses: newExpenses })
      }
    } catch (err) {
      setFormWarn(t('Failed to delete expense. Please try again.', '删除费用失败。请重试。'))
      console.error('Error deleting expense:', err)
    }
  }

  const clearExpenses = async () => {
    if (window.confirm(t('Clear all expenses (keep members)?', '清除所有费用（保留成员）？'))) {
      try {
        if (USE_DATABASE) {
          // Delete all expenses from database
          const deletePromises = expenses.map(exp => budgetService.deleteExpense(exp.id))
          await Promise.all(deletePromises)
          setExpenses([])
        } else {
          setExpenses([])
          saveToLocalStorage({ members, expenses: [] })
        }
      } catch (err) {
        setFormWarn(t('Failed to clear expenses. Please try again.', '清除费用失败。请重试。'))
        console.error('Error clearing expenses:', err)
      }
    }
  }

  const resetAll = async () => {
    if (window.confirm(t('Reset EVERYTHING (members + expenses)?', '重置所有内容（成员 + 费用）？'))) {
      try {
        if (USE_DATABASE) {
          // Delete all expenses
          const deleteExpensePromises = expenses.map(exp => budgetService.deleteExpense(exp.id))
          await Promise.all(deleteExpensePromises)
          
          // Delete all members
          const deleteMemberPromises = members.map(m => budgetService.deleteMember(m.id))
          await Promise.all(deleteMemberPromises)
          
          // Initialize defaults
          await initializeDefaultMembers()
          setExpenses([])
        } else {
          localStorage.removeItem(STORAGE_KEY)
          const defaultMembers = DEFAULT_MEMBERS.map(name => ({ id: uniqId(), name }))
          setMembers(defaultMembers)
          setExpenses([])
          setExpPaidBy(defaultMembers[0]?.id || '')
          setSplitWith(new Set(defaultMembers.map(m => m.id)))
          saveToLocalStorage({ members: defaultMembers, expenses: [] })
        }
      } catch (err) {
        setFormWarn(t('Failed to reset. Please try again.', '重置失败。请重试。'))
        console.error('Error resetting:', err)
      }
    }
  }

  const exportCSV = () => {
    const selectedMembersList = members.filter(m => selectedMembers.has(m.id))
    const header = ['Date', 'Category', 'Currency', 'Description', 'Amount', 'PaidBy', ...selectedMembersList.map(m => m.name)]
    const rows = [header]
    expenses.forEach(exp => {
      const paidById = exp.paidBy ?? exp.paid_by ?? ''
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

  const calculateTotals = () => {
    const totals = {}
    const catTotals = {}
    
    // Only process expenses that involve selected members
    expenses.forEach(exp => {
      const cur = exp.currency || 'JPY'
      
      // Check if this expense has any splits with selected members
      const hasSelectedMemberSplits = Object.keys(exp.splits || {}).some(mid => 
        selectedMembers.has(mid) && (exp.splits[mid] || 0) > 0
      )
      
      if (!hasSelectedMemberSplits) return // Skip expenses with no selected member splits
      
      if (!totals[cur]) totals[cur] = {}
      if (!catTotals[cur]) catTotals[cur] = {}
      if (!catTotals[cur][exp.category]) catTotals[cur][exp.category] = 0
      
      // Calculate category total based on selected members' shares only
      let selectedMembersShare = 0
      Object.entries(exp.splits || {}).forEach(([mid, v]) => {
        if (selectedMembers.has(mid)) {
          selectedMembersShare += Number(v || 0)
          if (!totals[cur][mid]) totals[cur][mid] = 0
          totals[cur][mid] += Number(v || 0)
        }
      })
      
      // Add only the selected members' share to category total
      catTotals[cur][exp.category] += selectedMembersShare
    })
    return { totals, catTotals }
  }

  const { totals, catTotals } = calculateTotals()

  const toggleCategory = (currency, category) => {
    const key = `${currency}-${category}`
    setExpandedCategories(prev => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  const isCategoryExpanded = (currency, category) => {
    return expandedCategories.has(`${currency}-${category}`)
  }

  const toggleMember = (memberId) => {
    setExpandedMembers(prev => {
      const next = new Set(prev)
      if (next.has(memberId)) {
        next.delete(memberId)
      } else {
        next.add(memberId)
      }
      return next
    })
  }

  const isMemberExpanded = (memberId) => {
    return expandedMembers.has(memberId)
  }

  const getExpensesByCategory = (currency, category) => {
    return expenses.filter(exp => {
      if (exp.currency !== currency || exp.category !== category) return false
      // Only include expenses that have splits with selected members
      const hasSelectedMemberSplits = Object.keys(exp.splits || {}).some(mid => 
        selectedMembers.has(mid) && (exp.splits[mid] || 0) > 0
      )
      return hasSelectedMemberSplits
    }).map(exp => {
      // Calculate selected members' share for this expense
      const selectedMembersShare = Object.entries(exp.splits || {})
        .filter(([mid]) => selectedMembers.has(mid))
        .reduce((sum, [, amount]) => sum + Number(amount || 0), 0)
      return {
        ...exp,
        selectedMembersShare
      }
    })
  }

  const getExpensesByMember = (currency, memberId) => {
    return expenses.filter(exp => {
      if (exp.currency !== currency) return false
      const splitAmount = exp.splits?.[memberId] || 0
      return splitAmount > 0
    }).map(exp => ({
      ...exp,
      memberAmount: exp.splits?.[memberId] || 0
    }))
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
        <div className="flex items-center gap-4 mb-4">
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
          {error && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 max-w-md">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="inline-flex rounded-xl bg-white/70 border border-white/60 backdrop-blur-md p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'add' ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:bg-white hover:shadow-sm'
            }`}
          >
            <i className="fa-solid fa-receipt mr-2"></i>
            {t('Add an expense', '添加费用')}
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'summary' ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:bg-white hover:shadow-sm'
            }`}
          >
            <i className="fa-solid fa-chart-pie mr-2"></i>
            {t('Summary', '摘要')}
          </button>
          <Link
            to="/split-expenses/expenses"
            className={`px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'expenses' ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:bg-white hover:shadow-sm'
            }`}
            onClick={() => setActiveTab('expenses')}
          >
            <i className="fa-solid fa-list mr-2"></i>
            {t('Expenses', '费用')}
          </Link>
          <button
            onClick={() => setActiveTab('members')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'members' ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:bg-white hover:shadow-sm'
            }`}
          >
            <i className="fa-solid fa-users mr-2"></i>
            {t('Members', '成员')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6">
        {(activeTab === 'add' || activeTab === 'members') && (
        <div className="glass-card p-6">
          {activeTab === 'members' && (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-header text-xl font-bold text-slate-800 mb-1">
                    {t('Members', '成员')}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {USE_DATABASE 
                      ? t('Members are saved to database.', '成员已保存到数据库。')
                      : t('Members are saved automatically.', '成员会自动保存。')
                    }
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('add')}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-semibold"
                >
                  <i className="fa-solid fa-receipt mr-2"></i>
                  {t('Add an expense', '添加费用')}
                </button>
              </div>

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
                {members.length === 0 && (
                  <div className="text-sm text-slate-500">
                    {t('No members yet.', '还没有成员。')}
                  </div>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={resetAll}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  {t('Reset All Data', '重置所有数据')}
                </button>
              </div>
            </>
          )}

          {activeTab === 'add' && (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-header text-xl font-bold text-slate-800 mb-1">
                    {t('Add an expense', '添加费用')}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {t('Tip: Use "k" suffix (e.g., 5k = 5000).', '提示：可使用"k"后缀（例如 5k = 5000）。')}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('members')}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-semibold"
                >
                  <i className="fa-solid fa-users mr-2"></i>
                  {t('Manage members', '管理成员')}
                </button>
              </div>

              {members.length === 0 && (
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                  {t('No members yet. Add members first to split expenses.', '还没有成员。请先添加成员以进行费用分摊。')}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
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
                <option value="SGD">SGD</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              {t('Description', '描述')}
            </label>
            <textarea
              value={expDesc}
              onChange={(e) => setExpDesc(e.target.value)}
              placeholder={t('e.g., Ramen 50k, Meat 50k', '例如：拉面 50k，肉类 50k')}
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
            />
            <p className="text-xs text-slate-500 mt-1">
              {t('You can break down the expense here. e.g., "Ramen 50k, Meat 50k" for a 100k meal total.', '您可以在此处分解费用。例如：总餐费100k，可写"拉面 50k，肉类 50k"。')}
            </p>
          </div>

          <div className="mb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
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

          {splitMode === 'equal' && expPaidBy && !splitWith.has(expPaidBy) && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                {t(
                  'When it can’t split evenly (payer not included)',
                  '无法平均分摊时（付款人不参与分摊）'
                )}
              </label>
              <select
                value={roundingMode}
                onChange={(e) => setRoundingMode(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="random_extra">
                  {t('Randomly assign the extra to some members (total stays the same)', '随机分配零头给部分成员（总额不变）')}
                </option>
                <option value="round_up_payer_earns">
                  {t('Everyone rounds up; payer earns the extra', '所有人进位；付款人赚取零头')}
                </option>
              </select>
              <p className="text-xs text-slate-500 mt-1">
                {t(
                  'Tip: If the payer is included in “Split with”, we’ll make the payer pay less so everyone else pays the same.',
                  '提示：如果付款人也在“分摊对象”里，我们会让付款人付少一点，其余人付一样。'
                )}
              </p>
            </div>
          )}

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

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={addExpense}
              className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              <i className="fa-solid fa-plus mr-2"></i>
              {t('Add Expense', '添加费用')}
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              <i className="fa-solid fa-rotate-left mr-2"></i>
              {t('Reset All Data', '重置所有数据')}
            </button>
          </div>
            </>
          )}

          {formWarn && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              {formWarn}
            </div>
          )}
        </div>
        )}

        {activeTab === 'summary' && (
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
          </div>

          {/* Member Filter */}
          <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div></div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <button
                onClick={() => setShowTotalSummary(v => !v)}
                className="px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-semibold"
              >
                <i className="fa-solid fa-chart-pie mr-2"></i>
                {showTotalSummary ? t('Hide Total Summary', '隐藏总汇总') : t('Total Summary', '总汇总')}
              </button>
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

          {showTotalSummary && (
            <div className="mb-6 p-4 bg-white rounded-xl border border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-header text-lg font-bold text-slate-800">
                    {t('Total Summary (Combine currencies)', '总汇总（合并不同货币）')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t('Uses selected members only. Converts between JPY, MYR, and SGD.', '仅统计所选成员。支持 JPY、MYR、SGD 的换算。')}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 lg:col-span-1 min-w-[160px]">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    {t('Sum up in', '汇总货币')}
                  </label>
                  <select
                    value={totalBaseCurrency}
                    onChange={(e) => setTotalBaseCurrency(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="JPY">JPY</option>
                    <option value="MYR">MYR</option>
                    <option value="SGD">SGD</option>
                  </select>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 lg:col-span-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    {t('Exchange rate', '汇率')}
                  </label>
                  <select
                    value={rateMode}
                    onChange={(e) => setRateMode(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="manual">{t('Manual (host sets)', '手动（主持人设置）')}</option>
                    <option value="current">{t('Current rate (fetch)', '当前汇率（获取）')}</option>
                  </select>
                  <div className="mt-2 text-xs text-slate-600">
                    {t('We use: 1 CUR = X MYR', '使用：1 货币 = X 马币')}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 lg:col-span-7">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    {t('Rates (to MYR)', '汇率（换算到 MYR）')}
                  </label>
                  {rateMode === 'manual' ? (
                    <div className="space-y-2">
                      {(['JPY', 'SGD']).map((cur) => (
                        <div key={cur} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-12 text-sm font-semibold text-slate-700">{cur}</div>
                            <div className="text-xs text-slate-500">{t('1', '1')} {cur} =</div>
                          </div>
                          <input
                            type="number"
                            min="0"
                            step="0.000001"
                            value={manualRatesToMyr[cur]}
                            onChange={(e) => setManualRatesToMyr(prev => ({ ...prev, [cur]: e.target.value }))}
                            className="w-full sm:flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                          />
                          <div className="text-sm text-slate-600">MYR</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 text-sm text-slate-700">
                          {rateLoading
                            ? t('Fetching…', '获取中…')
                            : (currentRatesToMyr ? t('Fetched', '已获取') : t('Not fetched', '未获取'))}
                        </div>
                        <button
                          onClick={fetchCurrentRatesToMyr}
                          className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm font-semibold"
                          disabled={rateLoading}
                        >
                          {t('Refresh', '刷新')}
                        </button>
                      </div>
                      {currentRatesToMyr && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                          {(['JPY', 'SGD']).map((cur) => (
                            <div key={cur} className="px-3 py-2 border border-slate-300 rounded-lg bg-white">
                              <div className="text-xs text-slate-500">{t('1', '1')} {cur} =</div>
                              <div className="font-semibold text-slate-800">{String(currentRatesToMyr[cur])} MYR</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {rateError && <div className="text-xs text-red-600">{rateError}</div>}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    {t('Pie chart breakdown', '饼图分组')}
                  </label>
                  <select
                    value={pieMode}
                    onChange={(e) => setPieMode(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="category">{t('By category', '按类别')}</option>
                    <option value="member">{t('By member', '按成员')}</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    {t('Selected members count', '所选成员数量')}
                  </label>
                  <div className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm">
                    {members.filter(m => selectedMembers.has(m.id)).length} / {members.length}
                  </div>
                </div>
              </div>

              {(() => {
                const result = calculateTotalSummary()
                const selectedCount = members.filter(m => selectedMembers.has(m.id)).length
                if (selectedCount === 0) {
                  return (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                      {t('Select at least 1 member above.', '请在上方至少选择1位成员。')}
                    </div>
                  )
                }
                // If multiple currencies are present, ensure all needed rates exist.
                const needsRates = result.usedCurrencies.some(c => c !== 'MYR')
                if (needsRates) {
                  const rates = effectiveRatesToMyr
                  const missing = result.usedCurrencies
                    .filter(c => c !== 'MYR')
                    .filter(c => !rates || !rates[c])
                  if (missing.length > 0) {
                    return (
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                        {t(
                          `Set an exchange rate for: ${missing.join(', ')} (to MYR).`,
                          `请设置以下货币的汇率（换算到 MYR）：${missing.join(', ')}。`
                        )}
                      </div>
                    )
                  }
                }
                if (result.unknownCurrencies.length > 0) {
                  return (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                      {t(
                        `Some currencies are not supported yet: ${result.unknownCurrencies.join(', ')}. They are excluded from Total Summary.`,
                        `暂不支持的货币：${result.unknownCurrencies.join(', ')}。这些费用不会计入总汇总。`
                      )}
                    </div>
                  )
                }

                const pieData =
                  pieMode === 'member'
                    ? Object.fromEntries(
                        Object.entries(result.byMember).map(([mid, v]) => [
                          members.find(m => m.id === mid)?.name || mid,
                          v,
                        ])
                      )
                    : result.byCategory

                return (
                  <>
                    <PieChart data={pieData} totalCurrency={totalBaseCurrency} />
                    <div className="mt-4 text-sm text-slate-700">
                      <span className="font-semibold">{t('Grand total:', '总计：')}</span>{' '}
                      <span className="font-bold">{formatMoney(result.grand, totalBaseCurrency)}</span>
                    </div>
                  </>
                )
              })()}
            </div>
          )}

          {/* Totals */}
          <div className="mb-6">
            {members.length === 0 ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                {t('No members yet.', '还没有成员。')}
              </div>
            ) : Object.keys(totals).length === 0 ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                {t('No expenses yet. Add your first expense in "Add an expense".', '还没有费用。请在“添加费用”中添加您的第一笔费用。')}
              </div>
            ) : (
              Object.keys(totals).sort().map(cur => {
                // Calculate grand total from selected members' totals only
                const grand = Object.entries(totals[cur] || {})
                  .filter(([mid]) => selectedMembers.has(mid))
                  .reduce((sum, [, amount]) => sum + amount, 0)
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
                            {members.filter(m => selectedMembers.has(m.id)).map(m => {
                              const v = totals[cur][m.id] || 0
                              const isExpanded = isMemberExpanded(m.id)
                              const memberExpenses = getExpensesByMember(cur, m.id)
                              return (
                                <React.Fragment key={m.id}>
                                  <tr 
                                    className="border-t border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors"
                                    onClick={() => toggleMember(m.id)}
                                  >
                                    <td className="p-2">
                                      <div className="flex items-center gap-2">
                                        <i className={`fa-solid fa-chevron-${isExpanded ? 'down' : 'right'} text-xs text-slate-500 transition-transform`}></i>
                                        <span className="font-medium">{m.name}</span>
                                      </div>
                                    </td>
                                    <td className="p-2 text-right font-semibold">{formatMoney(v, cur)}</td>
                                  </tr>
                                  {isExpanded && memberExpenses.length > 0 && (
                                    <tr className="border-t border-slate-100 bg-slate-50">
                                      <td colSpan="2" className="p-2 pl-8">
                                        <div className="space-y-1">
                                          {memberExpenses.map(exp => (
                                            <div key={exp.id} className="text-sm text-slate-700 flex items-center justify-between">
                                              <span>{exp.description || exp.category}</span>
                                              <span className="font-semibold">{formatMoney(exp.memberAmount, cur)}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </React.Fragment>
                              )
                            })}
                            {members.filter(m => selectedMembers.has(m.id)).length === 0 && (
                              <tr>
                                <td colSpan="2" className="p-2 text-xs text-slate-500 text-center">
                                  {t('No members selected', '未选择成员')}
                                </td>
                              </tr>
                            )}
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
                            {Object.keys(catTotals[cur] || {}).sort().map(cat => {
                              const isExpanded = isCategoryExpanded(cur, cat)
                              const categoryExpenses = getExpensesByCategory(cur, cat)
                              return (
                                <React.Fragment key={cat}>
                                  <tr 
                                    className="border-t border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors"
                                    onClick={() => toggleCategory(cur, cat)}
                                  >
                                    <td className="p-2">
                                      <div className="flex items-center gap-2">
                                        <i className={`fa-solid fa-chevron-${isExpanded ? 'down' : 'right'} text-xs text-slate-500 transition-transform`}></i>
                                        <span className="font-medium">{cat}</span>
                                      </div>
                                    </td>
                                    <td className="p-2 text-right font-semibold">
                                      {formatMoney(catTotals[cur][cat], cur)}
                                    </td>
                                  </tr>
                                  {isExpanded && categoryExpenses.length > 0 && (
                                    <tr>
                                      <td colSpan="2" className="p-2 bg-slate-50">
                                        <div className="pl-6 space-y-2">
                                          {categoryExpenses.map(exp => {
                                            const paidById = exp.paidBy ?? exp.paid_by ?? ''
                                            const paidByName = members.find(m => m.id === paidById)?.name || '-'
                                            return (
                                              <div 
                                                key={exp.id}
                                                className="flex items-center justify-between text-xs border-b border-slate-200 pb-2 last:border-0 last:pb-0"
                                              >
                                                <div className="flex-1">
                                                  <Link 
                                                    to={`/split-expenses/expense/${exp.id}`}
                                                    className="text-slate-700 hover:text-emerald-600 transition-colors"
                                                  >
                                                    <div className="font-medium">{exp.description || exp.desc || t('No description', '无描述')}</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">
                                                      {exp.date} • {t('Paid by', '付款人')}: {paidByName}
                                                    </div>
                                                  </Link>
                                                </div>
                                                <div className="text-right ml-4">
                                                  <Link 
                                                    to={`/split-expenses/expense/${exp.id}`}
                                                    className="text-slate-700 hover:text-emerald-600 transition-colors font-semibold"
                                                  >
                                                    {formatMoney(exp.selectedMembersShare || 0, exp.currency)}
                                                  </Link>
                                                </div>
                                              </div>
                                            )
                                          })}
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </React.Fragment>
                              )
                            })}
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
        </div>
        )}
      </div>
    </div>
  )
}

export default BudgetSplitter
