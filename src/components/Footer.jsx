export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Wisnu Prasetyo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
