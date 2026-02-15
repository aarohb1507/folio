import React from 'react'

const sectionLinks = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' }
]

export default function BottomDock({ social = {}, resumeUrl }) {
  return (
    <nav className="bottom-dock" aria-label="quick navigation">
      <div className="dock-shell">
        {sectionLinks.map((link) => (
          <a key={link.href} href={link.href} className="dock-link">
            {link.label}
          </a>
        ))}

        {social.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="dock-link dock-external">
            github
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="dock-link dock-external">
            linkedin
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="dock-link dock-external">
            x
          </a>
        )}

        {resumeUrl && (
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="dock-resume-btn">
            resume
          </a>
        )}
      </div>
    </nav>
  )
}
