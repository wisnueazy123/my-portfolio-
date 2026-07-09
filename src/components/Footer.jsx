import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          <a href="https://github.com/wisnueazy123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <FiTwitter size={20} />
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Wisnu Prasetyo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
