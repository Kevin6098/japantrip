import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Hotels = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-indigo-100 mb-4">
          <i className="fa-solid fa-hotel text-indigo-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Accommodation', '住宿')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          🏨 {t('Accommodation details and locations', '住宿详情和位置')}
        </p>
      </div>

      {/* Hotels */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Tokyo Airbnb */}
        <div className="glass-card rounded-2xl overflow-hidden border border-indigo-50 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-indigo-500 p-3 text-white text-sm font-bold flex justify-between">
            <span>{t('Tokyo', '东京')} (Mar 18-21)</span>
            <i className="fa-solid fa-city"></i>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Home in Katsushika City', '葛饰区房屋')}
            </h3>
            <p className="text-sm text-slate-600 mb-2">
              <strong>{t('Address:', '地址:')}</strong> {t('1-chōme-9-2 Yotsugi, Katsushika City, Tokyo', '东京都葛饰区四つ木1-9-2')}
            </p>
            <p className="text-sm text-slate-600 mb-2">
              {t('Hosted by Aria Homes. 5 mins walk to nearest station. 6 min to Skytree, 5 min walk. Quiet Private House. WiFi, kitchen, private bathroom.', '房东：Aria Homes。步行5分钟至最近车站。6分钟至晴空塔，步行5分钟。安静私人房屋。WiFi、厨房、独立浴室。')}
            </p>
            <p className="text-xs text-slate-500 mb-2">
              <strong>{t('Check-in:', '入住:')}</strong> {t('Wed, Mar 18, 4:00 PM', '3月18日（周三）下午4:00')}
            </p>
            <p className="text-xs text-slate-500 mb-3">
              <strong>{t('Checkout:', '退房:')}</strong> {t('Sat, Mar 21, 10:00 AM', '3月21日（周六）上午10:00')}
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=1-chōme-9-2+Yotsugi+Katsushika+City+Tokyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm font-bold flex items-center hover:text-indigo-800 transition-colors mb-2"
            >
              <i className="fa-solid fa-map-location-dot mr-1"></i> {t('View on Google Maps', '在Google地图中查看')}
            </a>
            <a 
              href="https://www.airbnb.com/rooms/1582468829135768556?viralityEntryPoint=1&s=76&source_impression_id=p3_1768539072_P3uZUw09Nv5YO4bm&check_in=2026-03-18&guests=1&adults=1&check_out=2026-03-21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm font-bold flex items-center hover:text-indigo-800 transition-colors"
            >
              <i className="fa-solid fa-link mr-1"></i> {t('View on Airbnb', '在Airbnb上查看')}
            </a>
          </div>
        </div>

        {/* Osaka Airbnb */}
        <div className="glass-card rounded-2xl overflow-hidden border border-orange-50 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-orange-500 p-3 text-white text-sm font-bold flex justify-between">
            <span>{t('Osaka', '大阪')} (Mar 21-28)</span>
            <i className="fa-solid fa-building"></i>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Home in Ikuno Ward, Osaka', '大阪生野区房屋')}
            </h3>
            <p className="text-sm text-slate-600 mb-2">
              <strong>{t('Address:', '地址:')}</strong> {t('1-chōme-12-11 Momodani, Ikuno Ward, Osaka', '大阪市生野区桃谷1-12-11')}
            </p>
            <p className="text-sm text-slate-600 mb-2">
              {t('Hosted by Momo. 172m² Entire House. JR Momodani 2mins walk. Max 24ppl. 3 bedrooms, 11 beds, 3 bathrooms.', '房东：Momo。172平方米整栋房屋。步行2分钟至JR桃谷站。最多24人。3间卧室，11张床，3间浴室。')}
            </p>
            <p className="text-xs text-slate-500 mb-2">
              <strong>{t('Check-in:', '入住:')}</strong> {t('Sat, Mar 21, 4:00 PM', '3月21日（周六）下午4:00')}
            </p>
            <p className="text-xs text-slate-500 mb-3">
              <strong>{t('Checkout:', '退房:')}</strong> {t('Sat, Mar 28, 10:00 AM', '3月28日（周六）上午10:00')}
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=1-chōme-12-11+Momodani+Ikuno+Ward+Osaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 text-sm font-bold flex items-center hover:text-orange-800 transition-colors mb-2"
            >
              <i className="fa-solid fa-map-location-dot mr-1"></i> {t('View on Google Maps', '在Google地图中查看')}
            </a>
            <a 
              href="https://www.airbnb.com.sg/rooms/1251897604600079315" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 text-sm font-bold flex items-center hover:text-orange-800 transition-colors"
            >
              <i className="fa-solid fa-link mr-1"></i> {t('View on Airbnb', '在Airbnb上查看')}
            </a>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-header text-lg font-bold text-yellow-900 mb-3">
          📌 {t('Important Notes (Airbnb Stay)', '重要提示 (Airbnb住宿)')}
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li className="flex items-start gap-2">
            <span>🕒</span>
            <span>{t('Check-in time: Usually after 15:00 (confirm exact self check-in time with host)', '入住时间: 通常15:00后 (与房东确认具体自助入住时间)')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🕚</span>
            <span>{t('Check-out time: Usually by 11:00', '退房时间: 通常11:00前')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔑</span>
            <span>{t("Self check-in: Follow host's instructions (key box / smart lock / keypad)", '自助入住: 遵循房东指示 (钥匙盒 / 智能锁 / 密码锁)')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>📩</span>
            <span>{t("Message from host: Check Airbnb messages 1–2 days before arrival for access details", '房东消息: 到达前1-2天查看Airbnb消息获取访问详情')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🗑️</span>
            <span>{t('Trash rules: Follow local garbage sorting & disposal instructions', '垃圾规则: 遵循当地垃圾分类和处理指示')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🧼</span>
            <span>{t('House rules: Please respect quiet hours, especially at night', '房屋规则: 请尊重安静时间，特别是在夜间')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🧳</span>
            <span>{t('Luggage: Early luggage storage depends on host approval', '行李: 提前行李寄存需经房东批准')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>📶</span>
            <span>{t("WiFi info: Password usually provided inside the house or via message", 'WiFi信息: 密码通常在房屋内或通过消息提供')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hotels
