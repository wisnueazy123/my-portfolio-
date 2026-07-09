import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeContext'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectGudangKita from './pages/ProjectGudangKita'
import ProjectCraion from './pages/ProjectCraion'
import './App.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
            <Experience />
            <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <BrowserRouter basename="/my-portfolio-">
        {loading && <Loading onComplete={() => setLoading(false)} />}
        {!loading && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/gudangkita" element={<ProjectGudangKita />} />
            <Route path="/project/craion" element={<ProjectCraion />} />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
