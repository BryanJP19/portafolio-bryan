import '../styles/projects.css'

const projects = [
  {
    title: 'Portafolio React',
    description: 'Sitio web personal desarrollado con React, Vite y animaciones AOS.',
    github: 'https://github.com/BryanJP19',
    demo: '#'
  },
  {
    title: 'Lista de Tareas',
    description: 'App simple para gestionar tareas usando localStorage.',
    github: 'https://github.com/BryanJP19',
    demo: '#'
  },
  {
    title: 'Visor de API',
    description: 'Proyecto que consume una API pública con Axios y muestra datos.',
    github: 'https://github.com/BryanJP19',
    demo: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
