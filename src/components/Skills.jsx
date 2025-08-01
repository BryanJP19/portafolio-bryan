import '../styles/skills.css'

export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 60 },
    { name: 'Git & GitHub', level: 50 },
    { name: 'Responsive Design', level: 60 }
  ]

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
