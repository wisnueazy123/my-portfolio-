import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel 10', level: 90 },
      { name: 'MySQL', level: 80 },
      { name: 'REST API', level: 70 },
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Bootstrap 5', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Blade Template', level: 85 },
    ]
  },
  {
    title: 'Tools & Lainnya',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite', level: 70 },
      { name: 'DomPDF', level: 75 },
      { name: 'Google Maps API', level: 65 },
      { name: 'AES-256 Encryption', level: 70 },
    ]
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  })
}

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <h3 className="skill-category">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.15 + j * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
