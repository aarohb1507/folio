import React from 'react'
import VisitorCounter from './VisitorCounter'

export default function Footer({ social = {} }){
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <div>say hello on <a href={social.twitter} target="_blank" rel="noopener noreferrer">x</a></div>
        <div>say hello on <a href={social.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></div>
        <div>say hello on <a href={social.github} target="_blank" rel="noopener noreferrer">github</a></div>
      </div>
      <VisitorCounter />
    </footer>
  )
}
