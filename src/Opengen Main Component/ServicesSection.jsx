import { useEffect, useRef, useState } from "react"
import "../Design Opengen Component/Services.css"
import sample from '../assets/sample.avif'

const Services = () => {
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
    <section ref={sectionRef} className={`modern-services-section ${isVisible ? "section-visible" : ""}`}>
      <div className="gradient-background">
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>

      <div className="modern-container">
        <div className="header-section">
          <div className="resources-tag">Services</div>
          <h1 className="main-heading">Explore Developer Advocacy Services & Resources</h1>
        </div>

        <div className="cards-grid">
          <div className="modern-card">
            <div className="image-container">
              <img
                src={sample}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Developer Advocacy</h3>
              <p className="card-text">Explore comprehensive how-to articles, tutorials, and instructional content to enhance your development skills.</p>
              <button className="action-button">
                <span>Learn more</span>
                <svg className="arrow-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M6.5 3L11 8l-4.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="modern-card">
            <div className="image-container">
              <img
                src={sample}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Brand Amplification</h3>
              <p className="card-text">Access adoption and training resources to quickly onboard and maximize your Teams experience.</p>
              <button className="action-button">
                <span>Learn more</span>
                <svg className="arrow-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M6.5 3L11 8l-4.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="modern-card">
            <div className="image-container">
              <img
                 src={sample}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Partnership</h3>
              <p className="card-text">Explore strategic partnership opportunities with us to leverage advanced solutions, foster industry leadership, and unlock new pathways for growth.</p>
              <button className="action-button">
                <span>Go to the blog</span>
                <svg className="arrow-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M6.5 3L11 8l-4.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
