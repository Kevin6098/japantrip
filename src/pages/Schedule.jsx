import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getScheduleData } from '../data/scheduleData'

const Schedule = () => {
  const { t } = useLanguage()
  const schedule = getScheduleData(t)

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'border-indigo-500 text-indigo-700',
      green: 'border-green-600 text-green-700',
      emerald: 'border-emerald-600 text-emerald-700',
      teal: 'border-teal-600 text-teal-700',
      orange: 'border-orange-500 text-orange-600',
      red: 'border-red-500 text-red-600',
      sky: 'border-sky-500 text-sky-600',
      pink: 'border-pink-500 text-pink-600',
    }
    return colors[color] || colors.indigo
  }

  const renderItem = (item, itemIndex) => {
    const content = item.link ? (
      <a
        href={item.link}
        className={`text-sm hover:underline ${
          item.highlight
            ? 'bg-yellow-100 px-2 py-0.5 rounded text-yellow-900 font-semibold inline-flex items-center gap-1'
            : ''
        }`}
      >
        {item.text}
        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </a>
    ) : (
      <span
        className={`text-sm ${
          item.special
            ? 'font-bold text-slate-800'
            : item.highlight
            ? 'bg-yellow-100 px-2 py-0.5 rounded text-yellow-900 font-semibold'
            : item.muted
            ? 'text-slate-500'
            : 'text-slate-700'
        }`}
      >
        {item.text}
      </span>
    )

    return (
      <React.Fragment key={itemIndex}>
        <li className="flex items-start gap-3">
          {item.time && (
            <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded min-w-[60px] text-center shrink-0">
              {item.time}
            </span>
          )}
          <div className="flex-grow">
            <div className="flex items-center gap-2 flex-wrap">
              {content}
              {item.note && (
                <span className="text-sm text-slate-600">{item.note}</span>
              )}
              {item.price && (
                <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">
                  {item.price}
                </span>
              )}
              {item.mapLink && (
                <a
                  href={item.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800"
                  title={t('Open in Google Maps', '在Google地图中打开')}
                >
                  <i className="fa-solid fa-map-location-dot"></i> {t('Map', '地图')}
                </a>
              )}
            </div>
            {item.prices && (
              <div className="ml-0 mt-2 space-y-1">
                {item.prices.map((price, idx) => (
                  <span
                    key={idx}
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mr-2 ${
                      price.highlight
                        ? 'bg-yellow-100 border-yellow-200 text-yellow-800'
                        : 'text-green-700 bg-green-100 border-green-200'
                    }`}
                  >
                    {price.label}: {price.value}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
        {item.transit && (
          <li className="ml-14 mb-2">
            <span className="text-xs text-slate-500 italic block">
              {item.transit}
            </span>
          </li>
        )}
      </React.Fragment>
    )
  }

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
            {t('Daily Schedule', '每日行程')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          🗾 {t('11 amazing days of adventure await!', '11天的精彩冒险等着您！')}
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
                  {t('Day', '第')} {day.day} {t('Day', '天')}
                </span>
                <span className="text-xs">{day.date}</span>
              </div>
              <h3 className="text-lg font-bold">{day.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                {day.items.slice(0, 2).map(item => t(typeof item.text === 'string' ? item.text : item.text?.en || '', typeof item.text === 'string' ? item.text : item.text?.zh || '')).join(' → ')}
              </p>
              <div className="w-full text-xs font-bold text-slate-600 hover:text-slate-800 flex items-center justify-center gap-2">
                <span>{t('View Details', '查看详情')}</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-300 rounded hidden sm:block"></div>

        {schedule.map((day, index) => (
          <div
            key={day.day}
            className="relative pl-0 sm:pl-12 md:pl-20 animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-2.5 md:left-6 w-5 h-5 bg-white rounded-full border-4 hidden sm:block ${
                getColorClasses(day.color).split(' ')[0]
              }`}
            ></div>

            {/* Card */}
            <div className="mb-4">
              <h3 className={`text-2xl font-header font-bold mb-1 ${getColorClasses(day.color).split(' ')[1]}`}>
                {day.title}
              </h3>
              <p className={`font-bold text-xs uppercase tracking-widest mb-1 ${day.isHoliday ? 'text-slate-400' : 'text-pink-500'}`}>
                {day.date} {day.isHoliday && t('(Holiday)', '(假日)')}
              </p>
              <p className="text-slate-500 text-sm">📍 {day.location}</p>
            </div>

            <div className={`glass-card border-l-4 ${getColorClasses(day.color).split(' ')[0]}`}>
              <ul className="space-y-1">
                {day.items.map((item, itemIndex) => renderItem(item, itemIndex))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
