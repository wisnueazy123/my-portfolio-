import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Wisnu Prasetyo
        </motion.h1>
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Web Developer
        </motion.h2>
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I build modern, scalable web applications with clean code and great user experiences.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          <a href="#" className="btn btn-cv" download>
            Download CV <FiDownload />
          </a>
        </motion.div>
      </div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }} />
        ))}
      </div>
    </section>
  )
}
