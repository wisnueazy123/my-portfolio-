import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiCalendar } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

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
              Saya adalah seorang <strong>Web Developer</strong> yang fokus pada pengembangan
              aplikasi web berbasis <strong>Laravel & PHP</strong>. Saya memiliki pengalaman
              dalam membangun sistem manajemen inventaris, website organisasi, serta
              mengelola media sosial dan administrasi penjualan.
            </p>
            <p>
              Dengan latar belakang di bidang <strong>IT Support</strong> dan <strong>Sales/Admin</strong>,
              saya memahami kebutuhan bisnis dari sisi teknis maupun operasional. Saya senang
              memecahkan masalah dan menciptakan solusi digital yang membantu kerja tim.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                  <strong>Email</strong>
                  <span>prasetyowisnu611@gmail.com</span>
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
                  <strong>Pengalaman</strong>
                  <span>3+ Tahun</span>
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
              <img src={profileImg} alt="Wisnu Prasetyo" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
