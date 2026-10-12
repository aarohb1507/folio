import React, { useState, useEffect } from 'react'
import portfolioData from './data/portfolio'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Newsletter from './components/Newsletter'
import Skills from './components/Skills'
import Footer from './components/Footer'
import LoopPage from './components/LoopPage'

export default function App(){
  const [isDark, setIsDark] = useState(true)
  const isLoopPage = window.location.pathname.replace(/\/$/, '') === '/loop'

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

  const toggleTheme = () => setIsDark(!isDark)

  if (isLoopPage) return <LoopPage isDark={isDark} toggleTheme={toggleTheme} />

  return (
    <div id="top" className="site-root">
      <div className="container">
        <Header
          name={portfolioData.name}
          resumeUrl={portfolioData.resumeUrl}
          contact={portfolioData.contact}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

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
