import "../Design About Component/AboutHero.css"

const AboutHero = () => {
  return (
    <div className="bodyofcareers">
      <div className="careers-container">
        {/* Hero Section */}
        <div className="careers-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>
              Collaborate with <span className="highlight">Opengen</span>
            </h1>
            <p>
              Build the future of cloud technology with a team that values innovation, growth, and work-life balance.
            </p>
            <div className="hero-buttons">
              {/* <button className="primary-btn">
                Explore Opportunities <FaArrowRight className="btn-icon" />
              </button> */}
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero;
