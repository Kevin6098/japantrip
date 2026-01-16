import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getScheduleData } from '../data/scheduleData'

const DaySchedule = () => {
  const { day } = useParams()
  const { t } = useLanguage()
  const dayNum = parseInt(day, 10)
  const schedule = getScheduleData(t)
  const dayData = schedule.find(d => d.day === dayNum)

  if (!dayData) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Day not found', '未找到该天')}
          </h1>
          <Link to="/schedule" className="text-emerald-600 hover:text-emerald-800">
            {t('← Back to Itinerary', '← 返回行程')}
          </Link>
        </div>
      </div>
    )
  }

  const renderItem = (item, itemIndex) => {
    const itemText = typeof item.text === 'string' ? item.text : t(item.text?.en || '', item.text?.zh || '')
    const itemTransit = item.transit ? (typeof item.transit === 'string' ? item.transit : t(item.transit?.en || '', item.transit?.zh || '')) : null
    const itemNote = item.note ? (typeof item.note === 'string' ? item.note : t(item.note?.en || '', item.note?.zh || '')) : null

    const content = item.link ? (
      <Link
        to={item.link}
        className={`text-sm hover:underline ${
          item.highlight
            ? 'bg-yellow-100 px-2 py-0.5 rounded text-yellow-900 font-semibold inline-flex items-center gap-1'
            : ''
        }`}
      >
        {itemText}
        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </Link>
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
        {itemText}
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
              {itemNote && (
                <span className="text-sm text-slate-600">{itemNote}</span>
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
        {itemTransit && (
          <li className="ml-14 mb-2">
            <span className="text-xs text-slate-500 italic block">
              {itemTransit}
            </span>
          </li>
        )}
      </React.Fragment>
    )
  }

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'border-indigo-500 text-indigo-700 bg-indigo-50',
      green: 'border-green-600 text-green-700 bg-green-50',
      emerald: 'border-emerald-600 text-emerald-700 bg-emerald-50',
      teal: 'border-teal-600 text-teal-700 bg-teal-50',
      orange: 'border-orange-500 text-orange-600 bg-orange-50',
      red: 'border-red-500 text-red-600 bg-red-50',
      sky: 'border-sky-500 text-sky-600 bg-sky-50',
      pink: 'border-pink-500 text-pink-600 bg-pink-50',
    }
    return colors[color] || colors.indigo
  }

  const prevDay = dayNum > 1 ? dayNum - 1 : null
  const nextDay = dayNum < 11 ? dayNum + 1 : null

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Navigation - Moved to Top */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
        {prevDay ? (
          <Link
            to={`/schedule/day/${prevDay}`}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('Previous Day', '上一天')}</span>
          </Link>
        ) : (
          <Link
            to="/schedule"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('Back to Itinerary', '返回行程')}</span>
          </Link>
        )}

        <Link
          to="/schedule"
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-semibold"
        >
          {t('Back to Itinerary', '返回行程')}
        </Link>

        {nextDay ? (
          <Link
            to={`/schedule/day/${nextDay}`}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <span>{t('Next Day', '下一天')}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        ) : (
          <Link
            to="/schedule"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <span>{t('Back to Itinerary', '返回行程')}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        )}
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-block ${getColorClasses(dayData.color).split(' ')[2]} px-6 py-2 rounded-full mb-4`}>
          <span className="font-bold text-sm text-white">
            {t('Day', '第')} {dayData.day} {t('Day', '天')}
          </span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-header font-bold mb-2 ${getColorClasses(dayData.color).split(' ')[1]}`}>
          {typeof dayData.title === 'string' ? dayData.title : t(dayData.title?.en || '', dayData.title?.zh || '')}
        </h1>
        <p className="text-pink-500 font-bold text-lg uppercase tracking-widest">
          {dayData.date} {dayData.isHoliday && t('(Holiday)', '(假日)')}
        </p>
        <p className="text-slate-500 text-sm mt-2">📍 {dayData.location}</p>
      </div>

      {/* Schedule Details */}
      <div className={`glass-card border-l-4 ${getColorClasses(dayData.color).split(' ')[0]} mb-8 p-6`}>
        <ul className="space-y-1">
          {dayData.items.map((item, itemIndex) => renderItem(item, itemIndex))}
        </ul>
      </div>
    </div>
  )
}

export default DaySchedule
