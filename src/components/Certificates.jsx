import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certificates = [
  {
    title: 'Sertifikat Keamanan Basis Data',
    issuer: 'Universitas',
    date: '2026',
    desc: 'Implementasi enkripsi AES-256 pada sistem autentikasi multi-level user',
    link: '#'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Online Course',
    date: '2025',
    desc: 'Full-stack development dengan React, Laravel, dan MySQL',
    link: '#'
  },
  {
    title: 'Linux System Administration',
    issuer: 'Workshop',
    date: '2024',
    desc: 'Pengelolaan server, shell scripting, dan keamanan sistem',
    link: '#'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  })
}

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sertifikat
        </motion.h2>
        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="certificate-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(67,97,238,0.12)' }}
            >
              <div className="certificate-icon">
                <FiAward />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="certificate-meta">{cert.issuer} &middot; {cert.date}</p>
                <p className="certificate-desc">{cert.desc}</p>
                {cert.link !== '#' && (
                  <a href={cert.link} className="certificate-link" target="_blank" rel="noopener noreferrer">
                    Lihat Sertifikat <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
