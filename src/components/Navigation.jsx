import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { toggleLanguage, t } = useLanguage()

  const navLinks = [
    { path: '/flights', label: { en: 'Flights', zh: '航班' }, icon: 'fa-plane' },
    { path: '/schedule', label: { en: 'Itinerary', zh: '行程' }, icon: 'fa-calendar-days' },
    { path: '/budget', label: { en: 'Budget', zh: '预算' }, icon: 'fa-yen-sign' },
    { path: '/packing', label: { en: 'Packing', zh: '清单' }, icon: 'fa-suitcase' },
    { path: '/attractions', label: { en: 'Attractions', zh: '景点' }, icon: 'fa-camera' },
    { path: '/hotels', label: { en: 'Hotels', zh: '住宿' }, icon: 'fa-hotel' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-pink-500 text-2xl mr-2 group-hover:scale-110 transition-transform">
                🌸
              </span>
              <span className="font-header text-xl font-bold text-slate-800 tracking-tight">
                {t('Japan Trip', '日本之旅')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  isActive(link.path)
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50 hover:scale-105'
                }`}
              >
                {t(link.label.en, link.label.zh)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full border border-slate-300 font-bold text-xs transition-all duration-200 hover:scale-105"
            >
              🌐 EN / 中
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg border border-slate-300 text-sm transition-all duration-200 active:scale-95"
            >
              🌐
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center w-12 h-12 bg-transparent border-2 border-slate-200 rounded-xl transition-all duration-300 hover:bg-pink-50 hover:border-pink-400"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute block w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                    isMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-slate-600 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                    isMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-pink-200 shadow-lg mobile-menu-enter">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-pink-100 text-pink-600 border-l-4 border-pink-500'
                    : 'text-slate-700 hover:bg-pink-50 hover:translate-x-1 border-l-4 border-transparent'
                }`}
              >
                <i className={`fa-solid ${link.icon} mr-3 text-pink-500 w-5`}></i>
                {t(link.label.en, link.label.zh)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
