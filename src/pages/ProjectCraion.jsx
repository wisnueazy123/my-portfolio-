import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiUsers, FiHeart, FiMapPin, FiCalendar, FiAward, FiMessageSquare, FiStar, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import craionImg from '../assets/craion-full.png'

const features = [
  { icon: <FiUsers />, title: 'Struktur Organisasi', desc: 'Menampilkan profil pengurus CARION lengkap dengan foto, nama, dan jabatan (Ketua, Wakil, Sekretaris, Bendahara).' },
  { icon: <FiHeart />, title: 'Program Kegiatan', desc: 'Bakti Sosial, Olahraga (futsal/voli/badminton), Event 17 Agustus, dan Santunan rutin bulanan.' },
  { icon: <FiCalendar />, title: 'Riwayat Jersey', desc: 'Evolusi desain jersey CARION dari tahun 2022 sampai 2026 dengan tema unik tiap tahun.' },
  { icon: <FiAward />, title: 'Prestasi', desc: 'Juara 1 Lomba Desa, Penghargaan Peduli Lingkungan, Juara Futsal Antar Organisasi Pemuda.' },
  { icon: <FiMessageSquare />, title: 'Testimoni', desc: 'Kesan dan pesan dari warga, anggota, dan Kepala Desa menggunakan carousel.' },
  { icon: <FiMapPin />, title: 'Google Maps', desc: 'Integrasi peta lokasi sekretariat CARION langsung dari halaman kontak.' },
]

const programs = [
  { name: 'Bakti Sosial', freq: 'Bulanan', desc: 'Santunan anak yatim, donor darah, bantu warga kurang mampu' },
  { name: 'Olahraga', freq: 'Mingguan', desc: 'Turnamen futsal, voli, badminton antar RT/RW' },
  { name: 'Event 17 Agustus', freq: 'Tahunan', desc: 'Lomba tradisional, pawai, hiburan rakyat' },
  { name: 'Santunan', freq: 'Bulanan', desc: 'Santunan anak yatim, dhuafa, lansia saat Ramadhan' },
]

const jerseys = [
  { year: '2026', name: 'Nusantara Spirit', desc: 'Motif batik modern, warna navy putih & aksen emas' },
  { year: '2025', name: 'Golden Era', desc: 'Dominasi putih, garis navy & logo emas' },
  { year: '2024', name: 'Urban Warrior', desc: 'Streetwear modern, navy solid & grafis tribal' },
  { year: '2023', name: 'Unity in Diversity', desc: 'Motif garis warna-warni, simbol persatuan' },
  { year: '2022', name: 'First Chapter', desc: 'Simpel klasik, navy dengan logo & aksen kuning' },
]

const techStack = [
  { name: 'Laravel 10', desc: 'Framework PHP' },
  { name: 'Bootstrap 5', desc: 'CSS Framework' },
  { name: 'Blade Template', desc: 'Templating engine' },
  { name: 'Google Maps API', desc: 'Integrasi peta' },
  { name: 'AOS Animation', desc: 'Scroll animation' },
  { name: 'Vite', desc: 'Build tool' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
}

export default function ProjectCraion() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Kembali ke Portfolio
        </Link>

        <motion.div
          className="project-detail-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>CRAION - Website Organisasi Pemuda</h1>
          <p className="project-detail-subtitle">
            Landing page responsif untuk organisasi karang taruna CRAION (Creative Generation).
            Berisi profil organisasi, program kegiatan, galeri, prestasi, dan kontak.
          </p>
          <div className="project-detail-tags">
            {['Laravel 10', 'Bootstrap 5', 'PHP', 'Blade Template', 'Google Maps API', 'AOS Animation'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-detail-links">
            <a href="https://github.com/wisnueazy123/karang-taruna" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub Repository
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-detail-screenshots"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="screenshot-item" onClick={() => setLightbox({ src: craionImg, label: 'CRAION Landing Page' })}>
            <img src={craionImg} alt="CRAION Landing Page" />
            <span className="screenshot-label">Landing Page - Hero Section</span>
          </div>
        </motion.div>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Tentang CRAION</h2>
          <p>
            CRAION (Creative Generation) didirikan pada tahun 2015 oleh sekelompok pemuda yang peduli
            terhadap perkembangan lingkungan sosial. Berawal dari keprihatinan terhadap kurangnya wadah
            kreativitas pemuda, organisasi ini hadir sebagai tempat berkumpul, belajar, dan berkontribusi
            bagi masyarakat.
          </p>
          <p>
            <strong>Visi:</strong> Mewujudkan pemuda yang kreatif, mandiri, dan berdaya saing tinggi serta menjadi agen perubahan positif di masyarakat.
          </p>
          <p>
            <strong>Misi:</strong> Mengembangkan potensi pemuda melalui program pelatihan, kegiatan sosial, dan pembinaan karakter yang berkelanjutan.
          </p>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Fitur Utama</h2>
          <div className="features-grid">
            {features.map((feat, i) => (
              <motion.div key={feat.title} className="feature-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="feature-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Program Kegiatan</h2>
          <div className="table-wrapper">
            <table className="role-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Frekuensi</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {programs.map(p => (
                  <tr key={p.name}>
                    <td><strong>{p.name}</strong></td>
                    <td>{p.freq}</td>
                    <td>{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Riwayat Jersey</h2>
          <div className="features-grid">
            {jerseys.map((j, i) => (
              <motion.div key={j.year} className="feature-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="feature-icon"><FiStar /></div>
                <h3>{j.year} - {j.name}</h3>
                <p>{j.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Teknologi</h2>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <motion.div key={t.name} className="tech-card" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Prestasi</h2>
          <div className="features-grid">
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="feature-icon"><FiAward /></div>
              <h3>2024 - Juara 1 Lomba Desa</h3>
              <p>CRAION terbaik dalam pengelolaan program pemberdayaan pemuda tingkat kabupaten.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="feature-icon"><FiAward /></div>
              <h3>2023 - Penghargaan Peduli Lingkungan</h3>
              <p>Penghargaan dari Dinas Lingkungan Hidup atas program penghijauan dan kebersihan.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="feature-icon"><FiAward /></div>
              <h3>2022 - Juara Futsal Antar Pemuda</h3>
              <p>Tim futsal CRAION juara 1 turnamen antar desa se-kecamatan.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Struktur Halaman</h2>
          <div className="db-diagram">
            <pre>{`Hero Section
  ├── Animasi particle background
  ├── Statistik (50+ Anggota, 25+ Program, 10+ Tahun)
  └── CTA Buttons

Tentang Kami
  ├── Sejarah singkat CRAION
  └── Visi & Misi

Struktur Organisasi
  ├── Ketua: Ahmad Fauzi
  ├── Wakil: Rina Amelia
  ├── Sekretaris: Dwi Prasetyo
  └── Bendahara: Siti Nurhaliza

Program Kegiatan
  ├── Bakti Sosial (Bulanan)
  ├── Olahraga (Mingguan)
  ├── Event 17 Agustus (Tahunan)
  └── Santunan (Bulanan)

Riwayat Jersey (2022-2026)
Galeri Kegiatan
Prestasi
Testimoni (Carousel)
Kontak + Google Maps
Footer + Social Media`}</pre>
          </div>
        </motion.section>

        <div className="project-detail-footer">
          <Link to="/" className="btn btn-primary">
            <FiArrowLeft /> Kembali ke Portfolio
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}><FiX size={28} /></button>
            <motion.img src={lightbox.src} alt={lightbox.label} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} onClick={(e) => e.stopPropagation()} />
            <p className="lightbox-caption">{lightbox.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
