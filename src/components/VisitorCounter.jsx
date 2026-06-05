import React, { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [showStats, setShowStats] = useState(false)
  const [stats, setStats] = useState([])

  useEffect(() => {
    const storageKey = 'portfolio_visitor_data'
    const data = JSON.parse(localStorage.getItem(storageKey)) || {
      count: 0,
      history: []
    }

    const newCount = data.count + 1
    const today = new Date().toISOString().split('T')[0]

    let history = data.history
    const todayEntry = history.find(entry => entry.date === today)

    if (todayEntry) {
      todayEntry.count = newCount
    } else {
      history.push({ date: today, count: newCount })
    }

    const updatedData = {
      count: newCount,
      history: history
    }

    localStorage.setItem(storageKey, JSON.stringify(updatedData))
    setVisitorCount(newCount)
    setStats(history)
  }, [])

  const toggleStats = () => {
    setShowStats(!showStats)
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-text">
        you are the <span className="visitor-number">{visitorCount}</span> visitor
      </div>
      <button className="stats-toggle" onClick={toggleStats} title="View visitor history">
        {showStats ? 'hide' : 'view'} history
      </button>

      {showStats && (
        <div className="visitor-stats">
          <div className="stats-header">visitor history</div>
          <div className="stats-list">
            {stats.map((entry, idx) => (
              <div key={idx} className="stat-entry">
                <span className="stat-date">{entry.date}</span>
                <span className="stat-count">{entry.count} visitor{entry.count !== 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
