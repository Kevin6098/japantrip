import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Countdown from '../components/Countdown'
import QuickLinkCard from '../components/QuickLinkCard'

const Home = () => {
  const { t } = useLanguage()

  const quickLinks = [
    {
      to: '/flights',
      icon: 'fa-plane-arrival',
      title: t('Flights', '航班信息'),
      description: t('Flight schedules and arrival times', '航班时刻表和抵达时间'),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      to: '/schedule',
      icon: 'fa-calendar-days',
      title: t('Itinerary', '行程'),
      description: t('Daily schedule and timeline', '每日行程和时间表'),
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-500',
    },
    {
      to: '/budget',
      icon: 'fa-wallet',
      title: t('Budget', '预算'),
      description: t('Daily pocket money estimates', '每日零花钱估算'),
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      to: '/hotels',
      icon: 'fa-bed',
      title: t('Hotels', '住宿'),
      description: t('Accommodation details', '住宿详情'),
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-500',
    },
    {
      to: '/attractions',
      icon: 'fa-camera-retro',
      title: t('Attractions', '景点'),
      description: t('Must-see places and photos', '必看景点和照片'),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      to: '/packing',
      icon: 'fa-suitcase',
      title: t('Packing', '清单'),
      description: t('Essential items checklist', '必备物品清单'),
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-500',
    },
    {
      to: '/food',
      icon: 'fa-utensils',
      title: t('Food & Restaurants', '美食与餐厅'),
      description: t('Restaurants and dining experiences', '餐厅和用餐体验'),
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-12 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-[60vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          {/* Countdown Timer */}
          <div className="mb-6 animate-fade-in">
            <Countdown />
          </div>

          {/* Excitement Badge */}
          <span className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-[length:200%_100%] animate-shimmer">
            🌸 {t('Spring 2026 Adventure Awaits!', '2026年春 冒险即将开始！')}
          </span>

          {/* Title */}
          <h1 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 leading-tight animate-slide-up">
            {t('Japan Trip', '日本之旅')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 font-light px-2">
            {t('Tokyo • Saitama • Osaka • Kyoto • Nara', '东京 • 埼玉 • 大阪 • 京都 • 奈良')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/schedule" className="btn-primary">
              <i className="fa-solid fa-map mr-2"></i>
              {t('View Plan', '查看计划')}
            </Link>
            <Link to="/attractions" className="btn-secondary">
              <i className="fa-solid fa-camera mr-2 text-purple-500"></i>
              {t('See Attractions', '查看景点')}
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 relative z-20 pb-20 md:pb-24">
        {/* Featured: Budget Splitter */}
        <div className="mb-8 animate-fade-in">
          <Link to="/split-expenses" className="block group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="relative bg-white rounded-xl p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                      <i className="fa-solid fa-calculator text-3xl text-emerald-600"></i>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-header text-2xl font-bold text-slate-800">
                          {t('Budget Splitter', '费用分摊器')}
                        </h3>
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                          {t('NEW', '新')}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">
                        {t('Track & split expenses with your group', '与团队追踪和分摊费用')}
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-2xl text-emerald-600 group-hover:translate-x-2 transition-transform"></i>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                    {t('Auto Split', '自动分摊')}
                  </span>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold">
                    {t('Multi-Currency', '多货币')}
                  </span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-semibold">
                    {t('Offline', '离线')}
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-semibold">
                    {t('10 Members', '10位成员')}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <QuickLinkCard {...link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-12 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-[60vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          {/* Countdown Timer */}
          <div className="mb-6 animate-fade-in">
            <Countdown />
          </div>

          {/* Excitement Badge */}
          <span className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-[length:200%_100%] animate-shimmer">
            🌸 {t('Spring 2026 Adventure Awaits!', '2026年春 冒险即将开始！')}
          </span>

          {/* Title */}
          <h1 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 leading-tight animate-slide-up">
            {t('Japan Trip', '日本之旅')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 font-light px-2">
            {t('Tokyo • Saitama • Osaka • Kyoto • Nara', '东京 • 埼玉 • 大阪 • 京都 • 奈良')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/schedule" className="btn-primary">
              <i className="fa-solid fa-map mr-2"></i>
              {t('View Plan', '查看计划')}
            </Link>
            <Link to="/attractions" className="btn-secondary">
              <i className="fa-solid fa-camera mr-2 text-purple-500"></i>
              {t('See Attractions', '查看景点')}
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 relative z-20 pb-20 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <QuickLinkCard {...link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
