import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tugas Akademis',
    period: '2026',
    desc: 'Mengembangkan Sistem Inventaris Gudang "GudangKita" dengan Laravel 10, menerapkan autentikasi multi-level user, enkripsi AES-256 untuk keamanan password, serta invoice PDF otomatis.'
  },
  {
    role: 'Web Developer',
    company: 'Proyek Organisasi',
    period: '2025',
    desc: 'Membangun website landing page untuk organisasi karang taruna CRAION dengan fitur galeri, testimoni carousel, dan integrasi Google Maps.'
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2024 - Sekarang',
    desc: 'Mengerjakan berbagai proyek web development menggunakan React, Laravel, dan MySQL untuk klien lokal.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
  })
}

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="timeline-dot">
                <FiBriefcase size={10} />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
