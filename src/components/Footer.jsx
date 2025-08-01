import '../styles/footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Bryan Jimenez Peña. Todos los derechos reservados.</p>

        <div className="footer-icons">
          <a href="https://github.com/BryanJP19" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bryan-jimenez-pe%C3%B1a-7bb342256/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:bryanjimenezpena@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
