import { useEffect, useRef, useState } from "react"
import "../Design Community Component/CommunityHero.css"

const CommunityHero = () => {
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
    <section ref={sectionRef} className={`community-section ${isVisible ? "visible" : ""}`}>
      <div className="community-container">
        <div className="community-card">
          <div className="grid-background">
            {/* Grid lines */}
            <div className="grid-line horizontal-line-1"></div>
            <div className="grid-line horizontal-line-2"></div>
            <div className="grid-line vertical-line-1"></div>
            <div className="grid-line vertical-line-2"></div>

            {/* Grid squares */}
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className={`grid-square square-${index + 1}`}></div>
            ))}
          </div>

          <div className="community-content">
            <div className="app-icons">
               
            </div>

            <h2 className="community-title">Join the OpenGen community</h2>
            <p className="community-description">
              Join our 1000+ developer advocacy community and contribute to a more collaborative and innovative tech
              ecosystem.
            </p>

            <div className="community-actions">
              <button className="start-button">
                Start Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="no-card-text">OpenGen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityHero;
