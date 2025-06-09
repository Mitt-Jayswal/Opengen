"use client"

import { useState, useEffect, useRef } from "react"
import "../Design Opengen Component/Partner.css"
import united from '../assets/partnerlogouno.jpeg'
import linux from '../assets/partnerlogolinux.png'
 
const partners = [
  { id: 1, name: "United Nation" },
  { id: 2, name: "Linux Foundation" },
  { id: 3, name: "Linkedin" },
  { id: 4, name: "OpenGen" },
  { id: 5, name: "OpenGen" },
  { id: 6, name: "OpenGen" },
  { id: 7, name: "OpenGen" },
  { id: 8, name: "OpenGen" },
  { id: 9, name: "OpenGen" },
  { id: 10, name: "OpenGen" },
  { id: 11, name: "OpenGen" },
  { id: 12, name: "OpenGen" },
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

  // Function to get image for each partner
  const getPartnerImage = (partnerId) => {
    switch (partnerId) {
      case 1:
        return <img src={united} alt="United Nation" className="partner-logo-img" />
      case 2:
        return <img src={linux} alt="Linux Foundation" className="partner-logo-img" />
      case 3:
        return <img src="/placeholder.svg?height=50&width=80" alt="Linkedin" className="partner-logo-img" />
      case 4:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 5:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 6:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 7:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 8:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 9:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 10:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 11:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      case 12:
        return <img src="/placeholder.svg?height=50&width=80" alt="OpenGen" className="partner-logo-img" />
      default:
        return <img src="/placeholder.svg?height=50&width=80" alt="Default" className="partner-logo-img" />
    }
  }

  return (
    <section ref={sectionRef} className={`partners-page-section ${isVisible ? "partners-visible" : ""}`}>
      <div className="partners-scroll-container">
        <div className="partners-scroll-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-logo-item">
              {getPartnerImage(partner.id)}
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersGoogle;
