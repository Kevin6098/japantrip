import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Packing = () => {
  const { t } = useLanguage()
  const [checked, setChecked] = useState({})

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const colorClasses = {
    indigo: 'bg-indigo-100',
    pink: 'bg-pink-100',
    cyan: 'bg-cyan-100',
    purple: 'bg-purple-100',
    emerald: 'bg-emerald-100',
    slate: 'bg-slate-100',
  }

  const categories = [
    {
      title: t('Documents', '证件文件'),
      icon: '📄',
      color: 'indigo',
      items: [
        t('Passport', '护照'),
        t('Flight tickets (digital + backup)', '机票 (数字版 + 备份)'),
        t('Hotel address list (saved offline / printed)', '酒店地址列表 (离线保存 / 打印)'),
        t('Copy of passport (photo or print)', '护照复印件 (照片或打印)'),
      ],
    },
    {
      title: t('Clothing', '衣物'),
      icon: '👕',
      color: 'pink',
      items: [
        t('Comfortable walking shoes', '舒适步行鞋'),
        t('Light jacket / windbreaker', '轻便外套 / 防风外套'),
        t('Underwear & socks (≈ 11 days)', '内衣 & 袜子 (≈ 11天)'),
        t('Casual outfits (easy to layer)', '休闲装 (易于分层)'),
        t('Thin sweater / hoodie', '薄毛衣 / 连帽衫'),
        t('Sleepwear', '睡衣'),
      ],
    },
    {
      title: t('Toiletries', '洗漱用品'),
      icon: '🧴',
      color: 'cyan',
      items: [
        t('Toothbrush & toothpaste', '牙刷 & 牙膏'),
        t('Skincare & makeup', '护肤品 & 化妆品'),
        t('Sunscreen', '防晒霜'),
        t('Medications (personal + pain relief)', '药品 (个人 + 止痛药)'),
        t('Lip balm', '润唇膏'),
        t('Hand cream', '护手霜'),
      ],
    },
    {
      title: t('Electronics', '电子产品'),
      icon: '📱',
      color: 'purple',
      items: [
        t('Phone & charger', '手机 & 充电器'),
        t('Power bank', '充电宝'),
        t('Universal adapter (Japan Type A)', '万能转换插头 (日本A型)'),
        t('Earphones / headphones', '耳机 / 头戴式耳机'),
        t('SIM card / eSIM / pocket Wi-Fi', 'SIM卡 / eSIM / 口袋Wi-Fi'),
        t('Extra charging cable', '额外充电线'),
        t('Offline maps & Google Translate downloaded', '离线地图 & 谷歌翻译已下载'),
      ],
    },
    {
      title: t('Money & Cards', '钱 & 卡'),
      icon: '💴',
      color: 'emerald',
      items: [
        t('Cash', '现金'),
        t('Credit cards', '信用卡'),
        t('Coin pouch / small wallet', '零钱包 / 小钱包'),
      ],
    },
    {
      title: t('Miscellaneous', '其他物品'),
      icon: '🎒',
      color: 'slate',
      items: [
        t('Compact umbrella', '折叠伞'),
        t('Reusable shopping bag', '可重复使用购物袋'),
        t('Pocket tissues / wet wipes', '口袋纸巾 / 湿巾'),
        t('Daypack / small backpack', '日用背包 / 小背包'),
        t('Sunglasses / cap', '太阳镜 / 帽子'),
        t('Empty luggage space for souvenirs', '预留行李空间放纪念品'),
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
              <div className={`w-12 h-12 rounded-xl ${colorClasses[category.color]} flex items-center justify-center text-2xl`}>
                {category.icon}
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
