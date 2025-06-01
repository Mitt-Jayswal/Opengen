import { useState, useEffect, useRef } from "react"
import "../Design Service Component/ServiceDev2.css"
import { Link } from "react-router-dom"

const ServiceDev2 = () => {
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

  const services = [
    {
      id: 1,
      icon: "🧑‍💻",
      iconColor: "#3b82f6",
      title: "Developer Advocacy as a Service",
      description: "Make your project the go-to for practitioners and contributors.",
      features: [
        "Contributor onboarding systems",
        "GitHub documentation + code walkthroughs",
        "Open-source launch playbooks",
        "Office hours & live Q&A sessions with the community",
        "Technical content: blogs, guides, templates, cookbooks",
      ],
      successStory:
        "Previously scaled projects like Delta Lake and Apache Spark from internal projects to industry-trusted OSS used by 10,000+ companies.",
    },
     
    {
      id: 3,
      icon: "📈",
      iconColor: "#8b5cf6",
      title: "Ecosystem Positioning & Thought Leadership",
      description: "Get seen by the right builders, buyers, and believers.",
      features: [
        "Keynote and conference amplification",
        "Industry trend breakdowns with your POV",
        "Strategy alignment for developer-first GTM",
        "Co-branded blogs, LinkedIn posts and roundtables",
        "Community Meetups and Hackathons",
      ],
      successStory:
        "Helping companies establish thought leadership in competitive markets through strategic positioning and content.",
    },
  ]

  return (
    <section className="samplebody">
    <div className="servicedev2-container">
      {/* Header Section */}
     
       
      {/* Services Grid Section */}
      <section ref={sectionRef} className={`services-grid-section ${isVisible ? "services-visible" : ""}`}>
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="service-header">
                  <div
                    className="service-icon"
                    style={{ backgroundColor: `${service.iconColor}15`, color: service.iconColor }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet" style={{ color: service.iconColor }}>
                        ⭐
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="success-story">
                  <p className="success-text">{service.successStory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-heading">Ready to build a thriving developer community?</h2>
          <p className="cta-description">
            Join the growing number of projects that have transformed their developer experience with our advocacy
            services.
          </p>
          <div className="cta-buttons">
          <Link to="/support/Opengen">
            <button className="cta-button primary">
              Schedule a Consultation
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
          </div>
        </div>
      </section>
    </div>
    </section>
  )
}

export default ServiceDev2;
