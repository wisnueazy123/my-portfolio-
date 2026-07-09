const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    period: '2023 - Present',
    desc: 'Leading development of microservices architecture. Mentoring junior developers and implementing CI/CD pipelines.'
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2021 - 2023',
    desc: 'Built and maintained multiple client-facing web applications. Reduced page load times by 40% through optimization.'
  },
  {
    role: 'Junior Developer',
    company: 'WebAgency',
    period: '2019 - 2021',
    desc: 'Developed responsive websites and RESTful APIs. Collaborated with design team on UI/UX improvements.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
