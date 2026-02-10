import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import RestaurantDetail from '../components/RestaurantDetail'
import { restaurantsData } from '../data/restaurantsData'
import './RestaurantDetailPage.css'

// Ordered list of restaurant IDs (same order as Food list page: Tokyo → Osaka → Kobe → Kyoto → Uji → Nara)
const RESTAURANT_IDS = [
  'pain-maison', 'ginza-kanimitsu', 'nakamura-tokichi-ginza', 'asakusa-monja', 'ichiran-ramen', 'tsukada-shabu', 'afuri-yurakucho',
  'tsurikichi-shinsekai', 'shinsekai-kushikatsu-ittoku', 'naniwa-omurice', 'ajinoya-honten', 'ganso-5cm-katsudon', 'dotonbori-kukuru', 'mugen-ramen', 'oden-no-den-maki-sennichimae', 'tsukemen-suzume', 'men-wa-tomoare', 'torepichi-kuromon', 'shinuoei-kuromon', 'nodobotoke-kamoru', 'sushi-jin-harukas',
  'kobe-steak-nick', 'gashoken',
  'gion-unagi-kawato', 'kyo-kiyomizu-shigemori', 'issun-boushi', 'gokago-matcha', 'gion-gozu', 'ichiren-kyoto', 'salmon-noodle-kyoto', 'masaichi',
  'nakamura-tokichi-uji',
  'kamameshi-shizuka', 'yamatoen-honten',
]

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Get restaurant data from restaurantsData
  const restaurant = restaurantsData[id]
  const currentIndex = RESTAURANT_IDS.indexOf(id)
  const prevId = currentIndex > 0 ? RESTAURANT_IDS[currentIndex - 1] : null
  const nextId = currentIndex >= 0 && currentIndex < RESTAURANT_IDS.length - 1 ? RESTAURANT_IDS[currentIndex + 1] : null

  if (!restaurant) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Restaurant not found', '未找到餐厅', 'レストランが見つかりません')}
          </h1>
          <button
            onClick={() => navigate('/food')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
          >
            <i className="fa-solid fa-arrow-left text-sm"></i>
            <span>{t('Back to Food & Restaurants', '返回美食与餐厅', 'グルメ・レストランへ戻る')}</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
      {/* Top bar: Back + Prev/Next. Desktop: existing pills. Mobile: clear labeled Prev/Next (see CSS). */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          onClick={() => navigate('/food')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 sm:min-h-0"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i>
          <span className="text-sm sm:text-base">{t('Back to Food & Restaurants', '返回美食与餐厅', 'グルメ・レストランへ戻る')}</span>
        </button>

        {/* Desktop only: existing prev/next pills (unchanged) */}
        <div className="restaurant-nav-desktop flex items-center gap-2">
          {prevId ? (
            <Link
              to={`/food/${prevId}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-pink-200 text-pink-700 font-semibold shadow-sm hover:bg-pink-50 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              title={t('Previous restaurant', '上一家餐厅', '前のレストラン')}
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
              to={`/food/${nextId}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 text-purple-700 font-semibold shadow-sm hover:bg-purple-50 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              title={t('Next restaurant', '下一家餐厅', '次のレストラン')}
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

        {/* Mobile only: clear Prev / Next labeled pills (styled in RestaurantDetailPage.css) */}
        <div className="restaurant-nav-mobile" aria-label={t('Previous and next restaurant', '上一家 / 下一家餐厅', '前の店・次の店')}>
          {prevId ? (
            <Link to={`/food/${prevId}`} className="restaurant-nav-mobile__btn" title={t('Previous restaurant', '上一家餐厅', '前のレストラン')}>
              <span className="restaurant-nav-mobile__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span>{t('Prev', '上一家', '前へ')}</span>
            </Link>
          ) : (
            <span className="restaurant-nav-mobile__btn restaurant-nav-mobile__btn--disabled" aria-disabled="true">
              <span className="restaurant-nav-mobile__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span>{t('Prev', '上一家', '前へ')}</span>
            </span>
          )}
          {nextId ? (
            <Link to={`/food/${nextId}`} className="restaurant-nav-mobile__btn" title={t('Next restaurant', '下一家餐厅', '次のレストラン')}>
              <span>{t('Next', '下一家', '次へ')}</span>
              <span className="restaurant-nav-mobile__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </Link>
          ) : (
            <span className="restaurant-nav-mobile__btn restaurant-nav-mobile__btn--disabled" aria-disabled="true">
              <span>{t('Next', '下一家', '次へ')}</span>
              <span className="restaurant-nav-mobile__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </span>
          )}
        </div>
      </div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  )
}

export default RestaurantDetailPage
