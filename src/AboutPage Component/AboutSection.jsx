import { useEffect, useRef, useState } from "react"
import { FaAward, FaLinkedin, FaUsers, FaGithub } from "react-icons/fa"
import "../Design About Component/AboutSection.css"
import sample from '../assets/H.jpeg'
import sample2 from '../assets/AIimage.png'
import { Link } from "react-router-dom"

const AboutSection = () => {
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
    <section ref={sectionRef} className={`about-section ${isVisible ? "visible" : ""}`}>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Empowering open source and enterprise innovation through developer advocacy</h1>

          <p className="about-description">
            OpenGen.Tech provides developer advocacy as a service for organizations building in artificial intelligence,
            data science, data engineering, and open source. We help teams scale their impact—whether it's through
            driving community adoption, creating powerful technical content, or building trust around emerging
            technologies.
          </p>

          <p className="about-description">
            OpenGen is founded by Vini Jaiswal, a seasoned AI and data practitioner, engineer, and global open source
            leader. She has been recognized as:
          </p>

          <ul className="achievements-list">
            <li className="achievement-item">
              <FaLinkedin className="achievement-icon" />
              <span>LinkedIn's Top Voice in AI & Data Engineering (2024)</span>
            </li>
            <li className="achievement-item">
              <FaAward className="achievement-icon" />
              <span>Top 30 Women in AI (2023)</span>
            </li>
            <li className="achievement-item">
              <FaUsers className="achievement-icon" />
              <span>Chair of the Linux Foundation AI & Data Technical Advisory Council</span>
            </li>
            <li className="achievement-item">
              <FaGithub className="achievement-icon" />
              <span>Co-chair of Grace Hopper's Open Source Day</span>
            </li>
          </ul>

          <p className="about-description">
            With years of hands-on experience across enterprise and open-source ecosystems, Vini created OpenGen to
            support projects that deserve visibility, adoption, and developer mindshare.
          </p>

          <Link to="/services/Opengen" className="explore-button">
            Explore Our Services
          </Link>
          
        </div>

        <div className="about-visuals">
          <div className="visual-element triangle-top"></div>
          

          <div className="background-square"></div>

          <div className="image-collage">
            

           
              <div className="arrow-container">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
             

            <div className="image-circle bottom-left-circle">
              <img
               src={sample2}
                alt="Tech team"
                className="circle-img"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
