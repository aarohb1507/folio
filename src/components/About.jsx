import React from 'react'

export default function About({ about }) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="section-label"><span>01</span> about</div>
      <div className="about-layout">
        <h2 id="about-heading" className="section-title">the short version.</h2>
        <div className="about-body">
          <p className="about-lead">{about?.tldr}</p>
          {about?.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {about?.moreLink && <a className="text-link" href={about.moreLink}>more of what i think <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </section>
  )
}
