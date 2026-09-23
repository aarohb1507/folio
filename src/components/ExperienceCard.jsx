import React from 'react'

export default function ExperienceCard({ item }) {
  return (
    <li className="experience-card">
      <div className="experience-stamp" aria-hidden="true">{item.logo}</div>
      <article className="experience-content">
        <header className="experience-header">
          <div>
            <p className="experience-role">{item.role}</p>
            {item.url ? (
              <a className="experience-company" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.company} <span aria-hidden="true">↗</span>
              </a>
            ) : <h3 className="experience-company">{item.company}</h3>}
            <p className="experience-type">{item.type}</p>
          </div>
          <time className="experience-dates">{item.dates}</time>
        </header>

        {item.initiative && (
          <div className="initiative">
            <p className="initiative-label">{item.initiative.label}</p>
            <p><strong>{item.initiative.name}</strong> — {item.initiative.description}</p>
          </div>
        )}

        {item.highlights ? (
          <ul className="experience-highlights">
            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        ) : <p className="experience-description">{item.description}</p>}
      </article>
    </li>
  )
}
