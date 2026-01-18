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
      { id: 'tsurikichi-shinsekai', ...restaurantsData['tsurikichi-shinsekai'] },
      { id: 'shinsekai-kushikatsu-ittoku', ...restaurantsData['shinsekai-kushikatsu-ittoku'] },
      { id: 'naniwa-omurice', ...restaurantsData['naniwa-omurice'] },
      { id: 'ajinoya-honten', ...restaurantsData['ajinoya-honten'] },
      { id: 'ganso-5cm-katsudon', ...restaurantsData['ganso-5cm-katsudon'] },
      { id: 'dotonbori-kukuru', ...restaurantsData['dotonbori-kukuru'] },
      { id: 'mugen-ramen', ...restaurantsData['mugen-ramen'] },
      { id: 'oden-no-den-maki-sennichimae', ...restaurantsData['oden-no-den-maki-sennichimae'] },
      { id: 'tsukemen-suzume', ...restaurantsData['tsukemen-suzume'] },
      { id: 'men-wa-tomoare', ...restaurantsData['men-wa-tomoare'] },
      { id: 'torepichi-kuromon', ...restaurantsData['torepichi-kuromon'] },
      { id: 'shinuoei-kuromon', ...restaurantsData['shinuoei-kuromon'] },
      { id: 'nodobotoke-kamoru', ...restaurantsData['nodobotoke-kamoru'] },
      { id: 'sushi-jin-harukas', ...restaurantsData['sushi-jin-harukas'] },
    ],
    kobe: [
      { id: 'kobe-steak-nick', ...restaurantsData['kobe-steak-nick'] },
      { id: 'gashoken', ...restaurantsData['gashoken'] },
    ],
    kyoto: [
      { id: 'gion-unagi-kawato', ...restaurantsData['gion-unagi-kawato'] },
      { id: 'kyo-kiyomizu-shigemori', ...restaurantsData['kyo-kiyomizu-shigemori'] },
      { id: 'issun-boushi', ...restaurantsData['issun-boushi'] },
      { id: 'gokago-matcha', ...restaurantsData['gokago-matcha'] },
      { id: 'gion-gozu', ...restaurantsData['gion-gozu'] },
      { id: 'ichiren-kyoto', ...restaurantsData['ichiren-kyoto'] },
      { id: 'salmon-noodle-kyoto', ...restaurantsData['salmon-noodle-kyoto'] },
      { id: 'masaichi', ...restaurantsData['masaichi'] },
    ],
    uji: [
      { id: 'nakamura-tokichi-uji', ...restaurantsData['nakamura-tokichi-uji'] },
    ],
    nara: [
      { id: 'kamameshi-shizuka', ...restaurantsData['kamameshi-shizuka'] },
      { id: 'yamatoen-honten', ...restaurantsData['yamatoen-honten'] },
    ],
  }

  const sections = [
    { key: 'tokyo', name: t('Tokyo', '东京'), icon: 'fa-city', color: 'indigo' },
    { key: 'osaka', name: t('Osaka', '大阪'), icon: 'fa-utensils', color: 'orange' },
    { key: 'kobe', name: t('Kobe', '神户'), icon: 'fa-mountain', color: 'red' },
    { key: 'kyoto', name: t('Kyoto', '京都'), icon: 'fa-torii-gate', color: 'green' },
    { key: 'uji', name: t('Uji', '宇治'), icon: 'fa-leaf', color: 'teal' },
    { key: 'nara', name: t('Nara', '奈良'), icon: 'fa-deer', color: 'amber' },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
              {sectionRestaurants.map((restaurant, index) => {
                const image = restaurant.images && restaurant.images.length > 0 
                  ? restaurant.images[0] 
                  : 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
                
                return (
                  <div
                    key={restaurant.id}
                    className="animate-fade-in flex"
                    style={{ animationDelay: `${(sectionIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <Link to={`/food/${restaurant.id}`} className="block w-full flex">
                      <RestaurantCard
                        title={t(restaurant.title.en, restaurant.title.zh)}
                        description={restaurant.about ? t(restaurant.about.en, restaurant.about.zh).substring(0, 100) + '...' : ''}
                        location={t(restaurant.location.en, restaurant.location.zh)}
                        price={restaurant.price}
                        image={image}
                        locationColor={section.color}
                        schedule={restaurant.schedule ? (
                          Array.isArray(restaurant.schedule) 
                            ? restaurant.schedule.map(s => ({
                                date: t(s.date.en, s.date.zh),
                                time: s.time,
                                meal: t(s.meal.en, s.meal.zh)
                              }))
                            : {
                                date: t(restaurant.schedule.date.en, restaurant.schedule.date.zh),
                                time: restaurant.schedule.time,
                                meal: t(restaurant.schedule.meal.en, restaurant.schedule.meal.zh)
                              }
                        ) : null}
                        recommended={restaurant.recommended || false}
                        genre={restaurant.genre ? t(restaurant.genre.en, restaurant.genre.zh) : null}
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
