import gudangkitaImg from '../assets/gudangkita-dashboard.png'
import craionImg from '../assets/craion-logo.png'

const projects = [
  {
    title: 'GudangKita - Sistem Inventaris Gudang',
    desc: 'Aplikasi web manajemen inventaris gudang untuk tugas akademis keamanan basis data. Mengimplementasikan autentikasi multi-level user (Admin, Manager, Staff) dengan hak akses berbeda, enkripsi password AES-256-CBC menggunakan Laravel Crypt, CRUD barang & kategori, pencatatan transaksi masuk/keluar dengan stok otomatis, generate invoice PDF via DomPDF, dashboard statistik real-time, serta dark/light mode.',
    tags: ['Laravel 10', 'PHP 8.1', 'MySQL 8', 'Tailwind CSS', 'AES-256 Encryption', 'DomPDF'],
    link: 'http://localhost:8000',
    image: gudangkitaImg
  },
  {
    title: 'CRAION - Website Organisasi Pemuda',
    desc: 'Landing page responsif untuk organisasi karang taruna CRAION (Creative Generation). Fitur meliputi hero section dengan animasi particle, profil organisasi & visi-misi, struktur pengurus, program kegiatan (bakti sosial, olahraga, event 17 Agustus, santunan), riwayat desain jersey per tahun, galeri kegiatan, pencapaian/prestasi, testimoni warga menggunakan carousel, formulir kontak, serta integrasi Google Maps untuk lokasi sekretariat.',
    tags: ['Laravel 10', 'Bootstrap 5', 'PHP', 'Blade Template', 'Google Maps API', 'AOS Animation'],
    link: 'http://localhost:8000',
    image: craionImg
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
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
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
