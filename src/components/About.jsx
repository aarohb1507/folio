import React from 'react'

export default function About({ about, contact }){
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="heading-lg lowercase">about</h2>
      <div className="about-contact">
        {contact?.location && <span className="contact-chip">{contact.location}</span>}
        {contact?.email && (
          <a href={`mailto:${contact.email}`} className="contact-chip">
            {contact.email}
          </a>
        )}
        {contact?.phone && <span className="contact-chip">{contact.phone}</span>}
        {contact?.website && (
          <a href={contact.website} target="_blank" rel="noopener noreferrer" className="contact-chip">
            website
          </a>
        )}
      </div>
      <div className="about-body">
        <p><strong>tldr;</strong> {about?.tldr}</p>
        {about?.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
