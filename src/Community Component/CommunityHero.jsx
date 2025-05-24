import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Design Community Component/CommunityHero.css"

const CommunityHero = () => {
  return (
    <div className="bodyofcareers">
      <div className="careers-container">
        {/* Hero Section */}
        <div className="careers-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>
              Join Our Team at <span className="highlight">Cloudtris</span>
            </h1>
            <p>
              Build the future of cloud technology with a team that values innovation, growth, and work-life balance.
            </p>
            <div className="hero-buttons">
              {/* <button className="primary-btn">
                Explore Opportunities <FaArrowRight className="btn-icon" />
              </button> */}
              <Link to="/support/cloudtris/" style={{ textDecoration: 'none' }}>
                <button className="secondary-btn">
                  Meet Our Team <FaSearch className="btn-icon" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityHero;
