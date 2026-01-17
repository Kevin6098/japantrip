import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import RestaurantCard from '../components/RestaurantCard'
import { restaurantsData } from '../data/restaurantsData'

const Food = () => {
  const { t } = useLanguage()

  const restaurants = {
    tokyo: [
      { id: 'pain-maison', ...restaurantsData['pain-maison'] },
      { id: 'ginza-kanimitsu', ...restaurantsData['ginza-kanimitsu'] },
      { id: 'nakamura-tokichi-ginza', ...restaurantsData['nakamura-tokichi-ginza'] },
      { id: 'asakusa-monja', ...restaurantsData['asakusa-monja'] },
      { id: 'ichiran-ramen', ...restaurantsData['ichiran-ramen'] },
      { id: 'tsukada-shabu', ...restaurantsData['tsukada-shabu'] },
      { id: 'afuri-yurakucho', ...restaurantsData['afuri-yurakucho'] },
    ],
    osaka: [
      { id: 'dotonbori-dinner', ...restaurantsData['dotonbori-dinner'] },
      { id: 'kushikatsu-shinsekai', ...restaurantsData['kushikatsu-shinsekai'] },
    ],
    kobe: [
      { id: 'kobe-steak-nick', ...restaurantsData['kobe-steak-nick'] },
      { id: 'gashoken', ...restaurantsData['gashoken'] },
    ],
    kyoto: [
      { id: 'kyoto-lunch', ...restaurantsData['kyoto-lunch'] },
    ],
    uji: [
      { id: 'nakamura-tokichi-uji', ...restaurantsData['nakamura-tokichi-uji'] },
    ],
  }

  const sections = [
    { key: 'tokyo', name: t('Tokyo', '东京'), icon: 'fa-city', color: 'indigo' },
    { key: 'osaka', name: t('Osaka', '大阪'), icon: 'fa-utensils', color: 'orange' },
    { key: 'kobe', name: t('Kobe', '神户'), icon: 'fa-mountain', color: 'red' },
    { key: 'kyoto', name: t('Kyoto', '京都'), icon: 'fa-torii-gate', color: 'green' },
    { key: 'uji', name: t('Uji', '宇治'), icon: 'fa-leaf', color: 'teal' },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-orange-100 mb-4">
          <i className="fa-solid fa-utensils text-orange-500 text-xl mr-2"></i>
          <h1 className="font-header text-2xl font-bold text-slate-800">
            {t('Food & Restaurants', '美食与餐厅')}
          </h1>
        </div>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          🍜 {t('Discover all the amazing restaurants and food experiences in your itinerary!', '探索行程中所有精彩的餐厅和美食体验！')}
        </p>
      </div>

      {/* Restaurants by City */}
      {sections.map((section, sectionIndex) => {
        const sectionRestaurants = restaurants[section.key] || []
        if (sectionRestaurants.length === 0) return null

        return (
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
              {sectionRestaurants.map((restaurant, index) => {
                const image = restaurant.images && restaurant.images.length > 0 
                  ? restaurant.images[0] 
                  : 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
                
                return (
                  <div
                    key={restaurant.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(sectionIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <Link to={`/food/${restaurant.id}`} className="block">
                      <RestaurantCard
                        title={t(restaurant.title.en, restaurant.title.zh)}
                        description={restaurant.about ? t(restaurant.about.en, restaurant.about.zh).substring(0, 100) + '...' : ''}
                        location={t(restaurant.location.en, restaurant.location.zh)}
                        price={restaurant.price}
                        image={image}
                        locationColor={section.color}
                      />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Food
