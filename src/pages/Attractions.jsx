import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import AttractionCard from '../components/AttractionCard'
import AttractionDetail from '../components/AttractionDetail'
import { attractionsData } from '../data/attractionsData'

const Attractions = () => {
  const { t } = useLanguage()
  const [selectedAttraction, setSelectedAttraction] = useState(null)

  const attractions = {
    tokyo: [
      {
        id: 'sensoji',
        title: t('Senso-ji Temple', '浅草寺'),
        description: t("Tokyo's oldest temple, famous for Kaminarimon Gate", '东京最古老的寺庙，以雷门而闻名'),
        price: 'Free',
        image: '/attractions/sensoji/kaminarimon-gate.jpg',
      },
      {
        id: 'shibuya',
        title: t('Shibuya Crossing', '涩谷十字路口'),
        description: t("World's busiest pedestrian crossing & Hachiko Statue", '世界上最繁忙的十字路口和忠犬八公像'),
        price: 'Free',
        image: '/attractions/shibuya/aerial-view.jpg',
      },
      {
        id: 'harajuku',
        title: t('Harajuku & Omotesando', '原宿 & 表参道'),
        description: t('Fashion district with Takeshita Street and trendy cafes', '时尚区，有竹下通和潮流咖啡厅'),
        price: 'Free',
        image: '/attractions/harajuku/takeshita-street.jpg',
      },
      {
        id: 'ueno',
        title: t('Ueno Park', '上野公园'),
        description: t('Large park with museums, zoo, and cherry blossoms', '大型公园，有博物馆、动物园和樱花'),
        price: 'Free',
        image: '/attractions/ueno/cherry-blossom-avenue.jpg',
      },
    ],
    kyoto: [
      {
        id: 'fushimi-inari',
        title: t('Fushimi Inari Taisha', '伏见稻荷大社'),
        description: t('Famous for thousands of vermillion torii gates', '以数千个朱红色鸟居而闻名'),
        price: 'Free',
        image: '/attractions/fushimi-inari/torii-tunnel-day.jpg',
      },
      {
        title: t('Kiyomizu-dera', '清水寺'),
        description: t('UNESCO World Heritage temple with wooden stage', '联合国教科文组织世界遗产，有木制舞台'),
        price: '¥400',
        image: '/attractions/kiyomizu/main-hall-veranda.jpg',
      },
      {
        title: t('Gion District', '祇园区'),
        description: t('Historic geisha district with traditional architecture', '历史悠久的艺伎区，有传统建筑'),
        price: 'Free',
        image: '/attractions/gion/hanamikoji-street.jpg',
      },
      {
        title: t('Yasaka Shrine', '八坂神社'),
        description: t('Beautiful shrine with hundreds of lanterns', '美丽的神社，有数百个灯笼'),
        price: 'Free',
        image: '/attractions/yasaka/main-gate-day.jpg',
      },
    ],
    nara: [
      {
        title: t('Nara Park', '奈良公园'),
        description: t('Friendly deer roaming freely in beautiful park', '友好的鹿在美丽的公园中自由漫游'),
        price: 'Free',
        image: '/attractions/nara-park/cherry-blossom-deer.jpg',
      },
      {
        title: t('Todaiji Temple', '东大寺'),
        description: t('Great Buddha Hall with massive bronze statue', '大佛殿，有巨大的青铜雕像'),
        price: '¥600',
        image: '/attractions/todaiji/main-hall-exterior.jpg',
      },
      {
        title: t('Kasuga Taisha', '春日大社'),
        description: t('Shrine with 3000 stone lanterns', '拥有3000个石灯笼的神社'),
        price: 'Free',
        image: '/attractions/kasuga/main-hall-vermillion.png',
      },
    ],
    osaka: [
      {
        title: t('Dotonbori', '道顿堀'),
        description: t('Famous food street with Glico running man sign', '著名的美食街，有格力高跑男广告牌'),
        price: 'Free',
        image: '/attractions/dotonbori/canal-night-view.jpg',
      },
      {
        title: t('Osaka Castle', '大阪城'),
        description: t('Historic castle with museum and beautiful gardens', '历史悠久的城堡，有博物馆和美丽的花园'),
        price: 'Free',
        image: '/attractions/osaka-castle/cherry-blossom-spring.jpg',
      },
      {
        title: t('Universal Studios Japan', '环球影城'),
        description: t('Theme park with Harry Potter, Super Nintendo World', '主题公园，有哈利波特、超级任天堂世界'),
        price: '~¥9,500',
        image: '/attractions/usj/universal-globe-iconic.jpg',
      },
    ],
    kobe: [
      {
        title: t('Kobe Port Tower', '神户塔'),
        description: t('Iconic red tower with panoramic port views', '标志性的红色塔，可欣赏港口全景'),
        price: '¥700',
        image: '/attractions/kobe-port/tower-illuminated-night.jpg',
      },
      {
        title: t('Harborland', '港湾乐园'),
        description: t('Waterfront shopping and dining district', '海滨购物和餐饮区'),
        price: 'Free',
        image: '/attractions/harborland/ferris-wheel-waterfront.jpg',
      },
      {
        title: t('Rokkosan Pasture', '六甲山牧场'),
        description: t('Mountain farm with sheep and scenic views', '有绵羊和风景的山地农场'),
        price: '¥500',
        image: '/attractions/rokkosan-pasture/sheep-grazing-hillside.jpg',
      },
    ],
  }

  const sections = [
    { key: 'tokyo', name: t('Tokyo', '东京'), icon: 'fa-city', color: 'indigo' },
    { key: 'kyoto', name: t('Kyoto', '京都'), icon: 'fa-torii-gate', color: 'green' },
    { key: 'nara', name: t('Nara', '奈良'), icon: 'fa-tree', color: 'teal' },
    { key: 'osaka', name: t('Osaka', '大阪'), icon: 'fa-utensils', color: 'orange' },
    { key: 'kobe', name: t('Kobe', '神户'), icon: 'fa-mountain', color: 'red' },
  ]

  // If an attraction is selected, show detailed view
  if (selectedAttraction) {
    return (
      <div>
        <button
          onClick={() => setSelectedAttraction(null)}
          className="mb-6 text-slate-600 hover:text-slate-800 flex items-center gap-2 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{t('Back to Attractions', '返回景点')}</span>
        </button>
        <AttractionDetail attraction={selectedAttraction} />
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-purple-100 mb-4">
          <i className="fa-solid fa-camera-retro text-purple-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Must-See Attractions', '必看景点')}
          </h1>
        </div>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          📸 {t('Click on any attraction to discover detailed information, history, and tips for your visit!', '点击任何景点以了解详细信息、历史和参观提示！')}
        </p>
      </div>

      {/* Attractions by City */}
      {sections.map((section, sectionIndex) => (
        <div
          key={section.key}
          className="mb-16 animate-fade-in"
          style={{ animationDelay: `${sectionIndex * 0.1}s` }}
        >
          <div className="flex items-center mb-6">
            <div className={`p-3 bg-${section.color}-100 rounded-xl mr-3`}>
              <i className={`fa-solid ${section.icon} text-${section.color}-600 text-2xl`}></i>
            </div>
            <h2 className={`font-header text-3xl font-bold text-${section.color}-700`}>
              {section.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {attractions[section.key].map((attraction, index) => {
              // Try to get detailed data from attractionsData
              const attractionId = attraction.id || attraction.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')
              const detailedData = attractionsData[attractionId] || attraction
              
              return (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(sectionIndex * 0.1) + (index * 0.05)}s` }}
                >
                  <AttractionCard
                    {...attraction}
                    location={section.name}
                    locationColor={section.color}
                    onClick={() => {
                      // Merge card data with detailed data
                      const fullData = {
                        ...attraction,
                        ...detailedData,
                        city: section.key,
                        title: detailedData.title || { en: attraction.title, zh: attraction.title },
                        location: detailedData.location || { en: section.name, zh: section.name },
                      }
                      setSelectedAttraction(fullData)
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Attractions
