import React, { useState, useEffect } from 'react'

const fallingStars = [
  { x: '88%', y: '2%', delay: '0s', duration: '7.2s', length: '76px' },
  { x: '68%', y: '-8%', delay: '1.4s', duration: '8s', length: '92px' },
  { x: '96%', y: '34%', delay: '2.7s', duration: '6.6s', length: '64px' },
  { x: '44%', y: '-4%', delay: '4.1s', duration: '8.8s', length: '86px' },
  { x: '78%', y: '52%', delay: '5.8s', duration: '7.6s', length: '70px' }
]

export default function Header({ name, resumeUrl }) {
  const [age, setAge] = useState(0)
  const firstName = (name || '').split(' ')[0] || ''

  useEffect(() => {
    function calculateAge() {
      const birthDate = new Date('2003-07-15T11:48:00+05:30')
      const now = new Date()
      const diffMs = now - birthDate
      const ageYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
      setAge(ageYears)
    }

    calculateAge()
    const interval = setInterval(calculateAge, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="site-header" aria-labelledby="main-heading">
      <div className="starfield" aria-hidden="true">
        {fallingStars.map((star, index) => (
          <span
            key={index}
            className="shooting-star"
            style={{
              '--star-x': star.x,
              '--star-y': star.y,
              '--star-delay': star.delay,
              '--star-duration': star.duration,
              '--star-length': star.length
            }}
          />
        ))}
      </div>

      <div className="header-inner">
        <div className="header-copy">
          <h1 id="main-heading" className="heading-xl lowercase">{name}</h1>
          <p className="greeting">hi, {firstName.toLowerCase()} here</p>
          <p className="muted">
            been here for <span className="age-timer">{age.toFixed(9)}</span> years
          </p>
        </div>

        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-resume-btn"
            aria-label="Open Aaroh Bhardwaj resume PDF"
          >
            <span>resume</span>
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
              <path
                d="M5.5 3.5h5.25l3.75 3.75v9.25a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M10.75 3.75v3.5h3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7.25 11.25h5.5M7.25 14h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        )}
      </div>
    </header>
  )
}
