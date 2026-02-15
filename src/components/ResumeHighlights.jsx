import React from 'react'

export default function ResumeHighlights({ items = [] }) {
  if (!items.length) return null

  return (
    <section id="highlights" className="section" aria-labelledby="highlights-heading">
      <h2 id="highlights-heading" className="heading-lg lowercase">highlights from resume</h2>
      <div className="highlights-grid">
        {items.map((item, index) => (
          <article key={index} className="highlight-card">
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-text">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
