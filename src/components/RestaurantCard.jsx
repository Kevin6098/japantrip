import React from 'react'

const RestaurantCard = ({ 
  title, 
  description, 
  location, 
  price, 
  image, 
  locationColor = 'indigo',
  onClick 
}) => {
  const colorClasses = {
    indigo: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      border: 'hover:border-indigo-300',
      shadow: 'hover:shadow-indigo-200/50'
    },
    green: {
      badge: 'bg-green-50 text-green-700 border-green-200',
      border: 'hover:border-green-300',
      shadow: 'hover:shadow-green-200/50'
    },
    teal: {
      badge: 'bg-teal-50 text-teal-700 border-teal-200',
      border: 'hover:border-teal-300',
      shadow: 'hover:shadow-teal-200/50'
    },
    orange: {
      badge: 'bg-orange-50 text-orange-700 border-orange-200',
      border: 'hover:border-orange-300',
      shadow: 'hover:shadow-orange-200/50'
    },
    red: {
      badge: 'bg-red-50 text-red-700 border-red-200',
      border: 'hover:border-red-300',
      shadow: 'hover:shadow-red-200/50'
    }
  }

  const colors = colorClasses[locationColor] || colorClasses.indigo

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} border border-slate-200 ${colors.border} hover:shadow-xl hover:-translate-y-1 ${colors.shadow} group flex flex-col h-full`}
    >
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img 
          src={image || 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80'
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <i className="fa-solid fa-arrow-right text-white text-2xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></i>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wide mb-2 ${colors.badge}`}>
          {location}
        </span>
        <h3 className="font-header text-lg font-bold text-slate-800 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 mb-3 flex-grow">
          {description}
        </p>
        {price && (
          <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mt-auto">
            {price}
          </span>
        )}
      </div>
    </div>
  )
}

export default RestaurantCard
