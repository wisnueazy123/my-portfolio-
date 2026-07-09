import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo" onClick={() => scrollTo('hero')}>
          Wisnu<span className="accent">.</span>
        </span>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`} />
          <span className={`bar ${isOpen ? 'open' : ''}`} />
          <span className={`bar ${isOpen ? 'open' : ''}`} />
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('about')}>About</button></li>
          <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
          <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
          <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  )
}
