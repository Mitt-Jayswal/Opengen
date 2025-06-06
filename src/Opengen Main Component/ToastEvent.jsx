import { useState, useEffect } from "react"
import '../Design Opengen Component/EventDesign.css'
import Event from '../assets/events.jpeg'
 
const EventsToast = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const showToast = () => {
      setIsVisible(true)
      setIsAnimating(true)

      // Hide toast after 6 seconds
      setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => setIsVisible(false), 500) // Wait for exit animation
      }, 6000)
    }

    // Show toast immediately on mount
    showToast()

    // Then show every 10 seconds
    const interval = setInterval(showToast, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleSubscribe = () => {
    // Add your subscription logic here
    console.log("Subscribe clicked!")
  }

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 500)
  }

  if (!isVisible) return null

  return (
    <div className={`toa-overlay ${isAnimating ? "toa-show" : "toa-hide"}`}>
      <div className="toa-container">
        <button className="toa-close-btn" onClick={handleClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="toa-content">
          <div className="toa-image-section">
            <div className="bike-image-container">
              <img
                src={Event}
                alt="Data + AI Summit"
                className="bike-event-image"
              />
              <div className="bike-image-overlay">
                <div className="bike-pulse-ring"></div>
                <div className="bike-pulse-ring bike-delay-1"></div>
                <div className="bike-pulse-ring bike-delay-2"></div>
              </div>
            </div>

            <div className="bike-next-week-badge">
              <div className="bike-badge-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Next Week!</span>
              </div>
            </div>
          </div>

          <div className="toa-text-section">
            <div className="bike-event-category">
              <span className="bike-category-tag">🎯 UPCOMING EVENT</span>
            </div>

            <h3 className="bike-event-title">
              Apache Spark Community to Data + AI Summit | From Spark to GenAI, Agents and Beyond
            </h3>

            <p className="bike-event-description">
              Join the most influential gathering in the data and AI ecosystem. From distributed computing to Generative
              AI, AI agents, and production-grade LLMs.
            </p>

            <div className="bike-event-highlights">
              <div className="bike-highlight-item">
                <span className="bike-highlight-icon">🚀</span>
                <span>Latest AI Innovations</span>
              </div>
              <div className="bike-highlight-item">
                <span className="bike-highlight-icon">🤝</span>
                <span>Industry Leaders</span>
              </div>
              <div className="bike-highlight-item">
                <span className="bike-highlight-icon">💡</span>
                <span>Hands-on Sessions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="toa-footer">
          <button className="bike-subscribe-btn" onClick={handleSubscribe}>
            <span className="bike-btn-text">Subscribe for More Events</span>
            <div className="bike-btn-shine"></div>
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
    </div>
  )
}

export default EventsToast;
