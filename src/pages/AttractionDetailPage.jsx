import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import AttractionDetail from '../components/AttractionDetail'
import { attractionsData } from '../data/attractionsData'

// Ordered list of attraction IDs (same order as Attractions list page)
const ATTRACTION_IDS = [
  'sensoji', 'shibuya', 'harajuku', 'tokyo-station', 'ueno',
  'fushimi-inari', 'kiyomizu', 'gion', 'yasaka', 'ujigami', 'ninenzaka-sannenzaka', 'kamogawa',
  'nara-park', 'todaiji', 'kasuga', 'wakakusa',
  'dotonbori', 'katsuoji', 'osaka-castle', 'umeda-sky-building', 'osaka-aquarium', 'namba-yasaka-shrine', 'kuromon-market', 'harukas-abeno', 'usj', 'tsutenkaku', 'shinsaibashi',
  'kobe-port', 'harborland', 'rokkosan-pasture',
]

const AttractionDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Get attraction data from attractionsData
  const attraction = attractionsData[id]
  const currentIndex = ATTRACTION_IDS.indexOf(id)
  const prevId = currentIndex > 0 ? ATTRACTION_IDS[currentIndex - 1] : null
  const nextId = currentIndex >= 0 && currentIndex < ATTRACTION_IDS.length - 1 ? ATTRACTION_IDS[currentIndex + 1] : null

  if (!attraction) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Attraction Not Found', '未找到景点', '観光地が見つかりません')}
          </h1>
          <p className="text-slate-600 mb-6">
            {t('The attraction you are looking for does not exist.', '您要找的景点不存在。', 'お探しの観光地は存在しません。')}
          </p>
          <Link
            to="/attractions"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('Back to Attractions', '返回景点', '観光地へ戻る')}</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto pb-24">
      {/* Top bar: Back + Prev/Next attraction */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          onClick={() => navigate('/attractions')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i>
          <span>{t('Back to Attractions', '返回景点', '観光地へ戻る')}</span>
        </button>
        <div className="flex items-center gap-2">
          {prevId ? (
            <Link
              to={`/attractions/${prevId}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-pink-200 text-pink-700 font-semibold shadow-sm hover:bg-pink-50 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              title={t('Previous attraction', '上一个景点', '前の観光地')}
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
              <span className="hidden sm:inline">{t('Previous', '上一个', '前へ')}</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/60 border border-pink-100 text-pink-300 cursor-not-allowed font-semibold">
              <i className="fa-solid fa-chevron-left text-sm"></i>
              <span className="hidden sm:inline">{t('Previous', '上一个', '前へ')}</span>
            </span>
          )}
          {nextId ? (
            <Link
              to={`/attractions/${nextId}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 text-purple-700 font-semibold shadow-sm hover:bg-purple-50 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              title={t('Next attraction', '下一个景点', '次の観光地')}
            >
              <span className="hidden sm:inline">{t('Next', '下一个', '次へ')}</span>
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/60 border border-purple-100 text-purple-300 cursor-not-allowed font-semibold">
              <span className="hidden sm:inline">{t('Next', '下一个', '次へ')}</span>
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </span>
          )}
        </div>
      </div>

      <AttractionDetail attraction={attraction} />
    </div>
  )
}

export default AttractionDetailPage
