import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { transportationData, transportationSummary } from '../data/transportationData'

const TransportationBudget = () => {
  const { t } = useLanguage()

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-700',
      orange: 'bg-orange-100 text-orange-700',
      red: 'bg-red-100 text-red-700',
      sky: 'bg-sky-100 text-sky-700',
      emerald: 'bg-emerald-100 text-emerald-700',
      teal: 'bg-teal-100 text-teal-700',
    }
    return colors[color] || 'bg-slate-100 text-slate-700'
  }

  const getTotalColorClasses = (color) => {
    const colors = {
      indigo: 'text-indigo-600',
      orange: 'text-orange-600',
      red: 'text-red-600',
      sky: 'text-sky-600',
      emerald: 'text-emerald-600',
      teal: 'text-teal-600',
    }
    return colors[color] || 'text-slate-600'
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-6xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-blue-100 mb-4">
          <i className="fa-solid fa-train text-blue-500 text-xl mr-3"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Transportation Budget', '交通预算', '交通予算')}
          </h1>
        </div>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          {t(
            'Detailed breakdown of train, bus, and walking times for each day',
            '每天的电车、巴士和步行时间详细分解',
            '電車・バス・徒歩時間の内訳（毎日）'
          )}
        </p>
      </div>

      {/* Daily Transportation Breakdown */}
      <div className="space-y-8">
        {transportationData.map((day, index) => (
          <section key={day.day} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center mb-4">
              <div className={`${getColorClasses(day.color)} p-2 rounded-lg mr-3`}>
                <span className="font-bold">Day {day.day}</span>
              </div>
              <h2 className="font-header text-xl font-bold text-slate-800">
                {t(day.title.en, day.title.zh, day.title.ja)}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Transportation */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-sm text-slate-700 mb-2">
                  <i className="fa-solid fa-train text-blue-500 mr-2"></i>
                  {t('Transportation', '交通', '交通')}
                </h3>
                <ul className="text-xs space-y-1 text-slate-600">
                  {day.transportation.map((item, idx) => (
                    <li key={idx}>
                      • {t(item.en, item.zh, item.ja)}
                      {item.cost && (
                        <span className="font-mono font-semibold ml-1"> {item.cost}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">
                      {t('Total Cost:', '总费用:', '合計：')}
                    </span>
                    <span className={`text-lg font-bold ${getTotalColorClasses(day.color)}`}>
                      {typeof day.totalCost === 'object' 
                        ? t(day.totalCost.en, day.totalCost.zh, day.totalCost.ja)
                        : day.totalCost}
                    </span>
                  </div>
                </div>
              </div>

              {/* Walking Time */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-bold text-sm text-slate-700 mb-2">
                  <i className="fa-solid fa-walking text-green-500 mr-2"></i>
                  {t('Walking Time', '步行时间', '徒歩時間')}
                </h3>
                <ul className="text-xs space-y-1 text-slate-600">
                  {day.walking.map((item, idx) => (
                    <li key={idx}>
                      • {t(item.en, item.zh, item.ja)}
                      {item.time && (
                        <span className="ml-1"> {item.time}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">
                      {t('Total Walking:', '总步行:', '徒歩合計：')}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {day.totalWalking}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Summary Section */}
      <section className="glass-card p-6 mt-8 animate-fade-in">
        <h2 className="font-header text-2xl font-bold text-slate-800 mb-6">
          <i className="fa-solid fa-calculator text-blue-500 mr-2"></i>
          {t('Total Summary', '总计', '合計サマリー')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-train text-blue-600 text-3xl mb-3"></i>
            <h3 className="font-bold text-sm text-slate-700 mb-2">
              {t('Total Transportation', '总交通费', '交通費合計')}
            </h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {transportationSummary.totalCost}
            </div>
            <div className="text-sm text-slate-500">
              {transportationSummary.totalCostRM}
            </div>
            <p className="text-xs text-slate-600 mt-2">
              {t('*Excludes private vans (shared cost)', '*不含私人包车 (分摊费用)', '*貸切バン（割り勘）は含みません')}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-walking text-green-600 text-3xl mb-3"></i>
            <h3 className="font-bold text-sm text-slate-700 mb-2">
              {t('Total Walking Time', '总步行时间', '徒歩時間合計')}
            </h3>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {transportationSummary.totalWalking}
            </div>
            <div className="text-sm text-slate-500">
              {transportationSummary.totalWalkingHours}
            </div>
            <p className="text-xs text-slate-600 mt-2">
              {t('*Average ~61 mins per day', '*平均每天约61分钟', '*1日あたり平均約61分')}
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-info-circle text-purple-600 text-3xl mb-3"></i>
            <h3 className="font-bold text-sm text-slate-700 mb-2">
              {t('Notes', '备注', 'メモ')}
            </h3>
            <ul className="text-xs text-left text-slate-600 space-y-1">
              <li>• {t('Fares are estimates based on typical Japan transit costs', '费用基于日本典型交通成本估算', '運賃は目安（一般的な相場）です')}</li>
              <li>• {t('Consider JR Pass for Day 3-11 if traveling extensively', '如广泛旅行，考虑第3-11天使用JR Pass', '移動が多い場合はJRパス（3〜11日目）も検討')}</li>
              <li>• {t('IC cards (Suica/PASMO) recommended for convenience', '建议使用IC卡 (Suica/PASMO) 方便', 'ICカード（Suica/PASMO）がおすすめ')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="glass-card p-6 mt-8 animate-fade-in">
        <h2 className="font-header text-xl font-bold text-slate-800 mb-4">
          <i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
          {t('Money-Saving Tips', '省钱提示', '節約のコツ')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-bold text-sm text-slate-700 mb-2">
              {t('JR Pass Consideration', 'JR Pass考虑', 'JRパスについて')}
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              {t(
                '7-day JR Pass: ~¥29,650. Your estimated JR costs (Days 4-11): ~¥22,000. May not be worth it unless you add more JR travel.',
                '7天JR Pass: 约¥29,650。您的JR估算费用 (第4-11天): 约¥22,000。除非增加更多JR旅行，否则可能不值得。',
                'JRパス7日間：約¥29,650。想定JR費用（4〜11日目）：約¥22,000。JR移動を増やさない限り割高かも。'
              )}
            </p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-bold text-sm text-slate-700 mb-2">
              {t('IC Cards', 'IC卡', 'ICカード')}
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              {t(
                'Get Suica (Tokyo) or ICOCA (Osaka) for seamless travel. Works on most trains, buses, and convenience stores. Initial deposit: ¥500 (refundable).',
                '购买Suica (东京) 或ICOCA (大阪) 以便无缝旅行。适用于大多数电车、巴士和便利店。初始押金: ¥500 (可退还)。',
                'Suica（東京）やICOCA（大阪）が便利。多くの電車・バス・コンビニで利用可。デポジット：¥500（返金可）。'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          to="/budget"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{t('← Back to Budget', '← 返回预算', '← 予算へ戻る')}</span>
        </Link>
      </div>
    </div>
  )
}

export default TransportationBudget
