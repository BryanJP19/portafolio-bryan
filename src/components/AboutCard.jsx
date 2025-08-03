import '../styles/about.css'

export default function AboutCard() {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-content">
        <h2>Sobre Mí</h2>
        <p>
          Soy <strong>Bryan Jimenez Peña</strong>, un apasionado desarrollador web enfocado en crear
          soluciones modernas, dinámicas y funcionales usando tecnologías como <strong>React</strong>,
          <strong> Vite</strong> y <strong>FastAPI</strong>. Me motiva el aprendizaje continuo y el
          trabajo en proyectos que tengan impacto real.
        </p>
        <p>
          Actualmente me especializo en frontend moderno, pero estoy expandiendo mis habilidades full stack con herramientas como Firebase, SQL y Node.js.
        </p>
      </div>

      <div className="objective-card">
        <h3>🎯 Mi Objetivo</h3>
        <p>
          Desarrollar aplicaciones web sólidas, atractivas y accesibles que ayuden a las personas y empresas a alcanzar sus metas. Siempre con ganas de aprender, mejorar y colaborar.
        </p>
      </div>

      <div className="about-content" style={{ marginTop: '3rem' }}>
        <h3>Tecnologías que domino:</h3>
        <p>
          ✔️ React, Vite, Tailwind  
          ✔️ JavaScript moderno (ES6+)  
          ✔️ HTML5, CSS3, Flexbox y Grid  
          ✔️ FastAPI, Python, Node.js  
          ✔️ Firebase, SQL Server, Git
        </p>

        <h3 style={{ marginTop: '2rem' }}>Cosas curiosas sobre mí:</h3>
        <p>
          🎧 Programo con música de fondo  
          🧠 Me obsesionan las UIs limpias  
          ⚙️ Me encanta automatizar cosas  
          🌐 Sueño con trabajar en proyectos globales
        </p>
      </div>
    </section>
  )
}

