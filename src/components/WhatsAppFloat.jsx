import { FaWhatsapp } from 'react-icons/fa'
import '../styles/whatsapp.css'

export default function WhatsAppFloat() {
  const telefono = '18094050662' 
  const mensaje = '¡Hola Bryan! Me gustaría hablar contigo sobre un proyecto.'
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

  return (
    <a href={url} className="whatsapp-float" target="_blank" rel="noreferrer">
      <FaWhatsapp size={28} />
    </a>
  )
}
