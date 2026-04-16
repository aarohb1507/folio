import React, { useState, useEffect } from 'react'
import portfolioData from './data/portfolio'
import Header from './components/Header'
import Avatar from './components/Avatar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Newsletter from './components/Newsletter'
import Skills from './components/Skills'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

const SCROLL_SPEED_MULTIPLIER = 0.92

export default function App(){
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      return undefined
    }

    const normalizeDelta = (event) => {
      if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        return event.deltaY * 16
      }

      if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        return event.deltaY * window.innerHeight
      }

      return event.deltaY
    }

    const hasScrollableParent = (startNode, deltaY) => {
      let node = startNode

      while (node && node !== document.body && node !== document.documentElement) {
        if (!(node instanceof HTMLElement)) {
          node = node.parentElement
          continue
        }

        const { overflowY } = window.getComputedStyle(node)
        const canScroll = /(auto|scroll|overlay)/.test(overflowY) && node.scrollHeight > node.clientHeight

        if (canScroll) {
          const atTop = node.scrollTop <= 0
          const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1
          const canScrollDirection = deltaY < 0 ? !atTop : !atBottom

          if (canScrollDirection) {
            return true
          }
        }

        node = node.parentElement
      }

      return false
    }

    const handleWheel = (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return
      }

      const deltaY = normalizeDelta(event)
      if (!deltaY || hasScrollableParent(event.target, deltaY)) {
        return
      }

      event.preventDefault()
      window.scrollBy({
        top: deltaY * SCROLL_SPEED_MULTIPLIER,
        left: 0,
        behavior: 'auto'
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="site-root">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <div className="container">
        <Header
          name={portfolioData.name}
          startYear={portfolioData.startYear}
          resumeUrl={portfolioData.resumeUrl}
        />
        <Avatar initials={portfolioData.initials} />

        <main>
          <About about={portfolioData.about} />
          <Experience items={portfolioData.experience} />
          <Projects items={portfolioData.projects} />
          <Education items={portfolioData.education} />
          <Newsletter />
          <Skills items={portfolioData.skills} />
        </main>

        <Footer social={portfolioData.social} />
      </div>
    </div>
  )
}
