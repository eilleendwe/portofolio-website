import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'


function App() {
  const [theme, setTheme] = useState('dark')

  const themeLabel = useMemo(
    () => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'),
    [theme],
  )

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        themeLabel={themeLabel}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection />
      </main>
    </div>
  )
}

export default App