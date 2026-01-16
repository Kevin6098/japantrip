import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import AttractionDetail from '../components/AttractionDetail'
import { attractionsData } from '../data/attractionsData'

const AttractionDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Get attraction data from attractionsData
  const attraction = attractionsData[id]

  if (!attraction) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Attraction Not Found', '未找到景点')}
          </h1>
          <p className="text-slate-600 mb-6">
            {t('The attraction you are looking for does not exist.', '您要找的景点不存在。')}
          </p>
          <Link
            to="/attractions"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('Back to Attractions', '返回景点')}</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto pb-24">
      {/* Back Button */}
      <button
        onClick={() => navigate('/attractions')}
        className="mb-6 text-slate-600 hover:text-slate-800 flex items-center gap-2 transition-colors"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>{t('Back to Attractions', '返回景点')}</span>
      </button>
      
      <AttractionDetail attraction={attraction} />
    </div>
  )
}

export default AttractionDetailPage
