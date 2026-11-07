import React, { useEffect, useState } from 'react'

const checkpoints = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
  { id: 'skills', label: 'toolkit' }
]

export default function Dock() {
  const [active, setActive] = useState(null)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const { scrollY, innerHeight } = window
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? Math.min(scrollY / max, 1) : 0)
      setVisible(scrollY > innerHeight * 0.45)

      const line = innerHeight * 0.4
      let current = null
      for (const { id } of checkpoints) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (max > 0 && scrollY >= max - 2) current = checkpoints[checkpoints.length - 1].id
      setActive(current)
    }

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav className={`dock${visible ? ' is-visible' : ''}`} aria-label="Page checkpoints">
      <span className="dock-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <ol>
        {checkpoints.map(({ id, label }) => (
          <li key={id}>
            <a className={`dock-item${active === id ? ' is-active' : ''}`} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              <span className="dock-dot" aria-hidden="true" />
              <span className="dock-label">{label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
