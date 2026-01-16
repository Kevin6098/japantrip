import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Attractions from './pages/Attractions'
import Flights from './pages/Flights'
import Budget from './pages/Budget'
import Packing from './pages/Packing'
import Hotels from './pages/Hotels'
import BudgetSplitter from './pages/BudgetSplitter'
import ExpenseDetail from './pages/ExpenseDetail'
import ExpensesList from './pages/ExpensesList'
import DaySchedule from './pages/DaySchedule'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule/day/:day" element={<DaySchedule />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/packing" element={<Packing />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/split-expenses" element={<BudgetSplitter />} />
            <Route path="/split-expenses/expenses" element={<ExpensesList />} />
            <Route path="/split-expenses/expense/:id" element={<ExpenseDetail />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App
