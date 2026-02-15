import React, { useState, useEffect } from 'react'

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
      <h1 id="main-heading" className="heading-xl lowercase">{name}</h1>
      <p className="greeting">hi, {firstName.toLowerCase()} here</p>
      <p className="muted">
        been here for <span className="age-timer">{age.toFixed(9)}</span> years
      </p>
      {resumeUrl && (
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="header-resume-btn">
          resume
        </a>
      )}
    </header>
  )
}
