import { useState, useEffect, useRef } from "react"
import "../Design Service Component/ServiceDev.css"
import devimage from '../assets/C.jpeg'
import { Link } from "react-router-dom"
const ServiceDev = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`ser-main-section-dev ${isVisible ? "ser-visible-dev" : ""}`}>
      <div className="ser-container-wrapper-dev">
        <h1 className="ser-main-heading-dev">Make your project the go-to for practitioners and contributors.</h1>

        <div className="ser-tabs-container-dev">
           
           
        </div>

        <div className="ser-content-grid-dev">
          <div className="ser-hero-section-dev">
            <div className="ser-hero-container-dev">
              <img
                src={devimage}
                alt="Developer working on code"
                className="ser-hero-image-dev"
              />
              <div className="ser-hero-text-overlay-dev">
                <h2 className="ser-hero-title-dev">Developer Advocacy for Growing Tech Companies</h2>
                <p className="ser-hero-description-dev">
                  Build thriving developer ecosystems with comprehensive advocacy programs designed to scale your
                  technical community and drive adoption.
                </p>
                <Link to="/brandamplification/Opengen" style={{textDecoration:'none',color:'#e6c068'}}>
                <button className="ser-hero-button-dev">Learn more
                
                </button></Link>
                
              </div>
            </div>
          </div>

          <div className="ser-cards-grid-dev">
            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-community-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Developer Communities & Ecosystem Building</h3>
              <p className="ser-card-description-dev" style={{fontFamily:'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'}}>
                Create vibrant, engaged developer communities around your technology stack with strategic community
                management, content creation, and ecosystem partnerships.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-hackathon-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Hackathons & Coding Challenges</h3>
              <p className="ser-card-description-dev">
                Design and execute high-impact hackathons, coding competitions, and technical challenges that showcase
                your platform while building developer engagement.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-ambassador-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C16.4183 14 20 17.5817 20 22H4C4 17.5817 7.58172 14 12 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11L15 8L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Developer Ambassadors & Advocacy Programs</h3>
              <p className="ser-card-description-dev">
                Launch comprehensive ambassador programs with top-tier developers who become authentic advocates for
                your technology and drive organic adoption.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-content-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Technical Content & Documentation</h3>
              <p className="ser-card-description-dev">
                Develop world-class technical documentation, tutorials, and educational content that accelerates
                developer onboarding and reduces time-to-value.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-events-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M3 10H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Developer Events & Conferences</h3>
              <p className="ser-card-description-dev">
                Organize impactful developer conferences, meetups, and workshops that position your company as a thought
                leader in the developer ecosystem.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

            <div className="ser-service-card-dev">
              <div className="ser-card-icon-dev ser-analytics-icon-dev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 20V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 20V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ser-card-title-dev">Developer Analytics & Insights</h3>
              <p className="ser-card-description-dev">
                Leverage data-driven insights to measure developer engagement, track adoption metrics, and optimize your
                advocacy strategies for maximum impact.
              </p>
              <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
              <button className="ser-learn-button-dev">
                Learn more
                <span className="ser-arrow-icon-dev">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDev;
