import { useState, useEffect, useRef } from "react"
import "../Design Service Component/ServiceDev2.css"
import { Link } from "react-router-dom"

const ServiceDev2 = () => {

   const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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
    <section className="ser-otter-shirt-ics">
      <div className="ser-elephant-shirt-ics">
        {/* Services Grid Section */}
        <section ref={sectionRef} className={`ser-tiger-shirt-ics ${isVisible ? "ser-tiger-visible-shirt-ics" : ""}`}>
          <div className="ser-dolphin-shirt-ics">
            <div className="ser-lion-shirt-ics">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="ser-bear-shirt-ics"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="ser-wolf-shirt-ics">
                    <div
                      className="ser-panda-shirt-ics"
                      style={{ backgroundColor: `${service.iconColor}15`, color: service.iconColor }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="ser-giraffe-shirt-ics">{service.title}</h3>
                  </div>
                  <p className="ser-fox-shirt-ics">{service.description}</p>
                  <ul className="ser-horse-shirt-ics">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="ser-koala-shirt-ics">
                        <span className="ser-leopard-shirt-ics" style={{ color: service.iconColor }}>
                          ⭐
                        </span>
                        <span className="ser-zebra-shirt-ics">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="ser-whale-shirt-ics">
                    <p className="ser-rabbit-shirt-ics">{service.successStory}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ser-monkey-shirt-ics">
          <div className="ser-sheep-shirt-ics">
            <h2 className="ser-camel-shirt-ics">Ready to build a thriving developer community?</h2>
            <p className="ser-bison-shirt-ics">
              Join the growing number of projects that have transformed their developer experience with our advocacy
              services.
            </p>
            <div className="ser-cow-shirt-ics">
              <Link to="/support/Opengen" onClick={handleNavClick}>
                <button className="ser-cat-shirt-ics ser-cat-primary-shirt-ics">
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
