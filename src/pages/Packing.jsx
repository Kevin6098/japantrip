import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Packing = () => {
  const { t } = useLanguage()
  const [checked, setChecked] = useState({})

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const categories = [
    {
      title: t('Documents', '证件文件'),
      icon: 'fa-passport',
      color: 'red',
      items: [
        t('Passport', '护照'),
        t('Flight tickets', '机票'),
        t('Hotel confirmations', '酒店确认'),
        t('Travel insurance', '旅行保险'),
        t('Emergency contacts', '紧急联系方式'),
      ],
    },
    {
      title: t('Clothing', '衣物'),
      icon: 'fa-shirt',
      color: 'blue',
      items: [
        t('Comfortable walking shoes', '舒适的步行鞋'),
        t('Light jacket', '轻便外套'),
        t('Underwear & socks (11 days)', '内衣袜子 (11天)'),
        t('Casual outfits', '休闲服装'),
        t('Formal outfit (graduation)', '正装 (毕业典礼)'),
      ],
    },
    {
      title: t('Toiletries', '洗漱用品'),
      icon: 'fa-pump-soap',
      color: 'green',
      items: [
        t('Toothbrush & toothpaste', '牙刷牙膏'),
        t('Shampoo & soap', '洗发水沐浴露'),
        t('Sunscreen', '防晒霜'),
        t('Medications', '药品'),
        t('Face masks', '口罩'),
      ],
    },
    {
      title: t('Electronics', '电子设备'),
      icon: 'fa-mobile-screen',
      color: 'purple',
      items: [
        t('Phone & charger', '手机和充电器'),
        t('Power bank', '充电宝'),
        t('Camera', '相机'),
        t('Universal adapter', '万能转换插头'),
        t('Earphones', '耳机'),
      ],
    },
    {
      title: t('Money & Cards', '现金银行卡'),
      icon: 'fa-credit-card',
      color: 'emerald',
      items: [
        t('Cash (¥50,000+)', '现金 (¥50,000+)'),
        t('Credit cards', '信用卡'),
        t('IC card (Suica/PASMO)', 'IC卡 (Suica/PASMO)'),
      ],
    },
    {
      title: t('Miscellaneous', '其他物品'),
      icon: 'fa-bag-shopping',
      color: 'orange',
      items: [
        t('Reusable water bottle', '水杯'),
        t('Umbrella', '雨伞'),
        t('Hand sanitizer', '消毒液'),
        t('Snacks', '零食'),
        t('Empty luggage space for shopping', '留空行李箱空间购物'),
      ],
    },
  ]

  const progress = Object.values(checked).filter(Boolean).length
  const total = categories.reduce((sum, cat) => sum + cat.items.length, 0)
  const percentage = Math.round((progress / total) * 100)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-pink-100 mb-4">
          <i className="fa-solid fa-suitcase text-pink-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Packing Checklist', '行李清单')}
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          ✅ {t('Essential items for your trip', '旅行必备物品')}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="glass-card mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-slate-800">
            {t('Packing Progress', '打包进度')}
          </span>
          <span className="font-bold text-pink-600">
            {progress} / {total} ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-600 h-full transition-all duration-500 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="glass-card animate-fade-in"
            style={{ animationDelay: `${catIndex * 0.05}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${category.color}-100 flex items-center justify-center`}>
                <i className={`fa-solid ${category.icon} text-${category.color}-600 text-xl`}></i>
              </div>
              <h2 className="font-header text-xl font-bold text-slate-800">
                {category.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => {
                const id = `${catIndex}-${itemIndex}`
                return (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={id}
                      checked={checked[id] || false}
                      onChange={() => toggleCheck(id)}
                      className="w-5 h-5 accent-pink-500 cursor-pointer transition-transform hover:scale-110"
                    />
                    <label
                      htmlFor={id}
                      className={`cursor-pointer text-sm flex-grow transition-all ${
                        checked[id] ? 'text-slate-400 line-through' : 'text-slate-700'
                      }`}
                    >
                      {item}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-header text-lg font-bold text-blue-900 mb-3">
          💡 {t('Packing Tips', '打包小贴士')}
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Roll clothes instead of folding to save space', '卷衣服而不是折叠可节省空间')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Pack a change of clothes in carry-on in case luggage is delayed', '在随身行李中放一套换洗衣物以防行李延误')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('Leave space for souvenirs and shopping', '为纪念品和购物留出空间')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('March weather in Japan: 10-15°C, layer up!', '日本三月天气: 10-15°C, 多层穿衣!')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Packing
