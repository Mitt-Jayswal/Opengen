// AdvancedService.jsx

import { useState, useEffect, useRef } from "react"
import { FaCode, FaUsers, FaRocket, FaChartLine, FaTools, FaBullhorn, FaBook, FaStar } from "react-icons/fa"
import "../Design Opengen Component/AdvancedService.css"
import recimage from '../assets/rec image.avif'
import recimage2 from '../assets/L.jpeg'
import hackathonImage from '../assets/newimage.png'  
import { Link } from "react-router-dom"

const AdvancedService = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  const services = [
    {
      icon: <FaChartLine />,
      title: "Developer Analytics",
      description: "Track developer engagement",
    },
    {
      icon: <FaUsers />,
      title: "Community Growth",
      description: "Scale your developer base",
    },
    {
      icon: <FaCode />,
      title: "Technical Content",
      description: "Create compelling documentation",
    },
    {
      icon: <FaRocket />,
      title: "Event Management",
      description: "Organize developer events",
    },
    {
      icon: <FaTools />,
      title: "Developer Tools",
      description: "Build better developer experience",
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Strategy",
      description: "Position your technical brand",
    },
    {
      icon: <FaBook />,
      title: "API Documentation",
      description: "Clear and comprehensive guides",
    },
    {
      icon: <FaStar />,
      title: "Thought Leadership",
      description: "Establish industry authority",
    },
  ]

  return (
    <section ref={sectionRef} className="rec-lion-open-section">
      <div className="rec-tiger-open-container">
        <h1 className="rec-elephant-open-title">OpenGen Developer Growth & Advocacy</h1>

        <div className="rec-giraffe-open-grid">
          {/* Large Main Container */}
          <div className={`rec-whale-open-main ${isVisible ? "rec-shark-open-animate" : ""}`}>
            <img
              src={recimage2}
              alt="Developer Platform"
              className="rec-shrimp-open-img"
            />
          </div>

          {/* Top Right Container - Hackathon Image */}
          <div
            className={`rec-penguin-open-card rec-penguin-open-hackathon ${isVisible ? "rec-shark-open-animate" : ""}`}
            style={{ animationDelay: "0.1s", padding: 0, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}
          >
            <img
              src={hackathonImage}
              alt="Hackathon"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>

          {/* Top Far Right Container - Community */}
          <div
            className={`rec-penguin-open-card rec-penguin-open-community ${isVisible ? "rec-shark-open-animate" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="rec-walrus-open-card-title-big">Community</h3>
          </div>

          {/* Bottom Right Container - Hackathons */}
          <div
            className={`rec-penguin-open-card rec-penguin-open-content ${isVisible ? "rec-shark-open-animate" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="rec-walrus-open-card-title-big">Hackathons</h3>
          </div>

          {/* Bottom Far Right Container - Scale Image */}
          <div
            className={`rec-penguin-open-card rec-penguin-open-red ${isVisible ? "rec-shark-open-animate" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src={recimage}
              alt="Scale Without Limits"
              className="rec-scale-open-full-img"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="rec-eagle-open-services">
          <div className="rec-hawk-open-services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rec-falcon-open-service-item ${isVisible ? "rec-shark-open-animate" : ""}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="rec-owl-open-service-icon">{service.icon}</div>
                <div className="rec-raven-open-service-content">
                  <h4 className="rec-sparrow-open-service-title">{service.title}</h4>
                  <p className="rec-robin-open-service-desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rec-peacock-open-cta">
          <Link to="/community/Opengen" onClick={handleNavClick}>
            <button className="rec-flamingo-open-browse">Join Opengen Community →</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AdvancedService;
