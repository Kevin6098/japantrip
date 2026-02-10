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
            {t('Day not found', '未找到该天', '該当の日が見つかりません')}
          </h1>
          <Link to="/schedule" className="text-emerald-600 hover:text-emerald-800">
            {t('← Back to Itinerary', '← 返回行程', '← 旅程へ戻る')}
          </Link>
        </div>
      </div>
    )
  }

  const translatePrice = (price) => {
    if (!price || typeof price !== 'string') return price
    if (price === 'Free') return t('Free', '免费', '無料')
    if (price === 'Tea Time') return t('Tea Time', '下午茶', 'お茶の時間')
    return price
  }

  const renderItem = (item, itemIndex) => {
    const itemText = typeof item.text === 'string' ? item.text : t(item.text?.en || '', item.text?.zh || '', item.text?.ja || '')
    const itemTransit = item.transit
      ? (typeof item.transit === 'string' ? item.transit : t(item.transit?.en || '', item.transit?.zh || '', item.transit?.ja || ''))
      : null
    const itemNote = item.note
      ? (typeof item.note === 'string' ? item.note : t(item.note?.en || '', item.note?.zh || '', item.note?.ja || ''))
      : null
    
    // Check if this is a departure item (but exclude "Depart from Katsuoji")
    const isKatsuojiDeparture = itemText.toLowerCase().includes('katsuoji') || 
                                itemText.toLowerCase().includes('勝尾寺')
    const isDeparture = !isKatsuojiDeparture && (
                       itemText.toLowerCase().includes('depart') || 
                       itemText.toLowerCase().includes('出发') ||
                       itemText.toLowerCase().includes('leave') ||
                       (itemIndex === 0 && item.time)) // First item of the day is usually departure

    const linkClass = item.highlight
      ? 'bg-yellow-100 px-2 py-0.5 rounded text-yellow-900 font-semibold inline-flex items-center gap-1'
      : ''
    const content = item.link ? (
      <Link
        to={item.link}
        className={`text-sm hover:underline ${linkClass}`}
      >
        {itemText}
        <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </Link>
    ) : item.mapLink && item.highlight ? (
      <a
        href={item.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm hover:underline ${linkClass}`}
        title={t('Open in Google Maps', '在Google地图中打开', 'Googleマップで開く')}
      >
        {itemText}
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
        {itemText}
      </span>
    )

    return (
      <React.Fragment key={itemIndex}>
        <li className={`flex items-start gap-3 ${isDeparture ? 'bg-red-50 border-l-4 border-red-500 p-3 rounded-lg mb-2 shadow-sm' : ''}`}>
          {item.time && (
            <span className={`font-mono font-bold px-2 py-1 rounded min-w-[60px] text-center shrink-0 transition-all ${
              isDeparture 
                ? 'bg-red-600 text-white text-sm px-3 py-1.5 shadow-lg font-black' 
                : 'text-slate-700 bg-slate-100 text-xs'
            }`}>
              {isDeparture && <i className="fa-solid fa-plane-departure mr-1 text-xs"></i>}
              {item.time}
            </span>
          )}
          <div className="flex-grow">
            <div className="flex items-center gap-2 flex-wrap">
              {isDeparture ? (
                <span className="text-sm font-bold text-red-800 inline-flex items-center gap-1">
                  <i className="fa-solid fa-exclamation-circle text-red-600"></i>
                  {content}
                </span>
              ) : (
                content
              )}
              {itemNote && (
                <span className="text-sm text-slate-600">{itemNote}</span>
              )}
              {item.price && (
                <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">
                  {translatePrice(item.price)}
                </span>
              )}
              {item.express && (
                <span className="inline-block text-xs font-semibold text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                  <i className="fa-solid fa-bolt mr-1"></i>
                  {t('Express', '快通', 'エクスプレス')}
                </span>
              )}
              {item.mapLink && (
                <a
                  href={item.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800"
                  title={t('Open in Google Maps', '在Google地图中打开', 'Googleマップで開く')}
                >
                  <i className="fa-solid fa-map-location-dot"></i> {t('Map', '地图', '地図')}
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
            <span>{t('Previous Day', '上一天', '前の日')}</span>
          </Link>
        ) : (
          <Link
            to="/schedule"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('Back to Itinerary', '返回行程', '旅程へ戻る')}</span>
          </Link>
        )}

        <Link
          to="/schedule"
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-semibold"
        >
          {t('Back to Itinerary', '返回行程', '旅程へ戻る')}
        </Link>

        {nextDay ? (
          <Link
            to={`/schedule/day/${nextDay}`}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <span>{t('Next Day', '下一天', '次の日')}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        ) : (
          <Link
            to="/schedule"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <span>{t('Back to Itinerary', '返回行程', '旅程へ戻る')}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        )}
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-6 py-2 rounded-full mb-4 bg-slate-700 text-white shadow-md">
          <span className="font-bold text-sm">
            {t('Day ', '第', '')}{dayData.day}{t('', '天', '日目')}
          </span>
        </div>
        <h1 className={`text-4xl md:text-5xl font-header font-bold mb-2 ${getColorClasses(dayData.color).split(' ')[1]}`}>
          {typeof dayData.title === 'string' ? dayData.title : t(dayData.title?.en || '', dayData.title?.zh || '', dayData.title?.ja || '')}
        </h1>
        <p className="text-pink-500 font-bold text-lg uppercase tracking-widest">
          {dayData.date} {dayData.isHoliday && t('(Holiday)', '(假日)', '(祝日)')}
        </p>
        <p className="text-slate-500 text-sm mt-2">📍 {dayData.location}</p>
        {dayData.note && (
          <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mt-3 max-w-2xl mx-auto">
            <i className="fa-solid fa-info-circle mr-2 text-amber-600"></i>
            {typeof dayData.note === 'string' ? dayData.note : t(dayData.note?.en || '', dayData.note?.zh || '', dayData.note?.ja || '')}
          </p>
        )}
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            to="/budget"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors text-sm font-semibold"
          >
            <i className="fa-solid fa-wallet"></i>
            {t('View Budget', '查看预算', '予算を見る')}
          </Link>
          <Link
            to="/transportation-budget"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm font-semibold"
          >
            <i className="fa-solid fa-train"></i>
            {t('View Transportation', '查看交通', '交通を見る')}
          </Link>
        </div>
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
