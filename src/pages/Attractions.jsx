import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import AttractionCard from '../components/AttractionCard'
import { attractionsData } from '../data/attractionsData'

const Attractions = () => {
  const { t } = useLanguage()

  // Build attractions list from attractionsData, organized by city
  const attractions = {
    tokyo: [
      { id: 'sensoji' },
      { id: 'shibuya' },
      { id: 'harajuku' },
      { id: 'ueno' },
    ],
    kyoto: [
      { id: 'fushimi-inari' },
      { id: 'kiyomizu' },
      { id: 'gion' },
      { id: 'yasaka' },
    ],
    nara: [
      { id: 'nara-park' },
      { id: 'todaiji' },
      { id: 'kasuga' },
    ],
    osaka: [
      { id: 'dotonbori' },
      { id: 'osaka-castle' },
      { id: 'namba-yasaka-shrine' },
      { id: 'kuromon-market' },
      { id: 'usj' },
    ],
    kobe: [
      { id: 'kobe-port' },
      { id: 'harborland' },
      { id: 'rokkosan-pasture' },
    ],
  }

  const sections = [
    { key: 'tokyo', name: t('Tokyo', '东京'), icon: 'fa-city', color: 'indigo' },
    { key: 'kyoto', name: t('Kyoto', '京都'), icon: 'fa-torii-gate', color: 'green' },
    { key: 'nara', name: t('Nara', '奈良'), icon: 'fa-tree', color: 'teal' },
    { key: 'osaka', name: t('Osaka', '大阪'), icon: 'fa-utensils', color: 'orange' },
    { key: 'kobe', name: t('Kobe', '神户'), icon: 'fa-mountain', color: 'red' },
  ]

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
              const attractionId = attraction.id
              const detailedData = attractionsData[attractionId]
              
              if (!detailedData) return null
              
              // Get the first image from Cloudinary URLs
              const image = detailedData.images && detailedData.images.length > 0
                ? detailedData.images[0]
                : 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
              
              // Handle price - can be string or object {en, zh}
              const price = typeof detailedData.price === 'object' && detailedData.price !== null
                ? t(detailedData.price.en, detailedData.price.zh)
                : detailedData.price
              
              return (
                <div
                  key={index}
                  className="animate-fade-in h-full"
                  style={{ animationDelay: `${(sectionIndex * 0.1) + (index * 0.05)}s` }}
                >
                  <Link to={`/attractions/${attractionId}`} className="block h-full">
                    <AttractionCard
                      title={t(detailedData.title.en, detailedData.title.zh)}
                      description={detailedData.about ? t(detailedData.about.en, detailedData.about.zh).substring(0, 100) + '...' : ''}
                      location={section.name}
                      price={price}
                      image={image}
                      locationColor={section.color}
                    />
                  </Link>
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
