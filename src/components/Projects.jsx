import React from 'react'

export default function Projects({ items = [] }){
  return (
    <section className="section" aria-labelledby="proj-heading">
      <h2 id="proj-heading" className="heading-lg lowercase">projects</h2>
      <div className="cards-list">
        {items.map((it, idx) => (
          <div key={idx} className="card project-card">
            <div className="logo-box">{it.logo}</div>
            <div className="card-right">
              <div className="card-title">{it.name}</div>
              <div className="card-meta">{it.dates}</div>
              <div className="card-tech">{it.tech}</div>
              <div className="card-desc">{it.description}</div>
              <a href={it.url} target="_blank" rel="noopener noreferrer" className="repo-btn">
                view repo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}