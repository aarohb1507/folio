import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function Experience({ items = [] }) {
  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      <div className="section-heading">
        <div className="section-label"><span>02</span> experience</div>
        <div>
          <h2 id="exp-heading" className="section-title">engineering roles.</h2>
          <p className="section-intro">internship work shaped around backend systems, production data, and measurable performance wins.</p>
        </div>
      </div>
      <ol className="experience-list">
        {items.map((item) => <ExperienceCard key={`${item.company}-${item.dates}`} item={item} />)}
      </ol>
    </section>
  )
}
