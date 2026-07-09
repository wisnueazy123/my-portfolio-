import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from './ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { dark, toggleTheme } = useTheme()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <span className="navbar-logo" onClick={() => scrollTo('hero')}>
          Wisnu<span className="accent">.</span>
        </span>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('about')}>About</button></li>
          <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
          <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
          <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>
      </div>
    </motion.nav>
  )
}
