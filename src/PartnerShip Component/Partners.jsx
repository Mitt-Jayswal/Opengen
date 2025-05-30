"use client"

import { useState, useEffect, useRef } from "react"
import "../PartnerShip Component/partners.css"
import image from '../assets/sample.avif'

const googlePartners = [
  { id: 1, image, name: "Google Search", category: "Search Engine" },
  { id: 2, image, name: "YouTube", category: "Video Platform" },
  { id: 3, image, name: "Google Maps", category: "Navigation" },
  { id: 4, image, name: "Gmail", category: "Email" },
  { id: 5, image, name: "Google Drive", category: "Cloud Storage" },
  { id: 6, image, name: "Google Photos", category: "Photo Storage" },
  { id: 7, image, name: "Google Cloud", category: "Cloud Computing" },
  { id: 8, image, name: "Android", category: "Mobile OS" },
]

const PartnersPage = () => {
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
    <section ref={sectionRef} className={`google-partners-section ${isVisible ? "google-visible" : ""}`}>
      <div className="google-geometric-bg"></div>
      <div className="google-content-wrapper">
        <div className="google-section-header">
          <div className="google-section-subtitle">Featured In</div>
          <h2 className="google-section-title">Previously scaled projects like Delta Lake and Apache Spark from internal projects to industry-trusted OSS used by 10,000+ companies.</h2>
          <p className="google-section-description">
          We empower developers driving innovation in construction and machinery. From real-time data to automation at scale, our tools support the world’s most complex projects. Code with purpose—build what moves industries.
          </p>
        </div>

        <div className="google-partners-container">
          {googlePartners.map((partner, index) => (
            <div key={partner.id} className="google-partner-box" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="google-partner-image-wrapper">
                <img src={partner.image || "/placeholder.svg"} alt={partner.name} className="google-partner-image" />
                <div className="google-image-overlay"></div>
              </div>
              <div className="google-partner-overlay">
                <div className="google-partner-name">{partner.name}</div>
                <div className="google-partner-category">{partner.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersPage
