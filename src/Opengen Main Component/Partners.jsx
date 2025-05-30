"use client"

import { useState, useEffect, useRef } from "react"
import "../Design Opengen Component/Partner.css"
import image from "../assets/sample.avif"

const partners = [
  { id: 1, image, name: "Prodigal" },
  { id: 2, image, name: "Brainfish" },
  { id: 3, image, name: "ExamRoom.AI" },
  { id: 4, image, name: "DashToon" },
  { id: 5, image, name: "Games24" },
  { id: 6, image, name: "Aviva" },
  { id: 7, image, name: "Aviso" },
  { id: 8, image, name: "Siemens" },
  { id: 9, image, name: "OpenGen" },
  { id: 10, image, name: "TechCorp" },
  { id: 11, image, name: "DataFlow" },
  { id: 12, image, name: "CloudSync" },
]

const PartnersGoogle = () => {
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

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section ref={sectionRef} className={`partners-page-section ${isVisible ? "partners-visible" : ""}`}>
      <div className="partners-scroll-container">
        <div className="partners-scroll-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-logo-item">
              <div className="partner-logo-circle">
                <img src={partner.image || "/placeholder.svg"} alt={partner.name} className="partner-logo-img" />
              </div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersGoogle;
