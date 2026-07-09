import { motion } from 'framer-motion'
import { FiBriefcase, FiShoppingBag, FiMonitor } from 'react-icons/fi'

const experiences = [
  {
    role: 'Sales & Admin Social Media',
    company: 'CV Perfecto Golf',
    period: '2024 - 2026',
    icon: <FiShoppingBag />,
    desc: [
      'Melayani penjualan perlengkapan golf (driver, iron, putter, shaft, grip, dll.)',
      'Mengelola media sosial dan membuat konten promosi',
      'Membalas chat pelanggan dan memberikan konsultasi produk',
      'Mengelola stok serta data produk',
      'Membuat postingan promosi dan materi pemasaran',
      'Membantu administrasi penjualan dan transaksi',
    ]
  },
  {
    role: 'Support IT',
    company: 'PT Ciptadra Soft Indo',
    period: '2023 - 2024',
    icon: <FiMonitor />,
    desc: [
      'Memberikan dukungan teknis kepada pengguna',
      'Membantu instalasi dan konfigurasi perangkat lunak',
      'Menangani troubleshooting perangkat keras dan perangkat lunak',
      'Membantu pemeliharaan sistem dan jaringan',
      'Mendukung operasional tim IT',
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Proyek Akademis',
    period: '2025 - Sekarang',
    icon: <FiBriefcase />,
    desc: [
      'Mengembangkan Sistem Inventaris Gudang "GudangKita" dengan Laravel 10',
      'Menerapkan autentikasi multi-level user dan enkripsi AES-256',
      'Membangun website landing page CARION dengan Bootstrap 5 & Google Maps API',
    ]
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
                {exp.icon}
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul className="timeline-list">
                  {exp.desc.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
