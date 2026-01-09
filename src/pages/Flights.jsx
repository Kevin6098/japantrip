import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Flights = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-purple-100 mb-4">
          <i className="fa-solid fa-plane-arrival text-purple-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Flight Information', '航班信息')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          ✈️ {t('All flight details and schedules', '所有航班详情和时间表')}
        </p>
      </div>

      {/* Outbound Flights */}
      <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-header text-2xl font-bold text-indigo-700 mb-6">
          🛫 {t('Outbound Flights', '出发航班')}
        </h2>
        <div className="space-y-6">
          <div className="glass-card border-l-4 border-indigo-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="font-header text-xl font-bold text-slate-800">
                  {t('Cathay Pacific (CX)', '国泰航空 (CX)')}
                </h3>
                <p className="text-pink-500 font-bold text-sm">Wednesday, March 18, 2026</p>
              </div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
                {t('Confirmed', '已确认')}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 mb-1">{t('Departure', '出发')}</p>
                <p className="font-bold text-lg">Hong Kong (HKG)</p>
                <p className="text-slate-500">17:45</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">{t('Arrival', '抵达')}</p>
                <p className="font-bold text-lg">Tokyo Haneda (HND)</p>
                <p className="text-slate-500">21:15</p>
              </div>
            </div>
          </div>

          <div className="glass-card border-l-4 border-indigo-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="font-header text-xl font-bold text-slate-800">
                  {t('Thai Airways (TG)', '泰国航空 (TG)')}
                </h3>
                <p className="text-pink-500 font-bold text-sm">Wednesday, March 18, 2026</p>
              </div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
                {t('Confirmed', '已确认')}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 mb-1">{t('Departure', '出发')}</p>
                <p className="font-bold text-lg">Bangkok (BKK)</p>
                <p className="text-slate-500">18:30</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">{t('Arrival', '抵达')}</p>
                <p className="font-bold text-lg">Tokyo Haneda (HND)</p>
                <p className="text-slate-500">22:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Return Flights */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-header text-2xl font-bold text-orange-600 mb-6">
          🛬 {t('Return Flights', '返回航班')}
        </h2>
        <div className="space-y-6">
          <div className="glass-card border-l-4 border-orange-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="font-header text-xl font-bold text-slate-800">
                  {t('Cathay Pacific (CX)', '国泰航空 (CX)')}
                </h3>
                <p className="text-pink-500 font-bold text-sm">Saturday, March 28, 2026</p>
              </div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
                {t('Confirmed', '已确认')}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 mb-1">{t('Departure', '出发')}</p>
                <p className="font-bold text-lg">Osaka Kansai (KIX)</p>
                <p className="text-slate-500">09:30</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">{t('Arrival', '抵达')}</p>
                <p className="font-bold text-lg">Hong Kong (HKG)</p>
                <p className="text-slate-500">12:45</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ {t('Check-in opens at 07:30', '值机时间: 07:30')}
              </p>
            </div>
          </div>

          <div className="glass-card border-l-4 border-orange-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="font-header text-xl font-bold text-slate-800">
                  {t('Thai Airways (TG)', '泰国航空 (TG)')}
                </h3>
                <p className="text-pink-500 font-bold text-sm">Saturday, March 28, 2026</p>
              </div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
                {t('Confirmed', '已确认')}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 mb-1">{t('Departure', '出发')}</p>
                <p className="font-bold text-lg">Osaka Kansai (KIX)</p>
                <p className="text-slate-500">10:30</p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">{t('Arrival', '抵达')}</p>
                <p className="font-bold text-lg">Bangkok (BKK)</p>
                <p className="text-slate-500">14:15</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ {t('Check-in opens at 08:30', '值机时间: 08:30')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flights
