import React from 'react'

export default function Projects({ items = [] }) {
  return (
    <section className="section" aria-labelledby="proj-heading">
      <h2 id="proj-heading" className="heading-lg lowercase">projects</h2>

      <div className="projects-list">
        {items.map((project, idx) => (
          <article
            key={project.name + idx}
            className="project-card-horizontal"
          >
            {/* Project Image - Left */}
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="project-img"
              />
            </div>

            {/* Project Content - Right */}
            <div className="project-content-horizontal">
              <div className="project-header-horizontal">
                <h3 className="project-title-horizontal">{project.name}</h3>
                <span className="project-date-horizontal">{project.dates}</span>
              </div>

              <p className="project-description-horizontal">{project.description}</p>

              <div className="project-tech-horizontal">{project.tech}</div>

              <div className="project-actions-horizontal">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Demo
                  </a>
                )}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}