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
            {t('Accommodation', '住宿信息')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          🏨 {t('Hotel details and locations', '酒店详情和位置')}
        </p>
      </div>

      {/* Hotels */}
      <div className="space-y-8">
        {/* Tokyo Hotel */}
        <div className="glass-card border-l-4 border-indigo-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🗼</span>
                <h2 className="font-header text-2xl font-bold text-indigo-700">
                  {t('Tokyo Hotel', '东京酒店')}
                </h2>
              </div>
              <p className="text-slate-600 text-sm">{t('Near Akihabara Station', '秋叶原站附近')}</p>
            </div>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
              Mar 18-21
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot text-pink-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Location', '位置')}</p>
                <p className="text-slate-600">{t('5 min walk from Akihabara Station', '距离秋叶原站步行5分钟')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-bed text-purple-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Room Type', '房型')}</p>
                <p className="text-slate-600">{t('Multiple rooms, check-in details TBD', '多个房间，入住详情待定')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-train text-blue-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Access', '交通')}</p>
                <p className="text-slate-600">{t('Tsukuba Express from Haneda Airport', '从羽田机场乘筑波快线')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Osaka Hotel */}
        <div className="glass-card border-l-4 border-orange-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏯</span>
                <h2 className="font-header text-2xl font-bold text-orange-600">
                  {t('Osaka Hotel (Namba)', '大阪酒店 (难波)')}
                </h2>
              </div>
              <p className="text-slate-600 text-sm">{t('Namba/Dotonbori area', '难波/道顿堀地区')}</p>
            </div>
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
              Mar 21-27
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot text-pink-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Location', '位置')}</p>
                <p className="text-slate-600">{t('Walking distance to Dotonbori', '步行至道顿堀')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-bed text-purple-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Room Type', '房型')}</p>
                <p className="text-slate-600">{t('Multiple rooms, details TBD', '多个房间，详情待定')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-train text-blue-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Access', '交通')}</p>
                <p className="text-slate-600">{t('Namba Station (Multiple lines)', '难波站 (多条线路)')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Airport Hotel */}
        <div className="glass-card border-l-4 border-pink-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">✈️</span>
                <h2 className="font-header text-2xl font-bold text-pink-600">
                  {t('Airport Hotel (Rinku Town)', '机场酒店 (临空城)')}
                </h2>
              </div>
              <p className="text-slate-600 text-sm">{t('Near Kansai Airport', '关西机场附近')}</p>
            </div>
            <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
              Mar 27-28
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot text-pink-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Location', '位置')}</p>
                <p className="text-slate-600">{t('10 min from Kansai Airport', '距关西机场10分钟')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-bed text-purple-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Room Type', '房型')}</p>
                <p className="text-slate-600">{t('Details TBD', '详情待定')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-plane text-blue-500 mt-0.5"></i>
              <div>
                <p className="font-semibold text-slate-800">{t('Purpose', '目的')}</p>
                <p className="text-slate-600">{t('Convenient for early morning flights', '方便早班飞机')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-header text-lg font-bold text-yellow-900 mb-3">
          📌 {t('Important Notes', '重要提示')}
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Check-in time: Usually 15:00, check with hotel', '入住时间: 通常15:00，请与酒店确认')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Check-out time: Usually 11:00', '退房时间: 通常11:00')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Luggage storage available before check-in and after check-out', '入住前和退房后可寄存行李')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Remember to bring passport for check-in', '记得带护照办理入住')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hotels
