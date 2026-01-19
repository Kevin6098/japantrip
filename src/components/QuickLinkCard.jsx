import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinkCard = ({
  to,
  icon,
  title,
  description,
  badge,
  bgColor = 'bg-purple-100',
  iconColor = 'text-purple-500',
}) => {
  return (
    <Link
      to={to}
      className="glass-card group cursor-pointer hover:border-pink-300 min-h-[160px] flex flex-col"
    >
      <div className={`p-4 ${bgColor} rounded-xl mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300 w-fit`}>
        <i className={`fa-solid ${icon} ${iconColor} text-3xl`}></i>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-header text-xl font-bold text-slate-800">
          {title}
        </h3>
        {badge ? (
          <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-slate-600 flex-grow">
        {description}
      </p>
    </Link>
  )
}

export default QuickLinkCard
