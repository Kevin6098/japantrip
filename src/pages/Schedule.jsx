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
        { 
          time: '09:30', 
          text: t('Meet Lobby', '大堂集合'),
          transit: t('Train: Tsukuba Exp (~15m)', '电车: 筑波快线 (~15分)')
        },
        { 
          time: '10:00', 
          text: t('Asakusa (Senso-ji)', '浅草 (浅草寺)'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Sensoji+Asakusa',
          price: 'Free'
        },
        { 
          time: '12:00', 
          text: t('Ueno Park', '上野公园'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Ueno+Park',
          price: 'Free',
          note: t('(Lunch)', '(午餐)'),
          transit: t('Train: Ginza Line (~5m)', '电车: 银座线 (~5分)')
        },
        { 
          time: '14:00', 
          text: t('Ginza (Tokichi Matcha)', '银座 (中村藤吉抹茶)'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Nakamura+Tokichi+Ginza',
          transit: t('Train: Ginza Line (~15m)', '电车: 银座线 (~15分)')
        },
        { 
          time: '18:00', 
          text: t('Tsukishima Monja Street', '月岛文字烧街'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Tsukishima+Monja+Street',
          note: t('(Dinner)', '(晚餐)'),
          transit: t('Taxi/Metro (~10m)', '出租车/地铁 (~10分)')
        },
      ],
    },
    {
      day: 3,
      date: 'Fri, Mar 20',
      title: t('Graduation & Shibuya', '毕业典礼 & 涩谷'),
      location: 'Tokyo/Saitama',
      color: 'indigo',
      isHoliday: true,
      items: [
        { 
          time: '09:00', 
          text: t('Harajuku & Omotesando', '原宿 & 表参道'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Harajuku+Omotesando',
          transit: t('Takeshita St, Cafes', '竹下通, 咖啡厅')
        },
        { 
          time: '11:00', 
          text: t('Shibuya Crossing & Hachiko', '涩谷十字路口 & 八公'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Shibuya+Crossing'
        },
        { 
          time: '11:30', 
          text: t('Depart for Saitama', '前往埼玉'),
          transit: t('Direct via Hanzomon/Tobu Line (~1h 20m)', '直达 (半藏门/东武线 ~1小时20分)')
        },
        { 
          time: '13:30', 
          text: t('Graduation Ceremony', '毕业典礼'), 
          special: true,
          link: 'https://www.google.com/search?tbm=isch&q=Nippon+Institute+of+Technology+Miyashiro',
          transit: t('Nippon Institute of Technology', '日本工业大学 (宫代)')
        },
        { 
          time: '19:00', 
          text: t('Celebration Dinner', '庆功晚餐'), 
          special: true,
          note: t('(Shibuya)', '(涩谷)'),
          price: '¥20,000',
          transit: t('High-End Course Meal (Reserve!)', '高级料理 (需预订!)')
        },
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
        { 
          time: '12:00', 
          text: t('Shinkansen to Shin-Osaka', '新干线至新大阪'),
          transit: t('Travel: ~2.5 hrs (Right side for Fuji)', '车程: 约2.5小时 (右侧看富士山)')
        },
        { time: '15:30', text: t('Check-in Namba Hotel', '入住难波酒店') },
        { 
          time: '17:50', 
          text: t('Group 3 lands at KIX', '第三组抵达关西机场'),
          muted: true
        },
        { 
          time: '20:00', 
          text: t('Reunion Dinner (Dotonbori)', '团圆晚餐 (道顿堀)'), 
          special: true 
        },
      ],
    },
    {
      day: 5,
      date: 'Sun, Mar 22',
      title: t('Uji & Nara (Healing Route)', '宇治 & 奈良 (治愈路线)'),
      location: 'Nara',
      color: 'teal',
      items: [
        { 
          time: '09:00', 
          text: t('Depart Osaka', '离开大阪'),
          transit: t('Train: Keihan Line to Uji (~50m)', '电车: 京阪线至宇治 (~50分)')
        },
        { 
          time: '10:00', 
          text: t('Nakamura Tokichi Honten', '中村藤吉本店'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Nakamura+Tokichi+Honten+Uji',
          transit: t('Matcha sweets & early lunch', '抹茶甜点 & 早午餐')
        },
        { 
          time: '11:30', 
          text: t('Ujiagami Shrine & River', '宇治上神社 & 宇治川'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Ujiagami+Shrine+Uji+River',
          price: 'Free',
          transit: t('Walk along Uji River & Byodoin Omotesando', '漫步宇治川 & 平等院表参道')
        },
        { 
          time: '13:00', 
          text: t('Transfer to Nara', '前往奈良'),
          transit: t('Train: JR Nara Line (~30m)', '电车: JR奈良线 (~30分)')
        },
        { 
          time: '14:00', 
          text: t('Nara Park & Todaiji', '奈良公园 & 东大寺'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Nara+Park+Todaiji',
          price: '¥600',
          transit: t('Great Buddha & Deer feeding', '大佛 & 喂鹿')
        },
        { 
          time: '16:00', 
          text: t('Kasuga Taisha Shrine', '春日大社'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Kasuga+Taisha',
          price: 'Free',
          transit: t('Stone lanterns forest path', '石灯笼森林小径')
        },
        { 
          time: '17:30', 
          text: t('Mt. Wakakusa', '若草山'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Mt+Wakakusa+Night+View',
          note: t('(Night View)', '(夜景)'),
          price: '¥150',
          transit: t('Sunset & City Night View', '日落 & 城市夜景')
        },
        { time: '19:00', text: t('Return to Osaka', '返回大阪') },
      ],
    },
    {
      day: 6,
      date: 'Mon, Mar 23',
      title: t('Kobe Day Trip', '神户一日游'),
      location: 'Kobe',
      color: 'red',
      items: [
        { 
          time: '09:30', 
          text: t('Depart Osaka/Umeda', '离开大阪/梅田'),
          transit: t('Train: JR/Hanshin Line (~30m)', '电车: JR/阪神线 (~30分)')
        },
        { 
          time: '10:30', 
          text: t('Meriken Park & Harborland', '美利坚公园 & 港湾乐园'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Meriken+Park+Kobe+Harborland',
          price: 'Free',
          transit: t('BE KOBE Sign, Port Tower Photos', 'BE KOBE标志, 神户塔拍照')
        },
        { time: '12:00', text: t('Lunch at Mosaic', 'Mosaic 广场午餐') },
        { 
          time: '13:30', 
          text: t('Travel to Mt. Rokko', '前往六甲山'),
          transit: t('Bus/Cable Car (~40m)', '巴士/缆车 (~40分)')
        },
        { 
          time: '14:30', 
          text: t('Rokkosan Pasture (Sheep)', '六甲山牧场'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Rokkosan+Pasture',
          price: '¥500',
          transit: t('Interact with sheep & enjoy nature', '与羊互动 & 享受大自然')
        },
        { 
          time: '17:00', 
          text: t('Descend Mountain', '下山'),
          transit: t('Views during sunset transit', '日落途中的景色')
        },
        { 
          time: '18:30', 
          text: t('Kobe Port Tower', '神户塔'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Kobe+Port+Tower+Night+View',
          note: t('Night View', '夜景'),
          price: '¥700'
        },
        { 
          time: '19:30', 
          text: t('Dinner in Kobe City', '神户市内晚餐'), 
          special: true,
          transit: t('Kobe Beef or Izakaya', '神户牛肉或居酒屋')
        },
        { time: '21:00', text: t('Return to Osaka', '返回大阪') },
      ],
    },
    {
      day: 7,
      date: 'Tue, Mar 24',
      title: t('Kyoto (Efficient Route)', '京都 (高效路线)'),
      location: 'Kyoto',
      color: 'green',
      items: [
        { 
          time: '07:00', 
          text: t('Depart Namba (Early!)', '离开难波 (早起!)'),
          transit: t('Train: Keihan Line to Fushimi-Inari', '电车: 京阪线至伏见稻荷')
        },
        { 
          time: '08:00', 
          text: t('Fushimi Inari Taisha', '伏见稻荷大社'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Fushimi+Inari+Taisha',
          price: 'Free',
          transit: t('South start: Beat the crowds!', '南端开始: 避开人潮!')
        },
        { 
          time: '11:00', 
          text: t('Kiyomizu-dera Temple', '清水寺'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Kiyomizu+dera',
          price: '¥400',
          transit: t('Train to Kiyomizu-Gojo', '电车至清水五条')
        },
        { 
          time: '13:00', 
          text: t('Ninenzaka & Sannenzaka', '二年坂 & 三年坂'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Ninenzaka+Sannenzaka',
          price: 'Free',
          transit: t('Walk downhill (Energy saving!) & Lunch', '下坡步行 (省力!) & 午餐')
        },
        { 
          time: '16:00', 
          text: t('Yasaka Shrine & Gion', '八坂神社 & 祇园'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Yasaka+Shrine+Gion',
          price: 'Free',
          transit: t('Atmospheric late afternoon walk', '傍晚漫步体验氛围')
        },
        { 
          time: '17:30', 
          text: t('Kamogawa River', '鸭川'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Kamogawa+River+Kyoto',
          note: t('(Sunset)', '(日落)'),
          transit: t('Relax by the river, romantic evening', '河边放松, 浪漫夜晚')
        },
        { time: '19:00', text: t('Return to Osaka', '返回大阪') },
      ],
    },
    {
      day: 8,
      date: 'Wed, Mar 25',
      title: t('USJ', '环球影城'),
      location: 'Osaka',
      color: 'sky',
      items: [
        { 
          time: '07:30', 
          text: t('Depart (Early!)', '出发 (早起!)'),
          transit: t('Train: JR (~20m)', '电车: JR (~20分)')
        },
        { 
          time: '08:00', 
          text: t('USJ All Day', '环球影城全天'), 
          special: true,
          link: 'https://www.google.com/search?tbm=isch&q=Universal+Studios+Japan',
          prices: [
            { label: t('Entry', '门票'), value: '~¥9,500' },
            { label: t('Express 7', '快通7'), value: '~¥18,000+', highlight: true }
          ]
        },
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
        { time: '09:30', text: t('Depart Hotel', '离开酒店') },
        { 
          time: '10:00', 
          text: t('Osaka Castle', '大阪城'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Osaka+Castle',
          price: 'Free',
          transit: t('Conan Photo Spot & Tenshukaku (Tower ¥600)', '柯南打卡点 & 天守阁 (登塔¥600)')
        },
        { 
          time: '12:30', 
          text: t('Tsutenkaku', '通天阁'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Tsutenkaku+Shinsekai',
          transit: t('Cyberpunk/Neon Vibes & Kushikatsu Lunch', '赛博朋克霓虹感 & 炸串午餐')
        },
        { 
          time: '14:30', 
          text: t('Namba Yasaka Shrine', '难波八阪神社'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Namba+Yasaka+Shrine',
          transit: t('Giant Lion Head (Great for photos!)', '巨大狮子头 (拍照绝佳!)')
        },
        { 
          time: '16:00', 
          text: t('Dotonbori', '道顿堀'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Dotonbori',
          transit: t('Glico Man Sign & Street Food', '格力高跑男广告牌 & 街头美食')
        },
        { 
          time: '18:00', 
          text: t('Shinsaibashi', '心斋桥'), 
          highlight: true,
          link: 'https://www.google.com/search?tbm=isch&q=Shinsaibashi+Shopping',
          transit: t('Shopping Paradise (Daimaru/Parco). Bring Passport for Tax Free!', '购物天堂 (大丸/Parco). 带护照退税!')
        },
      ],
    },
    {
      day: 10,
      date: 'Fri, Mar 27',
      title: t('Last Shopping', '最后购物'),
      location: 'Osaka',
      color: 'orange',
      items: [
        { 
          time: t('Day', '全天'), 
          text: t('Shinsaibashi / Umeda', '心斋桥 / 梅田'),
          highlight: true
        },
        { time: '17:00', text: t('Collect Luggage', '取行李') },
        { 
          time: '17:30', 
          text: t('Move to Airport Area', '前往机场区'),
          transit: t('Train: Nankai Line (~40m)', '电车: 南海线 (~40分)')
        },
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
        { 
          text: t('Travel to KIX', '前往关西机场'),
          detail: '10 mins'
        },
        { 
          text: t('CX Check-in', 'CX 值机'),
          detail: '07:30',
          special: true
        },
        { 
          text: t('TG Check-in', 'TG 值机'),
          detail: '08:30',
          special: true
        },
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

  const renderItem = (item, itemIndex) => {
    const content = item.link ? (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
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
            {item.detail && (
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-slate-700">{item.text}</span>
                <span className={`text-sm font-mono ${item.special ? 'font-bold' : ''}`}>
                  {item.detail}
                </span>
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
              <p className={`font-bold text-xs uppercase tracking-widest mb-1 ${day.isHoliday ? 'text-slate-400' : 'text-pink-500'}`}>
                {day.date} {day.isHoliday && t('(Holiday)', '(假日)')}
              </p>
              <p className="text-slate-500 text-sm">📍 {day.location}</p>
            </div>

            <div className={`glass-card border-l-4 ${getColorClasses(day.color).split(' ')[0]}`}>
              {day.day === 11 ? (
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-3">
                    {t('Check-in Times', '值机时间')}:
                  </div>
                  <ul className="space-y-2">
                    {day.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between text-sm">
                        <span>{item.text}:</span>
                        <span className="font-mono font-bold">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="space-y-1">
                  {day.items.map((item, itemIndex) => renderItem(item, itemIndex))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
