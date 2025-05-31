import { useEffect, useRef } from "react"
import "../Design BrandAmplification Component/CollaborativeAppsPage.css"
import image from '../assets/E.jpeg'
import { Link } from "react-router-dom"

const Collaborativepage = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="advocacy-container">
      <div className="advocacy-content">
        <h1 className="advocacy-title animate-on-scroll">What is Developer Advocacy?</h1>
        <p className="advocacy-description animate-on-scroll">
          Developer advocacy builds trust, drives engagement, and turns developers into brand champions. By connecting with the tech community, we amplify your brand’s impact and foster organic growth
        </p>

        <div className="advocacy-cards">
          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon trust-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="advocacy-card-title">Building Trust & Credibility</h2>
            <p className="advocacy-card-description">
              Establish authentic connections with developers by providing valuable resources, transparent
              communication, and consistent support that builds lasting trust in your brand and products.
            </p>
          </div>

          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon connect-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="advocacy-card-title">Community Engagement</h2>
            <p className="advocacy-card-description">
              Bring developer workflows, contextualized insights, and actionable feedback into every interaction - in
              real-time and over time, creating a thriving ecosystem around your technology.
            </p>
          </div>

          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon insight-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="advocacy-card-title">Thought Leadership</h2>
            <p className="advocacy-card-description">
              Unlock business insights and open new frontiers of innovation by positioning your brand as an industry
              titan through strategic content, speaking engagements, and community leadership.
            </p>
          </div>
        </div>

        <h1 className="advocacy-subtitle animate-on-scroll">
          Transform your strategy into developer advocacy excellence
        </h1>

        <div className="advocacy-banner animate-on-scroll">
          <div className="advocacy-banner-image">
            <img
              src={image}
              alt="Developer Advocacy Visualization"
            />
          </div>
          <div className="advocacy-banner-content">
            <h2 className="advocacy-banner-title">Get started building your developer advocacy program</h2>
            <p className="advocacy-banner-description">
              Strategic advocacy makes your developer relations more personal and impactful. Our experts make your
              advocacy program more capable.
            </p>
            <Link to="/about/Opengen">
            <button className="advocacy-button">Know More about OpenGen</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaborativepage;
