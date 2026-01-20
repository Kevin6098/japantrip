import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

const STORAGE_KEY = 'language'
const SUPPORTED_LANGUAGES = ['en', 'zh', 'ja']

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'en'
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = () => {
    // Backwards-compatible: cycle EN -> 中文 -> 日本語 -> EN ...
    setLanguage(prev => {
      const idx = SUPPORTED_LANGUAGES.indexOf(prev)
      const nextIdx = idx === -1 ? 0 : (idx + 1) % SUPPORTED_LANGUAGES.length
      return SUPPORTED_LANGUAGES[nextIdx]
    })
  }

  // Translation helper:
  // - existing calls: t(en, zh) continue to work
  // - new calls:      t(en, zh, ja)
  // - missing language falls back to English, then Chinese.
  const t = (en, zh, ja) => {
    if (language === 'en') return en
    if (language === 'zh') return zh ?? en
    if (language === 'ja') return ja ?? en ?? zh
    return en ?? zh ?? ja
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
