import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { budgetService } from '../services/budgetService'

const STORAGE_KEY = 'jp_trip_budget_splitter_v1'
const USE_DATABASE = import.meta.env.VITE_USE_DATABASE === 'true' || false

const ExpenseDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [expense, setExpense] = useState(null)
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    loadData()
  }, [id])

  const loadData = async () => {
    try {
      setLoading(true)
      
      if (USE_DATABASE) {
        const [expensesData, membersData] = await Promise.all([
          budgetService.getExpenses(),
          budgetService.getMembers()
        ])
        const foundExpense = expensesData.find(e => e.id === id)
        if (!foundExpense) {
          navigate('/split-expenses')
          return
        }
        setExpense(foundExpense)
        setMembers(membersData)
      } else {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) {
          navigate('/split-expenses')
          return
        }
        const state = JSON.parse(raw)
        const foundExpense = state.expenses?.find(e => e.id === id)
        if (!foundExpense) {
          navigate('/split-expenses')
          return
        }
        setExpense(foundExpense)
        setMembers(state.members || [])
      }
    } catch (error) {
      console.error('Error loading expense:', error)
      navigate('/split-expenses')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!expense) return
    
    try {
      setDeleting(true)
      
      if (USE_DATABASE) {
        await budgetService.deleteExpense(expense.id)
      } else {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const state = JSON.parse(raw)
          const newExpenses = state.expenses.filter(e => e.id !== expense.id)
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...state,
            expenses: newExpenses
          }))
        }
      }
      
      // Navigate back to budget splitter
      navigate('/split-expenses')
    } catch (error) {
      console.error('Error deleting expense:', error)
      alert(t('Failed to delete expense. Please try again.', '删除费用失败。请重试。'))
    } finally {
      setDeleting(false)
      setShowDeleteConfirm(false)
    }
  }

  const formatMoney = (amount, currency) => {
    const n = Number(amount || 0)
    const fixed = (Math.round(n * 100) / 100).toFixed(2)
    return `${fixed} ${currency}`
  }

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          <p className="mt-4 text-slate-600">{t('Loading...', '加载中...')}</p>
        </div>
      </div>
    )
  }

  if (!expense) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Expense not found', '未找到费用')}
          </h1>
          <Link to="/split-expenses" className="text-emerald-600 hover:text-emerald-800">
            {t('← Back to Budget Splitter', '← 返回费用分摊器')}
          </Link>
        </div>
      </div>
    )
  }

  const paidByName = members.find(m => m.id === expense.paidBy)?.name || '-'

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/split-expenses"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-4"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{t('Back to Budget Splitter', '返回费用分摊器')}</span>
        </Link>
        <h1 className="text-3xl font-header font-bold text-slate-800">
          {t('Expense Details', '费用详情')}
        </h1>
      </div>

      {/* Expense Card */}
      <div className="glass-card p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Date', '日期')}
              </label>
              <p className="text-lg text-slate-800 mt-1">{expense.date || '-'}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Category', '类别')}
              </label>
              <p className="text-lg text-slate-800 mt-1">{expense.category || '-'}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Currency', '货币')}
              </label>
              <p className="text-lg text-slate-800 mt-1">{expense.currency || 'JPY'}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Amount', '金额')}
              </label>
              <p className="text-2xl font-bold text-emerald-600 mt-1">
                {formatMoney(expense.amount, expense.currency)}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Description', '描述')}
              </label>
              <p className="text-lg text-slate-800 mt-1 whitespace-pre-wrap">
                {expense.description || expense.desc || '-'}
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {t('Paid By', '付款人')}
              </label>
              <p className="text-lg text-slate-800 mt-1">{paidByName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Split Details */}
      <div className="glass-card p-6 mb-6">
        <h2 className="text-xl font-header font-bold text-slate-800 mb-4">
          {t('Split Details', '分摊详情')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-3 font-semibold text-slate-700">{t('Member', '成员')}</th>
                <th className="text-right p-3 font-semibold text-slate-700">{t('Amount', '金额')}</th>
              </tr>
            </thead>
            <tbody>
              {members.map(m => {
                const splitAmount = expense.splits?.[m.id] || 0
                if (splitAmount <= 0) return null
                return (
                  <tr key={m.id} className="border-t border-slate-200">
                    <td className="p-3">{m.name}</td>
                    <td className="p-3 text-right font-semibold">
                      {formatMoney(splitAmount, expense.currency)}
                    </td>
                  </tr>
                )
              })}
              {Object.keys(expense.splits || {}).filter(id => {
                const amount = expense.splits[id] || 0
                return amount > 0
              }).length === 0 && (
                <tr>
                  <td colSpan="2" className="p-3 text-center text-slate-500">
                    {t('No splits found', '未找到分摊信息')}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Button */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => setShowDeleteConfirm(true)}
          disabled={deleting}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {deleting ? t('Deleting...', '删除中...') : t('Delete Expense', '删除费用')}
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              {t('Confirm Delete', '确认删除')}
            </h3>
            <p className="text-slate-600 mb-6">
              {t(
                'Are you sure you want to delete this expense? This action cannot be undone.',
                '您确定要删除此费用吗？此操作无法撤销。'
              )}
            </p>
            <div className="bg-slate-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-slate-500 mb-1">{t('Date', '日期')}: {expense.date}</p>
              <p className="text-sm text-slate-500 mb-1">{t('Category', '类别')}: {expense.category}</p>
              <p className="text-sm text-slate-500 mb-1">{t('Description', '描述')}: {expense.description || expense.desc || '-'}</p>
              <p className="text-sm font-semibold text-slate-800">
                {t('Amount', '金额')}: {formatMoney(expense.amount, expense.currency)}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
                className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-semibold disabled:opacity-50"
              >
                {t('Cancel', '取消')}
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50"
              >
                {deleting ? t('Deleting...', '删除中...') : t('Delete', '删除')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpenseDetail
