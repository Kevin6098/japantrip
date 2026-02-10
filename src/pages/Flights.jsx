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
            {t('Flight Information', '航班信息', 'フライト情報')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          ✈️ {t('All flight details and schedules', '所有航班详情和时间表', 'フライトの詳細と時刻表')}
        </p>
      </div>

      <div className="space-y-6">
        {/* Group 1 – Penang → Tokyo / Osaka → Penang (via Bangkok) */}
        <div className="glass-card rounded-2xl p-1 shadow-sm border-2 border-purple-200 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold font-header text-lg">
                ✈️ {t('Group 1 – Penang → Tokyo / Osaka → Penang', '第一组 – 槟城 → 东京 / 大阪 → 槟城', 'グループ1：ペナン → 東京 / 大阪 → ペナン')}
              </h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded font-bold">TG</span>
            </div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded inline-block mt-1">
              {t('Passengers (4):', '乘客 (4人):', '搭乗者（4名）：')}{' '}
              <span className="font-semibold">Cheng Wai Soon, Siew Pheng See, Yi Joe See, Siew Kim See</span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            {/* Outbound */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-departure"></i>
                🛫 {t('Outbound (To Japan)', '去程 (前往日本)', '往路（日本へ）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('18 Mar 2026', '2026年3月18日', '2026年3月18日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Penang → Bangkok</span>
                      <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">08:00 – 08:50</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Thai Airways TG426</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Bangkok → Tokyo</span>
                      <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">14:50 – 22:30</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Thai Airways TG660</div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs">
                  <span className="font-semibold text-green-700">📍 {t('Arrive:', '抵达:', '到着：')}{' '} </span>
                  <span className="text-green-800">Tokyo ({t('18 Mar 2026, night', '2026年3月18日晚', '2026年3月18日 夜')})</span>
                </div>
              </div>
            </div>
            {/* Return */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-arrival"></i>
                🛬 {t('Return (From Japan)', '返程 (从日本)', '復路（日本から）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('28 Mar 2026', '2026年3月28日', '2026年3月28日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Osaka → Bangkok</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">11:00 – 15:45</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Thai Airways TG623</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Bangkok → Penang</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">19:30 – 22:20</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Thai Airways TG425</div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs space-y-1">
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Depart Japan:', '离开日本:', '日本出発：')}{' '} </span>
                    <span className="text-blue-800">Osaka</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Arrive Home:', '抵达家乡:', '帰国到着：')}{' '} </span>
                    <span className="text-blue-800">Penang ({t('28 Mar 2026, night', '2026年3月28日晚', '2026年3月28日 夜')})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group 2 – Singapore → Tokyo / Osaka → Singapore (via Hong Kong) */}
        <div className="glass-card rounded-2xl p-1 shadow-sm border-2 border-teal-200 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 rounded-t-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold font-header text-lg">
                ✈️ {t('Group 2 – Singapore → Tokyo / Osaka → Singapore', '第二组 – 新加坡 → 东京 / 大阪 → 新加坡', 'グループ2：シンガポール → 東京 / 大阪 → シンガポール')}
              </h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded font-bold">CX</span>
            </div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded inline-block mt-1">
              {t('Passenger (1):', '乘客 (1人):', '搭乗者（1名）：')}{' '}
              <span className="font-semibold">Ang Shin Nee</span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            {/* Outbound */}
            <div className="border-l-4 border-teal-500 pl-4">
              <div className="font-bold text-teal-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-departure"></i>
                🛫 {t('Outbound (To Japan)', '去程 (前往日本)', '往路（日本へ）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('18 Mar 2026', '2026年3月18日', '2026年3月18日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Singapore → Hong Kong</span>
                      <span className="font-bold text-teal-600 bg-teal-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">10:00 – 14:00</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX658</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Hong Kong → Tokyo</span>
                      <span className="font-bold text-teal-600 bg-teal-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">16:30 – 21:15</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX542</div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs">
                  <span className="font-semibold text-green-700">📍 {t('Arrive:', '抵达:', '到着：')}{' '} </span>
                  <span className="text-green-800">Tokyo ({t('18 Mar 2026, night', '2026年3月18日晚', '2026年3月18日 夜')})</span>
                </div>
              </div>
            </div>
            {/* Return */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-arrival"></i>
                🛬 {t('Return (From Japan)', '返程 (从日本)', '復路（日本から）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('28 Mar 2026', '2026年3月28日', '2026年3月28日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Osaka → Hong Kong</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">09:25 – 13:00</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX567</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Hong Kong → Singapore</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">15:10 – 19:15</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX635</div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs space-y-1">
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Depart Japan:', '离开日本:', '日本出発：')}{' '} </span>
                    <span className="text-blue-800">Osaka</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Arrive Home:', '抵达家乡:', '帰国到着：')}{' '} </span>
                    <span className="text-blue-800">Singapore ({t('28 Mar 2026, night', '2026年3月28日晚', '2026年3月28日 夜')})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group 3 – Penang → Osaka / Osaka → Penang (via Hong Kong) */}
        <div className="glass-card rounded-2xl p-1 shadow-sm border-2 border-amber-200 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-t-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold font-header text-lg">
                ✈️ {t('Group 3 – Penang → Osaka / Osaka → Penang', '第三组 – 槟城 → 大阪 / 大阪 → 槟城', 'グループ3：ペナン → 大阪 / 大阪 → ペナン')}
              </h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded font-bold">CX</span>
            </div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded inline-block mt-1">
              {t('Passengers (3):', '乘客 (3人):', '搭乗者（3名）：')} <span className="font-semibold">Siew Tin See, Jun Ming Koay, Eng Kim See</span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            {/* Outbound */}
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="font-bold text-amber-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-departure"></i>
                🛫 {t('Outbound (To Japan)', '去程 (前往日本)', '往路（日本へ）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('21 Mar 2026', '2026年3月21日', '2026年3月21日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Penang → Hong Kong</span>
                      <span className="font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">07:50 – 11:45</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX622</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Hong Kong → Osaka</span>
                      <span className="font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">13:20 – 17:50</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX598</div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs">
                  <span className="font-semibold text-green-700">📍 {t('Arrive:', '抵达:', '到着：')}{' '} </span>
                  <span className="text-green-800">Osaka ({t('21 Mar 2026, evening', '2026年3月21日晚', '2026年3月21日 夕方')})</span>
                </div>
              </div>
            </div>
            {/* Return */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-plane-arrival"></i>
                🛬 {t('Return (From Japan)', '返程 (从日本)', '復路（日本から）')}
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="font-semibold text-slate-800 mb-1">
                    {t('28 Mar 2026', '2026年3月28日', '2026年3月28日')}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Osaka → Hong Kong</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">10:00 – 13:35</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX503</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-600">Hong Kong → Penang</span>
                      <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        ⏰ <span className="highlight-time">15:15 – 19:05</span>
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 pl-4">Cathay Pacific CX621</div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs space-y-1">
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Depart Japan:', '离开日本:', '日本出発：')}{' '} </span>
                    <span className="text-blue-800">Osaka</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">📍 {t('Arrive Home:', '抵达家乡:', '帰国到着：')}{' '} </span>
                    <span className="text-blue-800">Penang ({t('28 Mar 2026, night', '2026年3月28日晚', '2026年3月28日 夜')})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="glass-card rounded-2xl p-5 shadow-sm border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-indigo-600 text-white rounded-xl">
              <i className="fa-solid fa-compass text-xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-bold font-header text-lg text-indigo-800 mb-2">
                🧭 {t('Quick Overview', '快速概览', '概要')}
              </h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="bg-white/80 p-3 rounded-lg border border-indigo-200">
                  <div className="font-semibold text-indigo-700 mb-1">
                    {t('Earliest arrival in Japan:', '最早抵达日本:', '日本への最速到着：')}
                  </div>
                  <div className="text-slate-600">
                    {t('Group 1 & 2 → 18 Mar 2026 (Tokyo)', '第一组 & 第二组 → 2026年3月18日 (东京)', 'グループ1・2 → 2026年3月18日（東京）')}
                  </div>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-indigo-200">
                  <div className="font-semibold text-indigo-700 mb-1">
                    {t('Latest arrival in Japan:', '最晚抵达日本:', '日本への最終到着：')}
                  </div>
                  <div className="text-slate-600">
                    {t('Group 3 → 21 Mar 2026 (Osaka)', '第三组 → 2026年3月21日 (大阪)', 'グループ3 → 2026年3月21日（大阪）')}
                  </div>
                </div>
                <div className="bg-white/80 p-3 rounded-lg border border-indigo-200">
                  <div className="font-semibold text-indigo-700 mb-1">
                    {t('All groups depart Japan:', '所有组离开日本:', '全グループの日本出発：')}
                  </div>
                  <div className="text-slate-600">
                    {t('28 Mar 2026 from Osaka', '2026年3月28日 从大阪', '2026年3月28日 大阪から')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flights
