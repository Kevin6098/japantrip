import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
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
import AttractionDetailPage from './pages/AttractionDetailPage'
import Food from './pages/Food'
import RestaurantDetailPage from './pages/RestaurantDetailPage'
import TransportationBudget from './pages/TransportationBudget'
import Checklist from './pages/Checklist'

function AppContent() {
  const { t } = useLanguage()
  
  React.useEffect(() => {
    document.title = `${t('Japan Trip', '日本之旅')} 2026`
  }, [t])

  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule/day/:day" element={<DaySchedule />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attractions/:id" element={<AttractionDetailPage />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food/:id" element={<RestaurantDetailPage />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/transportation-budget" element={<TransportationBudget />} />
            <Route path="/packing" element={<Packing />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/split-expenses" element={<BudgetSplitter />} />
            <Route path="/split-expenses/expenses" element={<ExpensesList />} />
            <Route path="/split-expenses/expense/:id" element={<ExpenseDetail />} />
          </Routes>
      </Layout>
    </Router>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
