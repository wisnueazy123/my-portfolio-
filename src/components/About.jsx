export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate full stack developer with experience in building
              web applications from concept to deployment. I enjoy turning complex
              problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or writing technical articles.
            </p>
            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong> Wisnu Prasetyo
              </div>
              <div className="info-item">
                <strong>Email:</strong> wisnu@example.com
              </div>
              <div className="info-item">
                <strong>Location:</strong> Indonesia
              </div>
              <div className="info-item">
                <strong>Availability:</strong> Freelance / Full-Time
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="avatar-placeholder">
              <span>WP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
