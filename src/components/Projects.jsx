import React from 'react'

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Projects({ items = [] }) {
  return (
    <section id="projects" className="section" aria-labelledby="proj-heading">
      <div className="section-heading">
        <div className="section-label"><span>03</span> selected work</div>
        <div>
          <h2 id="proj-heading" className="section-title">personal projects.</h2>
          <p className="section-intro">experiments and systems i&apos;ve built independently.</p>
        </div>
      </div>

      <div className="projects-grid">
        {items.map((project) => (
          <article key={project.name} className="project-card">
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt="" loading="lazy" className="project-img" />
              </div>
            )}
            <div className="project-content">
              <div className="project-meta"><span>personal build</span><time>{project.dates}</time></div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
              {(project.liveUrl || project.url) && (
                <div className="project-actions">
                  {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">view demo <Arrow /></a>}
                  {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">source <Arrow /></a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
