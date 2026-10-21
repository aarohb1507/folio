import React, { useEffect, useMemo, useState } from 'react'

const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4/'
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const LEVELS = [0, 1, 2, 3, 4]

function parseDay(date) {
  return new Date(`${date}T00:00:00Z`)
}

function formatDay(date) {
  return parseDay(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

function buildWeeks(contributions) {
  if (!contributions.length) return []

  const leading = parseDay(contributions[0].date).getUTCDay()
  const days = [...Array(leading).fill(null), ...contributions]
  while (days.length % 7) days.push(null)

  const weeks = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }
  return weeks
}

function monthLabels(weeks) {
  const labels = []
  let lastMonth = null

  weeks.forEach((week, index) => {
    const day = week.find(Boolean)
    if (!day) return

    const month = parseDay(day.date).getUTCMonth()
    if (month !== lastMonth) {
      labels.push({ index, name: MONTHS[month] })
      lastMonth = month
    }
  })

  return labels
}

export default function ContributionHeatmap({ username, profileUrl }) {
  const [activity, setActivity] = useState({ status: 'loading', contributions: [], total: 0 })

  useEffect(() => {
    const controller = new AbortController()

    fetch(`${CONTRIBUTIONS_API}${username}?y=last`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`request failed: ${response.status}`)
        return response.json()
      })
      .then((data) => setActivity({
        status: 'ready',
        contributions: data.contributions,
        total: data.total?.lastYear ?? 0
      }))
      .catch((error) => {
        if (error.name !== 'AbortError') setActivity({ status: 'error', contributions: [], total: 0 })
      })

    return () => controller.abort()
  }, [username])

  const weeks = useMemo(() => buildWeeks(activity.contributions), [activity.contributions])
  const months = useMemo(() => monthLabels(weeks), [weeks])

  const summary = {
    loading: 'loading activity…',
    error: "couldn't load activity right now.",
    ready: `${activity.total.toLocaleString('en-US')} contributions in the last year`
  }[activity.status]

  const cells = weeks.flat().map((day, index) => day
    ? (
      <span
        key={day.date}
        className={`heatmap-cell level-${day.level}`}
        title={`${day.count} ${day.count === 1 ? 'contribution' : 'contributions'} on ${formatDay(day.date)}`}
      />
    )
    : <span key={`empty-${index}`} className="heatmap-cell is-empty" />
  )

  return (
    <div className="heatmap">
      <div className="section-label">activity</div>
      <div className="heatmap-main">
        <p className="heatmap-summary">{summary}</p>

        {activity.status === 'ready' && (
          <div className="heatmap-scroll">
            <div className="heatmap-body" role="img" aria-label="github contribution calendar" style={{ '--weeks': weeks.length }}>
              <div className="heatmap-months" aria-hidden="true">
                {months.map((month) => <span key={month.index} style={{ gridColumn: month.index + 1 }}>{month.name}</span>)}
              </div>
              <div className="heatmap-grid">{cells}</div>
            </div>
          </div>
        )}

        <div className="heatmap-footer">
          <a className="text-link" href={profileUrl} target="_blank" rel="noopener noreferrer">view on github <span aria-hidden="true">↗</span></a>
          <div className="heatmap-legend" aria-hidden="true">
            <span>less</span>
            {LEVELS.map((level) => <span key={level} className={`heatmap-cell level-${level}`} />)}
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  )
}
