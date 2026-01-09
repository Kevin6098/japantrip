import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Schedule = () => {
  const { t } = useLanguage()

  const schedule = [
    {
      day: 1,
      date: 'Wed, Mar 18',
      title: t('Arrival', '抵达'),
      location: 'Tokyo',
      color: 'indigo',
      items: [
        { time: '21:15', text: t('CX Lands (HND)', '国泰降落 (HND)') },
        { time: '22:30', text: t('TG Lands (HND)', '泰航降落 (HND)') },
        { time: '23:30', text: t('Train to Hotel (~60m)', '电车前往酒店 (~60分)') },
      ],
    },
    {
      day: 2,
      date: 'Thu, Mar 19',
      title: t('Old Tokyo', '旧东京'),
      location: 'Tokyo',
      color: 'indigo',
      items: [
        { time: '09:30', text: t('Meet Lobby', '大堂集合') },
        { time: '10:00', text: t('Asakusa (Senso-ji)', '浅草 (浅草寺)'), highlight: true },
        { time: '12:00', text: t('Ueno Park', '上野公园'), highlight: true },
        { time: '14:00', text: t('Ginza (Tokichi Matcha)', '银座 (中村藤吉抹茶)'), highlight: true },
        { time: '18:00', text: t('Tsukishima Monja Street', '月岛文字烧街'), highlight: true },
      ],
    },
    {
      day: 3,
      date: 'Fri, Mar 20',
      title: t('Graduation & Shibuya', '毕业典礼 & 涩谷'),
      location: 'Tokyo/Saitama',
      color: 'indigo',
      items: [
        { time: '09:00', text: t('Harajuku & Omotesando', '原宿 & 表参道'), highlight: true },
        { time: '11:00', text: t('Shibuya Crossing & Hachiko', '涩谷十字路口 & 八公'), highlight: true },
        { time: '11:30', text: t('Depart for Saitama', '前往埼玉') },
        { time: '13:30', text: t('Graduation Ceremony', '毕业典礼'), special: true },
        { time: '19:00', text: t('Celebration Dinner', '庆功晚餐'), special: true },
      ],
    },
    {
      day: 4,
      date: 'Sat, Mar 21',
      title: t('Move to Osaka', '前往大阪'),
      location: 'Osaka',
      color: 'orange',
      items: [
        { time: '11:00', text: t('Travel to Tokyo Stn', '前往东京站') },
        { time: '12:00', text: t('Shinkansen to Shin-Osaka', '新干线至新大阪') },
        { time: '15:30', text: t('Check-in Namba Hotel', '入住难波酒店') },
        { time: '20:00', text: t('Reunion Dinner (Dotonbori)', '团圆晚餐 (道顿堀)'), special: true },
      ],
    },
    {
      day: 5,
      date: 'Sun, Mar 22',
      title: t('Uji & Nara (Healing Route)', '宇治 & 奈良 (治愈路线)'),
      location: 'Nara',
      color: 'teal',
      items: [
        { time: '09:00', text: t('Depart Osaka', '离开大阪') },
        { time: '10:00', text: t('Nakamura Tokichi Honten', '中村藤吉本店'), highlight: true },
        { time: '11:30', text: t('Ujiagami Shrine & River', '宇治上神社 & 宇治川'), highlight: true },
        { time: '14:00', text: t('Nara Park & Todaiji', '奈良公园 & 东大寺'), highlight: true },
        { time: '16:00', text: t('Kasuga Taisha Shrine', '春日大社'), highlight: true },
        { time: '17:30', text: t('Mt. Wakakusa (Night View)', '若草山 (夜景)'), highlight: true },
      ],
    },
    {
      day: 6,
      date: 'Mon, Mar 23',
      title: t('Kobe Day Trip', '神户一日游'),
      location: 'Kobe',
      color: 'red',
      items: [
        { time: '09:30', text: t('Depart Osaka/Umeda', '离开大阪/梅田') },
        { time: '10:30', text: t('Meriken Park & Harborland', '美利坚公园 & 港湾乐园'), highlight: true },
        { time: '14:30', text: t('Rokkosan Pasture (Sheep)', '六甲山牧场'), highlight: true },
        { time: '18:30', text: t('Kobe Port Tower Night View', '神户塔夜景'), highlight: true },
        { time: '19:30', text: t('Dinner in Kobe City', '神户市内晚餐'), special: true },
      ],
    },
    {
      day: 7,
      date: 'Tue, Mar 24',
      title: t('Kyoto (Efficient Route)', '京都 (高效路线)'),
      location: 'Kyoto',
      color: 'green',
      items: [
        { time: '07:00', text: t('Depart Namba (Early!)', '离开难波 (早起!)') },
        { time: '08:00', text: t('Fushimi Inari Taisha', '伏见稻荷大社'), highlight: true },
        { time: '11:00', text: t('Kiyomizu-dera Temple', '清水寺'), highlight: true },
        { time: '13:00', text: t('Ninenzaka & Sannenzaka', '二年坂 & 三年坂'), highlight: true },
        { time: '16:00', text: t('Yasaka Shrine & Gion', '八坂神社 & 祇园'), highlight: true },
        { time: '17:30', text: t('Kamogawa River (Sunset)', '鸭川 (日落)'), highlight: true },
      ],
    },
    {
      day: 8,
      date: 'Wed, Mar 25',
      title: t('USJ', '环球影城'),
      location: 'Osaka',
      color: 'sky',
      items: [
        { time: '07:30', text: t('Depart (Early!)', '出发 (早起!)') },
        { time: '08:00', text: t('USJ All Day', '环球影城全天'), special: true },
        { time: '20:00', text: t('Return / Dinner', '返回 / 晚餐') },
      ],
    },
    {
      day: 9,
      date: 'Thu, Mar 26',
      title: t('Osaka City Highlights', '大阪城市精华'),
      location: 'Osaka',
      color: 'orange',
      items: [
        { time: '10:00', text: t('Osaka Castle', '大阪城'), highlight: true },
        { time: '12:30', text: t('Tsutenkaku', '通天阁'), highlight: true },
        { time: '14:30', text: t('Namba Yasaka Shrine', '难波八阪神社'), highlight: true },
        { time: '16:00', text: t('Dotonbori', '道顿堀'), highlight: true },
        { time: '18:00', text: t('Shinsaibashi Shopping', '心斋桥购物'), highlight: true },
      ],
    },
    {
      day: 10,
      date: 'Fri, Mar 27',
      title: t('Last Shopping', '最后购物'),
      location: 'Osaka',
      color: 'orange',
      items: [
        { time: t('Day', '全天'), text: t('Shinsaibashi / Umeda', '心斋桥 / 梅田') },
        { time: '17:00', text: t('Collect Luggage', '取行李') },
        { time: '18:30', text: t('Check-in Hotel (Rinku Town)', '入住临空城酒店') },
      ],
    },
    {
      day: 11,
      date: 'Sat, Mar 28',
      title: t('Fly Home', '回家'),
      location: 'Departure',
      color: 'pink',
      items: [
        { text: t('CX Check-in: 07:30', 'CX 值机: 07:30'), special: true },
        { text: t('TG Check-in: 08:30', 'TG 值机: 08:30'), special: true },
      ],
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'border-indigo-500 text-indigo-700',
      green: 'border-green-600 text-green-700',
      teal: 'border-teal-600 text-teal-700',
      orange: 'border-orange-500 text-orange-600',
      red: 'border-red-500 text-red-600',
      sky: 'border-sky-500 text-sky-600',
      pink: 'border-pink-500 text-pink-600',
    }
    return colors[color] || colors.indigo
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
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
              <p className="text-pink-500 font-bold text-xs uppercase tracking-widest mb-1">
                {day.date}
              </p>
              <p className="text-slate-500 text-sm">📍 {day.location}</p>
            </div>

            <div className={`glass-card border-l-4 ${getColorClasses(day.color).split(' ')[0]}`}>
              <ul className="space-y-3">
                {day.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {item.time && (
                      <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded min-w-[60px] text-center shrink-0">
                        {item.time}
                      </span>
                    )}
                    <span
                      className={`text-sm flex-grow ${
                        item.special
                          ? 'font-bold text-slate-800'
                          : item.highlight
                          ? 'bg-yellow-100 px-2 py-0.5 rounded text-yellow-900 font-semibold'
                          : 'text-slate-700'
                      }`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
