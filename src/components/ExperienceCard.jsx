import React from 'react'

function Company({ item, className = 'experience-company' }) {
  return item.url ? (
    <a className={className} href={item.url} target="_blank" rel="noopener noreferrer">
      {item.company} <span aria-hidden="true">↗</span>
    </a>
  ) : <h3 className={className}>{item.company}</h3>
}

function RoleDetails({ item }) {
  if (item.groups) {
    return item.groups.map((group, index) => (
      <div className="experience-group" key={group.initiative?.name ?? index}><RoleDetails item={group} /></div>
    ))
  }

  return (
    <>
      {item.initiative && (
        <div className="initiative">
          <p className="initiative-label">{item.initiative.label}</p>
          <p><strong>{item.initiative.name}</strong> — {item.initiative.description}</p>
          {item.initiative.link && <a className="initiative-link" href={item.initiative.link}>read the case study <span aria-hidden="true">→</span></a>}
        </div>
      )}

      {item.highlights ? (
        <ul className="experience-highlights">
          {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      ) : item.description && <p className="experience-description">{item.description}</p>}
    </>
  )
}

export default function ExperienceCard({ item }) {
  const hasLink = (entry) => entry.initiative?.link || entry.groups?.some(hasLink)
  const featured = hasLink(item) || item.roles?.some(hasLink)

  return (
    <li className={`experience-card${featured ? ' experience-card-featured' : ''}`}>
      <div className="experience-stamp" aria-hidden="true">{item.logo}</div>
      <article className="experience-content">
        {item.roles ? (
          <>
            <header className="experience-header">
              <div><Company item={item} className="experience-company experience-company-lead" /></div>
              <time className="experience-dates">{item.dates}</time>
            </header>
            <ol className="experience-roles">
              {item.roles.map((role) => (
                <li className="experience-role-item" key={`${role.role}-${role.dates}`}>
                  <header className="experience-header">
                    <div>
                      <p className="experience-role">{role.role}</p>
                      {role.type && <p className="experience-type">{role.type}</p>}
                    </div>
                    <time className="experience-dates">{role.dates}</time>
                  </header>
                  <RoleDetails item={role} />
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <header className="experience-header">
              <div>
                <p className="experience-role">{item.role}</p>
                <Company item={item} />
                <p className="experience-type">{item.type}</p>
              </div>
              <time className="experience-dates">{item.dates}</time>
            </header>
            <RoleDetails item={item} />
          </>
        )}
      </article>
    </li>
  )
}
