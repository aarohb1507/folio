import React from 'react'

export default function About({ about }){
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="heading-lg lowercase">about</h2>
      <div className="about-body">
        <p><strong>tldr;</strong> {about?.tldr}</p>
        {about?.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
