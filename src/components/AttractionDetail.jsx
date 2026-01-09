import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const AttractionDetail = ({ attraction }) => {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!attraction) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % attraction.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + attraction.images.length) % attraction.images.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Auto-advance carousel
  useEffect(() => {
    if (attraction.images.length > 1) {
      const interval = setInterval(nextImage, 5000)
      return () => clearInterval(interval)
    }
  }, [attraction.images.length])

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
      <div className="mb-8 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            {attraction.images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img}
                  alt={`${t(attraction.title.en, attraction.title.zh)} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {attraction.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Indicators */}
          {attraction.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {attraction.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <article className="animate-fade-in">
        <div className="mb-6">
          <h1 className="font-header text-3xl sm:text-4xl font-black text-slate-800 mb-3">
            {t(attraction.title.en, attraction.title.zh)}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="flex items-center">
              <i className="fa-solid fa-location-dot mr-2 text-indigo-500"></i>
              {t(attraction.location.en, attraction.location.zh)}
            </span>
            <span className="flex items-center">
              <i className="fa-solid fa-yen-sign mr-2 text-emerald-500"></i>
              {attraction.price}
            </span>
            {attraction.hours && (
              <span className="flex items-center">
                <i className="fa-solid fa-clock mr-2 text-blue-500"></i>
                {t(attraction.hours.en, attraction.hours.zh)}
              </span>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
          <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
            <i className="fa-solid fa-info-circle mr-2"></i>
            {t('About', '关于')}
          </h2>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>{t(attraction.about.en, attraction.about.zh)}</p>
          </div>
        </div>

        {/* Highlights Section */}
        {attraction.highlights && attraction.highlights.length > 0 && (
          <div className={`glass-card border-l-4 ${locationColor.split(' ')[0]} rounded-2xl p-6 mb-8`}>
            <h2 className={`font-header text-2xl font-bold mb-4 flex items-center ${locationColor.split(' ')[1]}`}>
              <i className="fa-solid fa-star mr-2"></i>
              {t('Highlights', '亮点')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {attraction.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-check-circle text-pink-500 mr-3 mt-1"></i>
                  <span>{t(highlight.en, highlight.zh)}</span>
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
              {t('Travel Tips', '旅行提示')}
            </h2>
            <ul className="space-y-3 text-slate-700">
              {attraction.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-circle-info text-blue-500 mr-3 mt-1 text-xs"></i>
                  <span>{t(tip.en, tip.zh)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  )
}

export default AttractionDetail
