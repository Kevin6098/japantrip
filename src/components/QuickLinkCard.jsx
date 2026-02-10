import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinkCard = ({
  to,
  emoji,
  title,
  description,
  badge,
}) => {
  return (
    <Link
      to={to}
      className="dashboard-card glass-card group cursor-pointer hover:border-pink-300 min-h-[160px] flex flex-col"
    >
      <div className="card-icon">
        <span className="card-icon-symbol" aria-hidden="true">{emoji}</span>
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
