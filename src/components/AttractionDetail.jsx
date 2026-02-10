import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import CarouselNav from './CarouselNav'

const AttractionDetail = ({ attraction }) => {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!attraction) return null

  // Ensure images array exists, default to single image from image property
  const images = attraction.images || (attraction.image ? [attraction.image] : [])

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Auto-advance carousel
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  const colorClasses = {
    tokyo: 'border-indigo-500 text-indigo-700 bg-indigo-50',
    kyoto: 'border-green-600 text-green-700 bg-green-50',
    nara: 'border-teal-600 text-teal-700 bg-teal-50',
    osaka: 'border-orange-500 text-orange-600 bg-orange-50',
    kobe: 'border-red-500 text-red-600 bg-red-50',
  }

  const locationColor = colorClasses[attraction.city] || colorClasses.tokyo

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto pb-24">
      {/* Image Carousel */}
      {images.length > 0 && (
      <div className="mb-8 relative">
        <div className="carousel-container relative rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img}
                  alt={`${t(attraction.title.en, attraction.title.zh, attraction.title.ja)} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80'
                  }}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <CarouselNav onPrev={prevImage} onNext={nextImage} />
          )}

          {/* Indicators - theme-friendly dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'w-8 bg-violet-400 border-2 border-violet-500 shadow'
                      : 'w-2.5 bg-white/90 hover:bg-white border-2 border-violet-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      )}

      {/* Content */}
      <article className="animate-fade-in">
        <div className="mb-6">
          <h1 className="font-header text-3xl sm:text-4xl font-black text-slate-800 mb-3">
            {attraction.title?.en ? t(attraction.title.en, attraction.title.zh, attraction.title.ja) : attraction.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            {attraction.location && (
              <span className="flex items-center">
                <i className="fa-solid fa-location-dot mr-2 text-indigo-500"></i>
                {attraction.location.en ? t(attraction.location.en, attraction.location.zh, attraction.location.ja) : attraction.location}
              </span>
            )}
            {attraction.price && (
              <span className="flex items-center">
                <i className="fa-solid fa-yen-sign mr-2 text-emerald-500"></i>
                {typeof attraction.price === 'object' && attraction.price.en
                  ? t(attraction.price.en, attraction.price.zh, attraction.price.ja)
                  : attraction.price === 'Free'
                    ? t('Free', '免费', '無料')
                    : attraction.price}
              </span>
            )}
            {attraction.hours && (
              <span className="flex items-center">
                <i className="fa-solid fa-clock mr-2 text-blue-500"></i>
                {attraction.hours.en ? t(attraction.hours.en, attraction.hours.zh, attraction.hours.ja) : attraction.hours}
              </span>
            )}
          </div>
        </div>

        {/* About Section */}
        {attraction.about && (
        <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
          <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
            <i className="fa-solid fa-info-circle mr-2"></i>
            {t('About', '关于', '概要')}
          </h2>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>{attraction.about.en ? t(attraction.about.en, attraction.about.zh, attraction.about.ja) : attraction.about}</p>
          </div>
        </div>
        )}

        {/* Highlights Section */}
        {attraction.highlights && attraction.highlights.length > 0 && (
          <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
              <i className="fa-solid fa-star mr-2"></i>
              {t('Highlights', '亮点', '見どころ')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {attraction.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-check-circle text-pink-500 mr-3 mt-1"></i>
                  <span>{t(highlight.en, highlight.zh, highlight.ja)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Travel Tips Section */}
        {attraction.tips && attraction.tips.length > 0 && (
          <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
              <i className="fa-solid fa-lightbulb mr-2"></i>
              {t('Travel Tips', '旅行提示', '旅行のヒント')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {attraction.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-circle-info text-blue-500 mr-3 mt-1 text-xs"></i>
                  <span>{t(tip.en, tip.zh, tip.ja)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Visit Guide & Schedule Section (USJ only) */}
        {attraction.visitGuide && (
          <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
              <i className="fa-solid fa-calendar-days mr-2"></i>
              {t('Visit Guide & Schedule', '参观指南与行程', 'ガイド＆スケジュール')}
            </h2>

            {/* Arrival Plan */}
            {attraction.visitGuide.arrivalPlan && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-clock mr-2 text-orange-500"></i>
                  {t(attraction.visitGuide.arrivalPlan.title.en, attraction.visitGuide.arrivalPlan.title.zh, attraction.visitGuide.arrivalPlan.title.ja)}
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-3">
                  <li>• {t(attraction.visitGuide.arrivalPlan.time.en, attraction.visitGuide.arrivalPlan.time.zh, attraction.visitGuide.arrivalPlan.time.ja)}</li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                  <p className="text-sm text-slate-700 font-semibold mb-2">{t('Why this matters:', '为什么这很重要：', 'ポイント：')}</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {attraction.visitGuide.arrivalPlan.whyMatters?.map((item, index) => (
                      <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tickets Strategy */}
            {attraction.visitGuide.ticketsStrategy && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-ticket mr-2 text-orange-500"></i>
                  {t('Tickets Strategy', '门票策略', 'チケット戦略')}
                </h3>
                <div className="mb-3">
                  <p className="font-semibold text-slate-800 mb-2">{t('Required for everyone:', '每个人都需要：', '全員必須：')}</p>
                  <p className="text-sm text-slate-700">• {t(attraction.visitGuide.ticketsStrategy.required.en, attraction.visitGuide.ticketsStrategy.required.zh, attraction.visitGuide.ticketsStrategy.required.ja)}</p>
                </div>
                {attraction.visitGuide.ticketsStrategy.expressPass && (
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                    <p className="font-semibold text-slate-800 mb-2">{t('Express Pass (not for everyone)', '快速通行证（不是每个人都需要的）', 'エクスプレス・パス（全員向けではありません）')}</p>
                    <p className="text-sm text-slate-700 mb-2">{t('Recommended for:', '推荐给：', 'おすすめ：')}</p>
                    <ul className="space-y-1 text-sm text-slate-700 mb-3">
                      {attraction.visitGuide.ticketsStrategy.expressPass.recommendedFor?.map((item, index) => (
                        <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-700 mb-2">{t('Best Express Pass type (should include):', '最佳快速通行证类型（应包括）：', 'おすすめの内容（含まれるべきもの）：')}</p>
                    <ul className="space-y-1 text-sm text-slate-700 mb-3">
                      {attraction.visitGuide.ticketsStrategy.expressPass.bestType?.map((item, index) => (
                        <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-slate-800">{t('Budget tip:', '省钱提示：', '節約のコツ：')}</p>
                    <p className="text-sm text-slate-700">• {t(attraction.visitGuide.ticketsStrategy.expressPass.budgetTip.en, attraction.visitGuide.ticketsStrategy.expressPass.budgetTip.zh, attraction.visitGuide.ticketsStrategy.expressPass.budgetTip.ja)}</p>
                  </div>
                )}
              </div>
            )}

            {/* Morning Route */}
            {attraction.visitGuide.morningRoute && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-sun mr-2 text-orange-500"></i>
                  {t(attraction.visitGuide.morningRoute.destination.en, attraction.visitGuide.morningRoute.destination.zh, attraction.visitGuide.morningRoute.destination.ja)}
                </h3>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded mb-3">
                  <p className="text-sm text-slate-700 mb-2">{t('Ride priority:', '游乐设施优先顺序：', '優先アトラクション：')}</p>
                  <ol className="space-y-1 text-sm text-slate-700 ml-4 list-decimal">
                    {attraction.visitGuide.morningRoute.ridePriority?.map((item, index) => (
                      <li key={index}>{t(item.en, item.zh, item.ja)}</li>
                    ))}
                  </ol>
                  <p className="text-sm text-slate-700 mt-3 font-semibold">{t('Important:', '重要：', '重要：')}</p>
                  <p className="text-sm text-slate-700">• {t(attraction.visitGuide.morningRoute.important.en, attraction.visitGuide.morningRoute.important.zh, attraction.visitGuide.morningRoute.important.ja)}</p>
                </div>
              </div>
            )}

            {/* Lunch */}
            {attraction.visitGuide.lunch && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-utensils mr-2 text-orange-500"></i>
                  {t(attraction.visitGuide.lunch.destination.en, attraction.visitGuide.lunch.destination.zh, attraction.visitGuide.lunch.destination.ja)}
                </h3>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                  <p className="text-sm text-slate-700 mb-2">{t('Things to do:', '要做的事：', 'やること：')}</p>
                  <ul className="space-y-1 text-sm text-slate-700 mb-3">
                    {attraction.visitGuide.lunch.thingsToDo?.map((item, index) => (
                      <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-slate-800">{t('Lunch:', '午餐：', 'ランチ：')}</p>
                  <p className="text-sm text-slate-700">• {t(attraction.visitGuide.lunch.restaurant.en, attraction.visitGuide.lunch.restaurant.zh, attraction.visitGuide.lunch.restaurant.ja)}</p>
                </div>
              </div>
            )}

            {/* Afternoon Strategy */}
            {attraction.visitGuide.afternoonStrategy && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-sun mr-2 text-orange-500"></i>
                  {t('Afternoon Strategy (13:00–17:30)', '下午策略（13:00–17:30）', '午後の動き（13:00–17:30）')}
                </h3>
                <p className="text-sm text-slate-700 mb-3">{t('Split into 2 flexible groups:', '分成2个灵活的小组：', '2つの柔軟なグループに分ける：')}</p>
                <div className="space-y-3">
                  {attraction.visitGuide.afternoonStrategy.groupA && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="font-bold text-slate-800 mb-2">{t(attraction.visitGuide.afternoonStrategy.groupA.title.en, attraction.visitGuide.afternoonStrategy.groupA.title.zh, attraction.visitGuide.afternoonStrategy.groupA.title.ja)}</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        {attraction.visitGuide.afternoonStrategy.groupA.tasks?.map((item, index) => (
                          <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {attraction.visitGuide.afternoonStrategy.groupB && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                      <p className="font-bold text-slate-800 mb-2">{t(attraction.visitGuide.afternoonStrategy.groupB.title.en, attraction.visitGuide.afternoonStrategy.groupB.title.zh, attraction.visitGuide.afternoonStrategy.groupB.title.ja)}</p>
                      <p className="text-sm text-slate-700 mb-2">{t('Recommended attractions:', '推荐景点：', 'おすすめ：')}</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        {attraction.visitGuide.afternoonStrategy.groupB.attractions?.map((item, index) => (
                          <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {attraction.visitGuide.afternoonStrategy.meetupTip && (
                  <p className="text-sm text-slate-700 mt-3"><strong>{t('Meet-up tip:', '会合提示：', '集合のコツ：')}</strong> {t(attraction.visitGuide.afternoonStrategy.meetupTip.en, attraction.visitGuide.afternoonStrategy.meetupTip.zh, attraction.visitGuide.afternoonStrategy.meetupTip.ja)}</p>
                )}
              </div>
            )}

            {/* Evening Plan */}
            {attraction.visitGuide.eveningPlan && (
              <div className="mb-6 pb-4 border-b border-orange-200">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-moon mr-2 text-orange-500"></i>
                  {t('Evening Plan (After 18:30)', '晚间计划（18:30后）', '夜の予定（18:30以降）')}
                </h3>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                  <p className="text-sm font-semibold text-slate-800 mb-2">{t('Best time of the day:', '一天中最佳时间：', 'おすすめポイント：')}</p>
                  <ul className="space-y-1 text-sm text-slate-700 mb-3">
                    {attraction.visitGuide.eveningPlan.bestTime?.map((item, index) => (
                      <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                    ))}
                  </ul>
                  <p className="font-bold text-slate-800 mb-2">➡️ {t('Return to Super Nintendo World', '返回超级任天堂世界', 'スーパー・ニンテンドー・ワールドに戻る')}</p>
                  <ul className="space-y-1 text-sm text-slate-700 mb-3">
                    {attraction.visitGuide.eveningPlan.returnToNintendo?.map((item, index) => (
                      <li key={index}>• {t(item.en, item.zh, item.ja)}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-slate-800">{t('Dinner:', '晚餐：', '夕食：')}</p>
                  <p className="text-sm text-slate-700">• {t(attraction.visitGuide.eveningPlan.dinner.en, attraction.visitGuide.eveningPlan.dinner.zh, attraction.visitGuide.eveningPlan.dinner.ja)}</p>
                </div>
              </div>
            )}

            {/* Quick Tips */}
            {attraction.visitGuide.quickTips && (
              <div className="mb-6">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                  <i className="fa-solid fa-circle-check mr-2 text-green-500"></i>
                  {t('Quick Tips (Important)', '快速提示（重要）', 'ポイント（重要）')}
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {attraction.visitGuide.quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span>{t(tip.en, tip.zh, tip.ja)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Summary */}
            {attraction.visitGuide.summary && (
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl p-4">
                <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center">
                  <i className="fa-solid fa-bookmark mr-2 text-orange-500"></i>
                  {t('Simple Summary', '简单总结', 'まとめ')}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {t(attraction.visitGuide.summary.en, attraction.visitGuide.summary.zh, attraction.visitGuide.summary.ja)}
                </p>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  )
}

export default AttractionDetail
