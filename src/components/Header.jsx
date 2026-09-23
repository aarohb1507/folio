import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ name, resumeUrl, contact, isDark, toggleTheme }) {
  const firstName = (name || '').split(' ')[0] || ''

  return (
    <header className="site-header" aria-labelledby="main-heading">
      <div className="topbar">
        <a className="wordmark" href="#top" aria-label="Back to top">ab<span>.</span></a>
        <div className="topbar-actions">
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#experience">experience</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </nav>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="hero-grid">
        <div className="header-copy">
          <p className="eyebrow">backend systems / ai engineering</p>
          <h1 id="main-heading" className="heading-xl lowercase">{name}</h1>
          <p className="hero-intro">hi, {firstName.toLowerCase()} here — i design APIs, data pipelines, and ai-backed systems that stay fast when real users show up.</p>
          <div className="hero-links">
            {resumeUrl && (
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                résumé <span aria-hidden="true">↗</span>
              </a>
            )}
            {contact?.email && (
              <a href={`mailto:${contact.email}`} className="text-link">
                email me <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        <aside className="hero-note" aria-label="Current role">
          <p className="eyebrow">currently</p>
          <p className="hero-note-title">ai engineer intern<br />at growify digital</p>
          <p className="hero-note-meta">NestJS / MongoDB / marketing analytics<br />{contact?.location}</p>
        </aside>
      </div>
    </header>
  )
}
