import React from 'react'

export default function Education({ items = [] }) {
  return (
    <section id="education" className="section" aria-labelledby="edu-heading">
      <div className="section-heading compact-heading">
        <div className="section-label"><span>04</span> education</div>
        <h2 id="edu-heading" className="section-title">the foundations.</h2>
      </div>
      <div className="education-list">
        {items.map((item) => (
          <article key={item.institution} className="education-item">
            <div className="education-mark" aria-hidden="true">{item.logo}</div>
            <div>
              <h3>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.institution} <span aria-hidden="true">↗</span></a> : item.institution}</h3>
              <p>{item.field}</p>
            </div>
            <time>{item.years}</time>
          </article>
        ))}
      </div>
    </section>
  )
}
