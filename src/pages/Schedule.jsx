import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getScheduleData } from '../data/scheduleData'

const Schedule = () => {
  const { t } = useLanguage()
  const schedule = getScheduleData(t)

  const getColorBg = (color) => {
    const colors = {
      indigo: 'bg-indigo-500',
      green: 'bg-green-600',
      emerald: 'bg-emerald-500',
      teal: 'bg-teal-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500',
      sky: 'bg-sky-500',
      pink: 'bg-pink-500',
    }
    return colors[color] || colors.indigo
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-pink-100 mb-4">
          <i className="fa-regular fa-calendar-days text-pink-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Daily Schedule', '每日行程', '日程')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          🗾 {t('11 amazing days of adventure await!', '11天的精彩冒险等着您！', '11日間の冒険が待っています！')}
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
        {schedule.map((day) => (
          <Link
            key={day.day}
            to={`/schedule/day/${day.day}`}
            className="glass-card rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className={`${getColorBg(day.color)} p-4 text-white`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm">
                  {t('Day', '第', '')} {day.day} {t('Day', '天', '日目')}
                </span>
                <span className="text-xs">{day.date}</span>
              </div>
              <h3 className="text-lg font-bold">{day.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                {day.items
                  .slice(0, 2)
                  .map(item =>
                    t(
                      typeof item.text === 'string' ? item.text : item.text?.en || '',
                      typeof item.text === 'string' ? item.text : item.text?.zh || '',
                      typeof item.text === 'string' ? item.text : item.text?.ja || ''
                    )
                  )
                  .join(' → ')}
              </p>
              <div className="w-full text-xs font-bold text-slate-600 hover:text-slate-800 flex items-center justify-center gap-2">
                <span>{t('View Details', '查看详情', '詳細を見る')}</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Schedule
