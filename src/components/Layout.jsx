import React from 'react'
import Navigation from './Navigation'
import SakuraAnimation from './SakuraAnimation'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <SakuraAnimation />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

export default Layout
