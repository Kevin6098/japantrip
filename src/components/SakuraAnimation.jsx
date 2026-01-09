import React, { useEffect, useRef } from 'react'

const SakuraAnimation = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const petalCount = 15

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div')
      petal.className = 'petal'
      petal.style.left = `${Math.random() * 100}%`
      petal.style.animationDuration = `${Math.random() * 5 + 5}s`
      petal.style.animationDelay = `${Math.random() * 5}s`
      petal.style.opacity = Math.random() * 0.5 + 0.3
      const size = Math.random() * 10 + 10
      petal.style.width = `${size}px`
      petal.style.height = `${size}px`
      container.appendChild(petal)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
    />
  )
}

export default SakuraAnimation
