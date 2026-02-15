import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function Experience({ items = [] }){
  return (
    <section id="experience" className="section" aria-labelledby="exp-heading">
      <h2 id="exp-heading" className="heading-lg lowercase">cool places i worked at</h2>
      <div className="cards-list">
        {items.map((it, idx) => (
          <ExperienceCard key={idx} item={it} />
        ))}
      </div>
    </section>
  )
}
