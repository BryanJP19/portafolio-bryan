import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          DevPortfolio
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
