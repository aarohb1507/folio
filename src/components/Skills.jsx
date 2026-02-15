import React from 'react'

export default function Skills({ items = [] }){
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="heading-lg lowercase">skills</h2>
      <div className="skills-list">
        {items.map((s, i) => (
          <div key={i} className="skill-item">{s}</div>
        ))}
      </div>
    </section>
  )
}
