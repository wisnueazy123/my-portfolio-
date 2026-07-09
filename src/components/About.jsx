import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiCalendar } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Saya adalah seorang developer yang passionate dalam membangun aplikasi web
              modern. Dengan pengalaman dalam full-stack development, saya menikmati
              proses mengubah ide kompleks menjadi solusi yang sederhana, indah, dan
              mudah digunakan.
            </p>
            <p>
              Saya memiliki keahlian dalam Laravel, React, dan MySQL. Fokus utama saya
              adalah keamanan data, performa aplikasi, dan user experience yang optimal.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                  <strong>Email</strong>
                  <span>wisnu@example.com</span>
                </div>
              </div>
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <div>
                  <strong>Lokasi</strong>
                  <span>Indonesia</span>
                </div>
              </div>
              <div className="info-item">
                <FiCalendar className="info-icon" />
                <div>
                  <strong> Pengalaman</strong>
                  <span>2+ Tahun</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon status-dot" />
                <div>
                  <strong>Status</strong>
                  <span>Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="avatar-placeholder">
              <span>WP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
