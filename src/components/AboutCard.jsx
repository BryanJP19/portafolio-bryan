import '../styles/about.css'

export default function AboutCard() {
  return (
    <section className="about-section" id="about" data-aos="fade-right">
      <div className="about-content">
        <h2>Sobre mí</h2>
        <p>
          Soy un apasionado desarrollador web dominicano, enfocado en construir interfaces limpias, funcionales y modernas. Me encanta transformar ideas en soluciones digitales que impactan.
        </p>
      </div>

      <div className="objective-card" data-aos="fade-left">
        <h3>🎯 Mi objetivo</h3>
        <p>
          Seguir creciendo como desarrollador profesional, dominando nuevas tecnologías y aportando valor real en cada proyecto al que me sume.
        </p>
      </div>
    </section>
  )
}
