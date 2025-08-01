import '../styles/contact.css'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

    const handleSubmit = (e) => {
        e.preventDefault()

    const { nombre, correo, mensaje } = form

        if (!nombre || !correo || !mensaje) {
            alert('Por favor, completa todos los campos.')
            return
    }

                // Generar el texto del mensaje
    const texto = `Hola, soy ${nombre} (%0A${correo}) y quería decirte: %0A${mensaje}`
    const telefono = '18094050662' 
    const url = `https://wa.me/${telefono}?text=${encodeURI(texto)}`

                // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank')

            // Reset del formulario
        setForm({ nombre: '', correo: '', mensaje: '' })
        setEnviado(true)
        setTimeout(() => setEnviado(false), 4000)
    }


  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <h2>Contacto</h2>
      <p>¿Quieres trabajar conmigo o tienes una idea genial? ¡Hablemos!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={form.correo}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="5"
          value={form.mensaje}
          onChange={handleChange}
        />
        <button type="submit">Enviar mensaje</button>
        {enviado && <p className="success-msg">¡Mensaje enviado correctamente!</p>}
      </form>
    </section>
  )
}
