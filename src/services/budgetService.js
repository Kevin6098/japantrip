/**
 * Budget Service - Connects React to PostgreSQL via PostgREST
 * No Node.js backend needed!
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// Helper function to handle API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'return=representation', // Return created/updated data
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }))
      throw new Error(error.message || `HTTP ${response.status}: ${response.statusText}`)
    }

    // Handle 204 No Content (for DELETE)
    if (response.status === 204) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error)
    throw error
  }
}

export const budgetService = {
  // ========== MEMBERS ==========
  
  /**
   * Get all members
   * GET /api/members
   */
  async getMembers() {
    const data = await apiRequest('/members?order=created_at.asc')
    return Array.isArray(data) ? data : []
  },

  /**
   * Add a new member
   * POST /api/members
   */
  async addMember(member) {
    const data = await apiRequest('/members', {
      method: 'POST',
      body: JSON.stringify({
        name: member.name.trim(),
      }),
    })
    return Array.isArray(data) ? data[0] : data
  },

  /**
   * Update a member
   * PATCH /api/members?id=eq.{id}
   */
  async updateMember(memberId, updates) {
    const data = await apiRequest(`/members?id=eq.${memberId}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    })
    return Array.isArray(data) ? data[0] : data
  },

  /**
   * Delete a member
   * DELETE /api/members?id=eq.{id}
   */
  async deleteMember(memberId) {
    await apiRequest(`/members?id=eq.${memberId}`, {
      method: 'DELETE',
    })
  },

  // ========== EXPENSES ==========

  /**
   * Get all expenses
   * GET /api/expenses?order=date.desc
   */
  async getExpenses() {
    const data = await apiRequest('/expenses?order=date.desc,created_at.desc')
    return Array.isArray(data) ? data : []
  },

  /**
   * Get expenses with member details (joined)
   * GET /api/expenses?select=*,paid_by_member:members!expenses_paid_by_fkey(*)
   */
  async getExpensesWithMembers() {
    const data = await apiRequest(
      '/expenses?select=*,paid_by_member:members!expenses_paid_by_fkey(name)&order=date.desc,created_at.desc'
    )
    return Array.isArray(data) ? data : []
  },

  /**
   * Add a new expense
   * POST /api/expenses
   */
  async addExpense(expense) {
    // Convert splits object to JSONB format
    const expenseData = {
      date: expense.date,
      category: expense.category,
      currency: expense.currency,
      description: expense.description || null,
      amount: parseFloat(expense.amount),
      paid_by: expense.paidBy,
      split_with: expense.splitWith || [],
      splits: expense.splits || {},
    }

    const data = await apiRequest('/expenses', {
      method: 'POST',
      body: JSON.stringify(expenseData),
    })
    return Array.isArray(data) ? data[0] : data
  },

  /**
   * Update an expense
   * PATCH /api/expenses?id=eq.{id}
   */
  async updateExpense(expenseId, updates) {
    const expenseData = {
      ...updates,
      updated_at: new Date().toISOString(),
    }
    
    const data = await apiRequest(`/expenses?id=eq.${expenseId}`, {
      method: 'PATCH',
      body: JSON.stringify(expenseData),
    })
    return Array.isArray(data) ? data[0] : data
  },

  /**
   * Delete an expense
   * DELETE /api/expenses?id=eq.{id}
   */
  async deleteExpense(expenseId) {
    await apiRequest(`/expenses?id=eq.${expenseId}`, {
      method: 'DELETE',
    })
  },

  /**
   * Get expenses by date range
   * GET /api/expenses?date=gte.{startDate}&date=lte.{endDate}
   */
  async getExpensesByDateRange(startDate, endDate) {
    const data = await apiRequest(
      `/expenses?date=gte.${startDate}&date=lte.${endDate}&order=date.desc`
    )
    return Array.isArray(data) ? data : []
  },

  /**
   * Get expenses by category
   * GET /api/expenses?category=eq.{category}
   */
  async getExpensesByCategory(category) {
    const data = await apiRequest(
      `/expenses?category=eq.${category}&order=date.desc`
    )
    return Array.isArray(data) ? data : []
  },

  /**
   * Get total expenses by currency
   * GET /api/expenses?select=currency,amount
   */
  async getTotalsByCurrency() {
    const expenses = await this.getExpenses()
    const totals = {}
    
    expenses.forEach(exp => {
      const cur = exp.currency || 'JPY'
      if (!totals[cur]) totals[cur] = 0
      totals[cur] += parseFloat(exp.amount || 0)
    })
    
    return totals
  },
}
