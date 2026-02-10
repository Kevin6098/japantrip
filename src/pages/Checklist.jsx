import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { restaurantsData } from '../data/restaurantsData'

const Checklist = () => {
  const { t } = useLanguage()
  const [checkedItems, setCheckedItems] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('checklist-items')
    return saved ? JSON.parse(saved) : {}
  })

  const handleCheck = (id) => {
    const newChecked = {
      ...checkedItems,
      [id]: !checkedItems[id]
    }
    setCheckedItems(newChecked)
    localStorage.setItem('checklist-items', JSON.stringify(newChecked))
  }

  // Shinkansen tickets
  const shinkansenItems = [
    {
      id: 'shinkansen-tokyo-osaka',
      title: t('Tokyo → Osaka Shinkansen (Day 4, Mar 21)', '东京 → 大阪新干线 (第4天, 3月21日)', '東京 → 大阪 新幹線（4日目・3/21）'),
      details: t('11 people, ~¥13,870 per person', '11人, 每人约¥13,870', '11名、1人あたり約¥13,870'),
      link: 'https://www.jr-central.co.jp/en/',
      type: 'shinkansen'
    }
  ]

  // Attraction tickets
  const attractionItems = [
    {
      id: 'usj-tickets',
      title: t('Universal Studios Japan (USJ) Tickets', '日本环球影城 (USJ) 门票', 'ユニバーサル・スタジオ・ジャパン（USJ）チケット'),
      details: t('Day 6, Mar 23 - 1-Day Studio Pass for 11 people', '第6天, 3月23日 - 11人的1日门票', '6日目・3/23：11名分の1デイ・スタジオ・パス'),
      link: 'https://www.usj.co.jp/web/en/us',
      type: 'attraction',
      note: t(
        'Express Pass recommended for some (Mario Kart, Donkey Kong, Flying Dinosaur)',
        '建议部分人员购买快速通行证 (马力欧卡丁车, 大金刚, 飞行恐龙)',
        '一部はエクスプレス・パス推奨（マリオカート／ドンキーコング／フライング・ダイナソー）'
      )
    },
    {
      id: 'umeda-sky-building-tickets',
      title: t('Umeda Sky Building Observation Deck Tickets', '梅田蓝天大厦展望台门票', '梅田スカイビル 空中庭園展望台チケット'),
      details: t(
        'Day 7, Mar 24 - Floating Garden Observatory for 11 people, ~¥1,500 per person | Purchased from Agoda',
        '第7天, 3月24日 - 空中庭园展望台11人, 每人约¥1,500 | 从Agoda购买',
        '7日目・3/24：11名分、1人あたり約¥1,500 | Agodaで購入'
      ),
      link: 'https://www.agoda.com/',
      type: 'attraction',
      note: t('Purchased from Agoda', '从Agoda购买', 'Agodaで購入')
    },
    {
      id: 'osaka-aquarium-tickets',
      title: t('Osaka Aquarium Kaiyukan Tickets', '大阪海游馆门票', '海遊館チケット'),
      details: t(
        'Day 7, Mar 24 - Admission for 11 people, ~¥2,700 per person',
        '第7天, 3月24日 - 入场门票11人, 每人约¥2,700',
        '7日目・3/24：11名分、1人あたり約¥2,700'
      ),
      link: '/attractions/osaka-aquarium',
      type: 'attraction'
    },
    {
      id: 'osaka-amazing-pass',
      title: t('Osaka Amazing Pass (1 Day)', '大阪周游卡 (1日)', '大阪周遊パス（1日）'),
      details: t(
        'Day 10, Mar 27 - 1-Day Pass for 9 people, RM101 per person (RM909 total) | Purchased from Klook',
        '第10天, 3月27日 - 1日周游卡9人, 每人RM101 (总计RM909) | 从Klook购买',
        '10日目・3/27：1日パス9名分、1人あたりRM101（合計RM909）| Klookで購入'
      ),
      link: 'https://www.klook.com/',
      type: 'attraction',
      note: t(
        'Covers: Osaka Metro, Municipal Bus, Osaka Castle Tower, Tsutenkaku Observation Deck, and 40+ attractions. JR lines and buses outside Osaka City are NOT covered.',
        '包含: 大阪地铁、市营巴士、大阪城天守阁、通天阁展望台及40+景点。JR线和市外巴士不包含。',
        '含まれるもの: 大阪メトロ・市バス・大阪城天守閣・通天閣展望台・40以上の観光スポット。JR線・市外バスは含まれません。'
      )
    }
  ]

  // Restaurant reservations - only confirmed restaurants that require reservations
  // Exclude restaurants that don't need reservations (as specified by user)
  const noReservationRequired = [
    'pain-maison',
    'nakamura-tokichi-ginza',
    'ichiran-ramen',
    'afuri-yurakucho',
    'nakamura-tokichi-uji',
    // Removed from checklist per user request
    'dotonbori-dinner',
    'kyoto-lunch',
  ]
  const confirmedRestaurants = Object.values(restaurantsData).filter(
    restaurant => restaurant.schedule !== null && !noReservationRequired.includes(restaurant.id)
  ).map(restaurant => {
    const schedule = Array.isArray(restaurant.schedule) 
      ? restaurant.schedule[0] 
      : restaurant.schedule
    
    return {
      id: restaurant.id,
      title: t(restaurant.title.en, restaurant.title.zh, restaurant.title.ja),
      schedule: schedule ? `${t(schedule.date.en, schedule.date.zh, schedule.date.ja)} ${schedule.time} - ${t(schedule.meal.en, schedule.meal.zh, schedule.meal.ja)}` : '',
      location: t(restaurant.location.en, restaurant.location.zh, restaurant.location.ja),
      link: `/food/${restaurant.id}`,
      type: 'restaurant',
      reservationRequired: restaurant.id === 'ginza-kanimitsu' || 
                           restaurant.id === 'tsukada-shabu' || 
                           restaurant.id === 'kobe-steak-nick' ||
                           restaurant.id === 'gion-unagi-kawato' ||
                           restaurant.id === 'yamatoen-honten'
    }
  })

  const ChecklistSection = ({ title, icon, items, color }) => {
    const colorClasses = {
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      red: 'bg-red-50 border-red-200 text-red-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700'
    }

    const bgColorClasses = {
      indigo: 'bg-indigo-100',
      green: 'bg-green-100',
      orange: 'bg-orange-100',
      red: 'bg-red-100',
      purple: 'bg-purple-100'
    }

    return (
      <section className="mb-8 animate-fade-in">
        <div className={`flex items-center mb-6 p-3 ${bgColorClasses[color]} rounded-xl`}>
          <div className={`p-2 ${bgColorClasses[color]} rounded-xl mr-3`}>
            <i className={`${icon} text-${color}-600 text-xl`}></i>
          </div>
          <h2 className={`font-header text-xl sm:text-2xl font-bold text-${color}-700`}>
            {title}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-card p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={checkedItems[item.id] || false}
                  onChange={() => handleCheck(item.id)}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer flex-shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <label
                    htmlFor={item.id}
                    className={`block font-header text-lg font-bold mb-1 cursor-pointer ${
                      checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-800'
                    }`}
                  >
                    {item.title}
                  </label>
                  {item.details && (
                    <p className="text-sm text-slate-600 mb-1">{item.details}</p>
                  )}
                  {item.schedule && (
                    <p className="text-sm text-blue-600 mb-1 flex items-center gap-2">
                      <i className="fa-solid fa-calendar-day text-xs"></i>
                      {item.schedule}
                    </p>
                  )}
                  {item.location && (
                    <p className="text-xs text-slate-500 mb-1">
                      <i className="fa-solid fa-map-marker-alt mr-1"></i>
                      {item.location}
                    </p>
                  )}
                  {item.note && (
                    <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded mt-2">
                      <i className="fa-solid fa-info-circle mr-1"></i>
                      {item.note}
                    </p>
                  )}
                  {item.reservationRequired && (
                    <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded mt-2">
                      <i className="fa-solid fa-exclamation-circle mr-1"></i>
                      {t('Reservation Required', '需要预订', '要予約')}
                    </span>
                  )}
                  {item.link && (
                    item.link.startsWith('http') ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('View Details', '查看详情', '詳細を見る')}{' '}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    ) : (
                      <Link
                        to={item.link}
                        className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('View Details', '查看详情', '詳細を見る')}{' '}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <i className="fa-solid fa-clipboard-check text-4xl text-pink-500"></i>
            </div>
          </div>
          <h1 className="font-header text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            {t('Trip Checklist', '行程清单', '旅行チェックリスト')}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t(
              'Keep track of tickets and reservations for your Japan trip',
              '跟踪日本之旅的门票和预订情况',
              '旅行のチケットと予約状況を管理'
            )}
          </p>
        </div>

        {/* Checklist Sections */}
        <ChecklistSection
          title={t('Shinkansen Tickets', '新干线车票', '新幹線チケット')}
          icon="fa-solid fa-train"
          items={shinkansenItems}
          color="indigo"
        />

        <ChecklistSection
          title={t('Attraction Tickets', '景点门票', '観光チケット')}
          icon="fa-solid fa-ticket"
          items={attractionItems}
          color="green"
        />

        <ChecklistSection
          title={t('Restaurant Reservations', '餐厅预订', 'レストラン予約')}
          icon="fa-solid fa-utensils"
          items={confirmedRestaurants}
          color="orange"
        />

        {/* Summary */}
        <div className="mt-8 glass-card p-6 rounded-xl border border-slate-200 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-header text-xl font-bold text-slate-800">
              {t('Progress', '进度', '進捗')}
            </h3>
            <span className="text-2xl font-bold text-pink-600">
              {Object.values(checkedItems).filter(Boolean).length} / {shinkansenItems.length + attractionItems.length + confirmedRestaurants.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((Object.values(checkedItems).filter(Boolean).length) / (shinkansenItems.length + attractionItems.length + confirmedRestaurants.length)) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition-colors text-sm font-semibold"
          >
            <i className="fa-solid fa-calendar-days"></i>
            {t('View Itinerary', '查看行程', '旅程を見る')}
          </Link>
          <Link
            to="/budget"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors text-sm font-semibold"
          >
            <i className="fa-solid fa-wallet"></i>
            {t('View Budget', '查看预算', '予算を見る')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checklist
