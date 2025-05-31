import { useState, useEffect, useRef } from "react"
import "../Design Service Component/ServiceDev3.css"
import lalalala from "../assets/storytelling.webp"
import { Link } from "react-router-dom"

const ServiceDev3 = () => {
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
    <section ref={sectionRef} className={`servicedev3vo-main-section ${isVisible ? "servicedev3vo-visible" : ""}`}>
      <div className="servicedev3vo-container">
        <div className="servicedev3vo-header">
          <h1 className="servicedev3vo-main-title">Developer Advocacy Services to help you get started</h1>
        </div>

        <div className="servicedev3vo-content-wrapper">
          <div className="servicedev3vo-image-container">
            <div className="servicedev3vo-image-content">
              <img
                src={lalalala || "/placeholder.svg"}
                alt="Developer Advocacy Services"
                className="servicedev3vo-main-image"
              />
              <div className="servicedev3vo-image-overlay">
                <div className="servicedev3vo-overlay-text">
                  <span className="servicedev3vo-overlay-title">Technical</span>
                  <span className="servicedev3vo-overlay-subtitle">Storytelling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="servicedev3vo-text-content">
            <div className="servicedev3vo-main-content">
              <h2 className="servicedev3vo-service-title"> 🎥 Technical Storytelling & Video Creation</h2>
              <p className="servicedev3vo-service-description">
                Explain your product, research, or infrastructure to the world with content that's scientifically sound
                and highly shareable. Transform complex technical concepts into engaging narratives that resonate with
                your developer community.
              </p>

              <div className="servicedev3vo-action-links">
              <Link to="/brandamplification/Opengen">
                <button className="servicedev3vo-link-button primary">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                </Link>
                <button className="servicedev3vo-link-button secondary">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="servicedev3vo-resources-section">
              <h3 className="servicedev3vo-section-title">Explore our services</h3>
              <div className="servicedev3vo-resource-links">
                <button className="servicedev3vo-link-button tertiary">
                  <span style={{ color: "black" }}> YouTube & LinkedIn video series</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="servicedev3vo-link-button tertiary">
                  <span style={{ color: "black" }}>Engineering-led demos and explainers</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="servicedev3vo-link-button tertiary">
                  <span style={{ color: "black" }}> Founder story & product journey mini-docs</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="servicedev3vo-success-story">
              <p className="servicedev3vo-success-text">
                <strong>Recent projects include</strong> Data Clean room demos, AI infrastructure deep dives, and
                open-source launch explainers seen by <strong>100k+ professionals</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDev3;
