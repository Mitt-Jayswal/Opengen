import { useState, useEffect, useRef } from "react"
import { FaEnvelope, FaBell, FaArrowRight, FaCheckCircle } from "react-icons/fa"
import "../Design Opengen Component/Newsletter.css"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element comes into view
      },
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className="bodynewsteller">
    <section ref={sectionRef} className={`newsletter-container ${isVisible ? "animate-in" : ""}`}>
      <div className="newsletter-content">
        <div className="newsletter-left">
          <div className="newsletter-icon-container">
            <FaBell className="newsletter-icon" style={{color:'#e6c068'}} />
          </div>
          <div className="newsletter-text">
            <h2 className="newsletter-title">Get our newsletter</h2>
            <p className="newsletter-description">
              Sign up for monthly updates from Opengen - developer advocacy as a service for organizations building in
              artificial intelligence, data science, data engineering, and open source.
            </p>

            {!isSubmitted ? (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="input-container">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`newsletter-input ${error ? "input-error" : ""}`}
                  />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button
                  type="submit"
                  className={`newsletter-button ${isLoading ? "loading" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      Sign up
                      <FaArrowRight className="button-icon" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <p>Thank you for subscribing! Check your email for confirmation.</p>
              </div>
            )}
          </div>
        </div>

        <div className="newsletter-right">
          <div className="newsletter-features">
            <div className="feature">
              <div className="feature-dot"></div>
              <span>AI insights</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Developer resources</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Industry trends</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Informative Blogs and Podcast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Newsletter;
