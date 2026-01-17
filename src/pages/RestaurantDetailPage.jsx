import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import RestaurantDetail from '../components/RestaurantDetail'
import { restaurantsData } from '../data/restaurantsData'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { t } = useLanguage()

  // Get restaurant data from restaurantsData
  const restaurant = restaurantsData[id]

  if (!restaurant) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Restaurant not found', '未找到餐厅')}
          </h1>
          <Link to="/food" className="text-orange-600 hover:text-orange-800">
            {t('← Back to Food & Restaurants', '← 返回美食与餐厅')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      <Link
        to="/food"
        className="mb-6 text-slate-600 hover:text-slate-800 flex items-center gap-2 transition-colors"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>{t('Back to Food & Restaurants', '返回美食与餐厅')}</span>
      </Link>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  )
}

export default RestaurantDetailPage
