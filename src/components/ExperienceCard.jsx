import React from 'react'

export default function ExperienceCard({ item }){
  return (
    <a className="card" href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="card-left">
        <div className="logo-box" aria-hidden>
          {item.logo}
        </div>
      </div>

      <div className="card-right">
        <div className="card-title">{item.company}</div>
        <div className="card-meta">{item.dates}</div>
        <div className="card-role">{item.role} | {item.type}</div>
        <div className="card-desc">{item.description}</div>
      </div>
    </a>
  )
}
