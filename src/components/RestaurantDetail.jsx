import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const RestaurantDetail = ({ restaurant }) => {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  if (!restaurant) return null

  // Ensure images array exists - add default fallback if empty
  const defaultImage = 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
  const images = restaurant.images && restaurant.images.length > 0 
    ? restaurant.images 
    : [defaultImage]

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

  const openLightbox = (index) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextLightboxImage = (e) => {
    e.stopPropagation()
    setLightboxImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = (e) => {
    e.stopPropagation()
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    if (images.length > 1 && !isLightboxOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [images.length, isLightboxOpen])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (isLightboxOpen) {
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length)
        } else if (e.key === 'ArrowRight') {
          setLightboxImageIndex((prev) => (prev + 1) % images.length)
        } else if (e.key === 'Escape') {
          closeLightbox()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen, images.length])

  const colorClasses = {
    tokyo: 'border-indigo-500 text-indigo-700 bg-indigo-50',
    kyoto: 'border-green-600 text-green-700 bg-green-50',
    osaka: 'border-orange-500 text-orange-600 bg-orange-50',
    kobe: 'border-red-500 text-red-600 bg-red-50',
    uji: 'border-teal-600 text-teal-700 bg-teal-50',
  }

  const locationColor = colorClasses[restaurant.city] || colorClasses.tokyo

  return (
    <div>
      {/* Image Carousel */}
      {images.length > 0 && (
        <div className="mb-8 relative">
          <div className="relative overflow-hidden cursor-pointer group" onClick={() => openLightbox(currentImageIndex)}>
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
                    alt={`${t(restaurant.title.en, restaurant.title.zh)} - Image ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </>
            )}

            {/* Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToImage(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {isLightboxOpen && images.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-200 z-60"
            aria-label="Close"
          >
            <i className="fa-solid fa-times text-2xl"></i>
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={images[lightboxImageIndex]}
              alt={`${t(restaurant.title.en, restaurant.title.zh)} - Image ${lightboxImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-60"
                  aria-label="Previous image"
                >
                  <i className="fa-solid fa-chevron-left text-2xl"></i>
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-60"
                  aria-label="Next image"
                >
                  <i className="fa-solid fa-chevron-right text-2xl"></i>
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-60">
                {lightboxImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <article className="animate-fade-in">
        <div className="mb-6">
          <h1 className="font-header text-3xl sm:text-4xl font-black text-slate-800 mb-3">
            {t(restaurant.title.en, restaurant.title.zh)}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className={`flex items-center px-3 py-1 rounded-full border ${locationColor}`}>
              <i className="fa-solid fa-location-dot mr-2"></i>
              {t(restaurant.location.en, restaurant.location.zh)}
            </span>
            {restaurant.price && (
              <span className="flex items-center text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <i className="fa-solid fa-yen-sign mr-2"></i>
                {restaurant.price}
              </span>
            )}
            {restaurant.hours && (
              <span className="flex items-center text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <i className="fa-solid fa-clock mr-2"></i>
                {t(restaurant.hours.en, restaurant.hours.zh)}
              </span>
            )}
          </div>
        </div>

        {/* Schedule */}
        {restaurant.schedule && (
          <div className={`glass-card rounded-2xl p-6 mb-8 border ${locationColor}`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor}`}>
              <i className="fa-solid fa-calendar-day mr-2"></i>
              {t('Schedule', '行程安排', 'スケジュール')}
            </h2>
            <div className="space-y-3 text-slate-700">
              {Array.isArray(restaurant.schedule) ? (
                restaurant.schedule.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <i className="fa-solid fa-calendar-day text-blue-600"></i>
                    <div>
                      <span className="font-semibold text-blue-700">
                        {t(s.date.en, s.date.zh, s.date.ja)} {s.time}
                      </span>
                      <span className="text-blue-600 ml-2">- {t(s.meal.en, s.meal.zh, s.meal.ja)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <i className="fa-solid fa-calendar-day text-blue-600"></i>
                  <div>
                    <span className="font-semibold text-blue-700">
                      {t(restaurant.schedule.date.en, restaurant.schedule.date.zh, restaurant.schedule.date.ja)} {restaurant.schedule.time}
                    </span>
                    <span className="text-blue-600 ml-2">- {t(restaurant.schedule.meal.en, restaurant.schedule.meal.zh, restaurant.schedule.meal.ja)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* About */}
        {restaurant.about && (
          <div className={`glass-card rounded-2xl p-6 mb-8 border ${locationColor}`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor}`}>
              <i className="fa-solid fa-info-circle mr-2"></i>
              {t('About', '关于', '概要')}
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {t(restaurant.about.en, restaurant.about.zh, restaurant.about.ja)}
            </p>
          </div>
        )}

        {/* Highlights */}
        {restaurant.highlights && restaurant.highlights.length > 0 && (
          <div className={`glass-card rounded-2xl p-6 mb-8 border ${locationColor}`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor}`}>
              <i className="fa-solid fa-star mr-2"></i>
              {t('Highlights', '亮点', '見どころ')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {restaurant.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-check-circle text-pink-500 mr-3 mt-1"></i>
                  <span>{t(highlight.en, highlight.zh, highlight.ja)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tips */}
        {restaurant.tips && restaurant.tips.length > 0 && (
          <div className={`glass-card rounded-2xl p-6 mb-8 border ${locationColor}`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor}`}>
              <i className="fa-solid fa-lightbulb mr-2"></i>
              {t('Tips', '提示', 'ヒント')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {restaurant.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-circle-info text-blue-500 mr-3 mt-1"></i>
                  <span>{t(tip.en, tip.zh, tip.ja)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Location & Access */}
        <div className={`glass-card rounded-2xl p-6 border ${locationColor}`}>
          <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor}`}>
            <i className="fa-solid fa-map-location-dot mr-2"></i>
            {t('Location & Access', '位置与交通', '場所・アクセス')}
          </h2>
          {restaurant.address && (
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>{t('Address', '地址', '住所')}:</strong> {t(restaurant.address.en, restaurant.address.zh, restaurant.address.ja)}
            </p>
          )}
          {restaurant.station && (
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>{t('Nearest Station', '最近车站', '最寄り駅')}:</strong> {t(restaurant.station.en, restaurant.station.zh, restaurant.station.ja)}
            </p>
          )}
          {restaurant.access && (
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>{t('Access', '交通', 'アクセス')}:</strong> {t(restaurant.access.en, restaurant.access.zh, restaurant.access.ja)}
            </p>
          )}
          {restaurant.mapUrl && (
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center mt-4"
            >
              <i className="fa-solid fa-map-location-dot mr-2"></i>
              {t('Open in Google Maps', '在Google地图中打开', 'Googleマップで開く')}
            </a>
          )}
        </div>
      </article>
    </div>
  )
}

export default RestaurantDetail
