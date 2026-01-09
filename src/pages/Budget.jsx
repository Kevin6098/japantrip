import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Budget = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-emerald-100 mb-4">
          <i className="fa-solid fa-wallet text-emerald-600 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Budget & Expenses', '预算与开支')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          💴 {t('Daily spending estimates and breakdown', '每日开支估算和明细')}
        </p>
      </div>

      {/* Budget Overview */}
      <div className="glass-card mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-header text-xl font-bold text-slate-800 mb-4">
          {t('Budget Summary', '预算概要')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700 mb-1">{t('Daily Average', '每日平均')}</p>
            <p className="text-3xl font-bold text-blue-800">¥8,000</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <p className="text-sm text-purple-700 mb-1">{t('Total Days', '总天数')}</p>
            <p className="text-3xl font-bold text-purple-800">11</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="text-sm text-green-700 mb-1">{t('Estimated Total', '估算总额')}</p>
            <p className="text-3xl font-bold text-green-800">¥88,000</p>
          </div>
        </div>
      </div>

      {/* Daily Breakdown */}
      <div className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-header text-xl font-bold text-slate-800 mb-6">
          {t('Expense Categories', '开支类别')}
        </h2>
        <div className="space-y-4">
          {[
            { category: t('Meals', '餐饮'), amount: '¥3,000 - ¥5,000', icon: 'fa-utensils', color: 'orange' },
            { category: t('Transportation', '交通'), amount: '¥1,000 - ¥2,000', icon: 'fa-train', color: 'blue' },
            { category: t('Attractions', '景点'), amount: '¥500 - ¥1,500', icon: 'fa-ticket', color: 'purple' },
            { category: t('Shopping', '购物'), amount: '¥2,000 - ¥5,000', icon: 'fa-shopping-bag', color: 'pink' },
            { category: t('Miscellaneous', '其他'), amount: '¥500 - ¥1,000', icon: 'fa-ellipsis', color: 'slate' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                  <i className={`fa-solid ${item.icon} text-${item.color}-600`}></i>
                </div>
                <span className="font-medium text-slate-800">{item.category}</span>
              </div>
              <span className="font-bold text-slate-700">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h3 className="font-header text-lg font-bold text-yellow-900 mb-3">
          💡 {t('Money-Saving Tips', '省钱小贴士')}
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Use IC cards (Suica/PASMO) for trains - save 10% on fares', '使用IC卡 (Suica/PASMO) 乘车 - 节省10%车费')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Convenience store meals are cheap and delicious', '便利店餐食便宜又美味')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Tax-free shopping with passport - save 8-10%', '用护照免税购物 - 节省8-10%')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Visit temples/shrines early morning - free and less crowded', '清晨参观寺庙/神社 - 免费且人少')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Budget
