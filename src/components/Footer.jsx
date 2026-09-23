import React from 'react'

export default function Footer({ social = {} }) {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} aaroh bhardwaj</p>
      <div className="footer-links">
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">x <span aria-hidden="true">↗</span></a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">linkedin <span aria-hidden="true">↗</span></a>
        <a href={social.github} target="_blank" rel="noopener noreferrer">github <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  )
}
