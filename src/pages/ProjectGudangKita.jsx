import { motion } from 'framer-motion'
import { FiArrowLeft, FiShield, FiUsers, FiFileText, FiDatabase, FiLock, FiSun, FiMoon, FiPackage, FiShoppingCart, FiBarChart2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import gudangkitaDashboard from '../assets/gudangkita-dashboard.png'
import gudangkitaLogin from '../assets/gudangkita-login.png'
import gudangkitaItems from '../assets/gudangkita-items.png'

const features = [
  {
    icon: <FiUsers />,
    title: 'Multi-Level User',
    desc: 'Autentikasi dengan 3 role (Admin, Manager, Staff) yang masing-masing memiliki hak akses berbeda sesuai tanggung jawabnya.'
  },
  {
    icon: <FiLock />,
    title: 'Enkripsi AES-256',
    desc: 'Password dienkripsi menggunakan AES-256-CBC via Laravel Crypt. Berbeda dengan bcrypt, enkripsi ini reversible (bisa didekripsi).'
  },
  {
    icon: <FiPackage />,
    title: 'Manajemen Barang',
    desc: 'CRUD barang lengkap dengan nama, SKU unik, kategori, stok, harga, dan deskripsi. Stok otomatis update saat transaksi.'
  },
  {
    icon: <FiShoppingCart />,
    title: 'Transaksi Masuk/Keluar',
    desc: 'Pencatatan barang masuk dan keluar dengan validasi stok. Nomor invoice auto-generate (INV-YYYYMMDD-0001).'
  },
  {
    icon: <FiFileText />,
    title: 'Invoice PDF',
    desc: 'Generate invoice PDF otomatis menggunakan DomPDF. Hanya bisa diakses oleh Manager untuk kebutuhan dokumentasi.'
  },
  {
    icon: <FiBarChart2 />,
    title: 'Dashboard Statistik',
    desc: 'Menampilkan total barang, kategori, transaksi, pengguna, daftar stok menipis, dan transaksi terbaru secara real-time.'
  }
]

const roleAccess = [
  { feature: 'Dashboard', admin: true, manager: true, staff: true },
  { feature: 'Lihat Barang', admin: true, manager: true, staff: true },
  { feature: 'Tambah/Edit/Hapus Barang', admin: true, manager: true, staff: false },
  { feature: 'Lihat Kategori', admin: true, manager: true, staff: true },
  { feature: 'Kelola Kategori', admin: true, manager: true, staff: false },
  { feature: 'Lihat Semua Transaksi', admin: true, manager: true, staff: false },
  { feature: 'Tambah Transaksi', admin: true, manager: true, staff: true },
  { feature: 'Invoice PDF', admin: false, manager: true, staff: false },
  { feature: 'Kelola Pengguna', admin: true, manager: false, staff: false },
]

const techStack = [
  { name: 'Laravel 10', desc: 'Framework PHP backend' },
  { name: 'PHP 8.1', desc: 'Bahasa pemrograman' },
  { name: 'MySQL 8', desc: 'Database management' },
  { name: 'Tailwind CSS', desc: 'CSS framework (CDN)' },
  { name: 'DomPDF', desc: 'Generate PDF invoice' },
  { name: 'AES-256-CBC', desc: 'Enkripsi password' },
]

const accounts = [
  { role: 'Admin', email: 'admin@admin.com', password: 'password' },
  { role: 'Manager', email: 'manager@manager.com', password: 'password' },
  { role: 'Staff', email: 'staff@gmail.com', password: '12345678' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
}

export default function ProjectGudangKita() {
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
          <h1>GudangKita - Sistem Inventaris Gudang</h1>
          <p className="project-detail-subtitle">
            Aplikasi web manajemen inventaris gudang dengan multi-level user, enkripsi AES-256, dan invoice PDF.
            Dibuat untuk tugas akademis Keamanan Basis Data.
          </p>
          <div className="project-detail-tags">
            {['Laravel 10', 'PHP 8.1', 'MySQL 8', 'Tailwind CSS', 'AES-256', 'DomPDF'].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-detail-links">
            <a href="https://github.com/wisnueazy123/inventory-managemen" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub Repository
            </a>
            <a href="http://localhost:8000" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-detail-screenshots"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="screenshot-main">
            <img src={gudangkitaDashboard} alt="Dashboard GudangKita" />
          </div>
          <div className="screenshot-grid">
            <img src={gudangkitaLogin} alt="Login Page" />
            <img src={gudangkitaItems} alt="Items Page" />
          </div>
        </motion.div>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Latar Belakang</h2>
          <p>
            Pengelolaan inventaris gudang merupakan aspek krusial dalam operasional bisnis. Pencatatan stok barang
            secara manual rentan terhadap kesalahan manusia, kehilangan data, dan sulitnya memantau pergerakan barang
            secara real-time. Oleh karena itu, dibutuhkan sebuah sistem informasi inventaris yang terkomputerisasi
            untuk memudahkan pencatatan, pemantauan, dan pelaporan stok barang.
          </p>
          <p>
            Sistem "GudangKita" hadir sebagai solusi manajemen inventaris berbasis web dengan multi-level user,
            dilengkapi dengan enkripsi AES-256 untuk keamanan data pengguna, serta fitur invoice PDF untuk
            kebutuhan dokumentasi transaksi.
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
              <motion.div
                key={feat.title}
                className="feature-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
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
          <h2>Hak Akses per Role</h2>
          <div className="table-wrapper">
            <table className="role-table">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th>Admin</th>
                  <th>Manager</th>
                  <th>Staff</th>
                </tr>
              </thead>
              <tbody>
                {roleAccess.map(row => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td className={row.admin ? 'yes' : 'no'}>{row.admin ? '✅' : '❌'}</td>
                    <td className={row.manager ? 'yes' : 'no'}>{row.manager ? '✅' : '❌'}</td>
                    <td className={row.staff ? 'yes' : 'no'}>{row.staff ? '✅' : '❌'}</td>
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
          <h2>Teknologi yang Digunakan</h2>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="tech-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
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
          <h2>Enkripsi AES-256 pada Password</h2>
          <p>
            Berbeda dengan sistem autentikasi pada umumnya yang menggunakan <strong>bcrypt</strong> (hash satu arah),
            aplikasi ini mengimplementasikan <strong>AES-256-CBC</strong> (Advanced Encryption Standard) untuk menyimpan
            password user. AES-256 adalah algoritma enkripsi simetris yang memungkinkan password didekripsi kembali
            ke bentuk aslinya.
          </p>
          <div className="code-block">
            <h4>Helper Class - AESHelper.php</h4>
            <pre>{`class AESHelper
{
    public static function encrypt($plaintext)
    {
        return Crypt::encryptString($plaintext);
    }

    public static function decrypt($ciphertext)
    {
        return Crypt::decryptString($ciphertext);
    }
}`}</pre>
          </div>
          <div className="code-block">
            <h4>Verifikasi Login - AuthController.php</h4>
            <pre>{`// Dekripsi password dari database lalu bandingkan
$decrypted = AESHelper::decrypt($user->password);
if ($decrypted === $request->password) {
    Auth::login($user);
}`}</pre>
          </div>
        </motion.section>

        <motion.section
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Akun Demo</h2>
          <div className="accounts-grid">
            {accounts.map(acc => (
              <div key={acc.role} className="account-card">
                <h4>{acc.role}</h4>
                <p><strong>Email:</strong> {acc.email}</p>
                <p><strong>Password:</strong> {acc.password}</p>
              </div>
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
          <h2>Struktur Database</h2>
          <div className="db-diagram">
            <pre>{`users 1───M transactions M───1 items M───1 categories
  │                              │
  └──────────────────────────────┘
          (item_id FK)`}</pre>
          </div>
          <div className="table-wrapper">
            <table className="role-table">
              <thead>
                <tr>
                  <th>Tabel</th>
                  <th>Kolom Utama</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>users</td><td>id, name, email, password, role</td><td>Role: admin/manager/staff, password terenkripsi AES-256</td></tr>
                <tr><td>categories</td><td>id, name, description</td><td>Kategori barang</td></tr>
                <tr><td>items</td><td>id, category_id, name, sku, quantity, price</td><td>SKU unik, stok auto-update</td></tr>
                <tr><td>transactions</td><td>id, invoice_number, item_id, user_id, type, quantity</td><td>Type: in/out, invoice auto-generate</td></tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <div className="project-detail-footer">
          <Link to="/" className="btn btn-primary">
            <FiArrowLeft /> Kembali ke Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
