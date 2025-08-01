import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './styles/global.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

