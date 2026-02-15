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
import ResumeHighlights from './components/ResumeHighlights'
import BottomDock from './components/BottomDock'

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

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="site-root">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <div className="container">
        <Header name={portfolioData.name} startYear={portfolioData.startYear} />
        <Avatar initials={portfolioData.initials} />

        <main>
          <About about={portfolioData.about} contact={portfolioData.contact} />
          <ResumeHighlights items={portfolioData.highlights} />
          <Experience items={portfolioData.experience} />
          <Projects items={portfolioData.projects} />
          <Education items={portfolioData.education} />
          <Newsletter />
          <Skills items={portfolioData.skills} />
        </main>

        <Footer social={portfolioData.social} />
      </div>
      <BottomDock social={portfolioData.social} resumeUrl={portfolioData.resumeUrl} />
    </div>
  )
}
