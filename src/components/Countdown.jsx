import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Countdown = () => {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-03-18T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-container w-full max-w-2xl mx-auto">
      <div className="text-sm md:text-base mb-4 font-bold text-center">
        ⏰ {t('Days Until Departure', '距离出发还有')}
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {[
          { value: timeLeft.days, label: t('Days', '天') },
          { value: timeLeft.hours, label: t('Hours', '小时') },
          { value: timeLeft.minutes, label: t('Minutes', '分钟') },
          { value: timeLeft.seconds, label: t('Seconds', '秒') },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-black font-header drop-shadow-md">
              {item.value}
            </div>
            <div className="text-xs md:text-sm opacity-90 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
