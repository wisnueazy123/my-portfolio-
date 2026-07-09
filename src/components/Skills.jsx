const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Laravel', 'Python', 'Go']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <h3 className="skill-category">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
