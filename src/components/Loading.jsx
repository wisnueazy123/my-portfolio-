import { useState, useEffect } from 'react'

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15 + 5
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete?.(), 300)
          return 100
        }
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-logo-text">W</span>
          <span className="loading-logo-dot">.</span>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
        </div>
        <p className="loading-text">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  )
}
