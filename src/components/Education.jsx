import React from 'react'

export default function Education({ items = [] }){
  return (
    <section id="education" className="section" aria-labelledby="edu-heading">
      <h2 id="edu-heading" className="heading-lg lowercase">education</h2>
      <div className="cards-list">
        {items.map((it, idx) => (
          <a key={idx} href={it.url} target="_blank" rel="noopener noreferrer" className="card">
            <div className="logo-box">{it.logo}</div>
            <div className="card-right">
              <div className="card-title">{it.institution}</div>
              <div className="card-meta">{it.years}</div>
              <div className="card-role">{it.field}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
