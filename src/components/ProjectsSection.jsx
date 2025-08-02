import '../styles/projects.css'

const projects = [
  {
    title: 'Fenix Tattos',
    description: 'Sitio web para un estudio de tatuajes, desarrollado con React y Tailwind CSS.',
    github: 'https://github.com/BryanJP19/Proyecto-Fenix-Tattos',
    demo: '#'
  },
  {
    title: 'Nomina de Empleados',
    description: 'Aplicación de consola para la gestión de nómina de empleados, desarrollada con React y Tailwind CSS.',
    github: 'https://github.com/BryanJP19/Proyecto-nomina/tree/master/Proyecto%20nomina',
    demo: '#'
  },
  {
    title: 'EntoursRD',
    description: 'Aplicación web para una agencia de viajes, desarrollada con React y Tailwind CSS.',
    github: 'https://github.com/BryanJP19/EntoursRD',
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
