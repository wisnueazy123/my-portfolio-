import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import gudangkitaImg from '../assets/gudangkita-dashboard.png'
import craionImg from '../assets/craion-logo.png'

const projects = [
  {
    title: 'GudangKita - Sistem Inventaris Gudang',
    desc: 'Aplikasi web manajemen inventaris gudang untuk tugas akademis keamanan basis data. Mengimplementasikan autentikasi multi-level user (Admin, Manager, Staff) dengan hak akses berbeda, enkripsi password AES-256-CBC menggunakan Laravel Crypt, CRUD barang & kategori, pencatatan transaksi masuk/keluar dengan stok otomatis, generate invoice PDF via DomPDF, dashboard statistik real-time, serta dark/light mode.',
    tags: ['Laravel 10', 'PHP 8.1', 'MySQL 8', 'Tailwind CSS', 'AES-256', 'DomPDF'],
    github: 'https://github.com/wisnueazy123/inventory-managemen',
    live: 'http://localhost:8000',
    detail: '/project/gudangkita',
    image: gudangkitaImg
  },
  {
    title: 'CRAION - Website Organisasi Pemuda',
    desc: 'Landing page responsif untuk organisasi karang taruna CRAION (Creative Generation). Fitur meliputi hero section dengan animasi particle, profil organisasi & visi-misi, struktur pengurus, program kegiatan (bakti sosial, olahraga, event 17 Agustus, santunan), riwayat desain jersey per tahun, galeri kegiatan, pencapaian/prestasi, testimoni warga menggunakan carousel, formulir kontak, serta integrasi Google Maps untuk lokasi sekretariat.',
    tags: ['Laravel 10', 'Bootstrap 5', 'PHP', 'Blade Template', 'Google Maps API', 'AOS Animation'],
    github: 'https://github.com/wisnueazy123/karang-taruna',
    detail: '/project/craion',
    image: craionImg
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(67,97,238,0.1)' }}
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.detail ? (
                  <Link to={project.detail} className="project-link-btn detail">
                    <FiExternalLink /> Lihat Detail
                  </Link>
                ) : (
                  <a href={project.live} className="project-link-btn live" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                <a href={project.github} className="project-link-btn github" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
