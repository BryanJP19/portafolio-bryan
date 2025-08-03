import '../styles/hero.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">Bryan Jimenez Peña</span></h1>
        <p>Desarrollador web enfocado en crear experiencias digitales modernas y funcionales.</p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Contáctame</Link>
          <Link to="/projects" className="btn-secondary">Ver proyectos</Link>
        </div>

        <div className="hero-social">
          <a href="https://github.com/BryanJP19" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/bryan-jimenez-pe%C3%B1a-7bb342256/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="mailto:bryanjimenezpena@gmail.com"><FaEnvelope size={24} /></a>
        </div>
      </div>
    </section>
  )
}
