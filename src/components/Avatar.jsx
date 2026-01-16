import React from 'react'

export default function Avatar({ initials }){
  return (
    <div className="avatar" aria-hidden="true">
      <span className="avatar-text">{initials}</span>
    </div>
  )
}
