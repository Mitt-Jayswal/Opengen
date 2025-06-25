import { useEffect, useRef } from "react"
import "../Design BrandAmplification Component/ContentBrand.css"
import whyimage from '../assets/P.jpeg'
import { Link,useLocation } from "react-router-dom"

const ContentBrand = () => {
    const location=useLocation();
  const sectionRef = useRef(null)


  const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
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
    <div className="page2-container" ref={sectionRef}>
      <div className="page2-header">
        <h1>Technology Evangelism Through Developer Advocacy</h1>
      </div>

      <div className="page2-content">
        <div className="page2-left-column">
          <h2>Why OpenGen?</h2>
          <ul>
            <li>Deep roots in open source & AI infrastructure</li>
            <li>Trusted by tech leaders like Databricks, TikTok, LinkedIn</li>
            <li>Expertise in turning complex ideas into compelling narratives</li>
            <li>
              Award winning projects experience featured in top media and work referenced in over 10000 organizations
            </li>
          </ul>

          <div className="page2-collaboration">
            <h3>Let's Collaborate</h3>
            <p>
              Whether you're a startup, open source project, R&D team or seeking Technical Marketing and Advocacy,
              OpenGen helps you connect with the developers, users, and enterprises who matter most.
            </p>
            <ScrollToTop to="/support/Opengen">
            <button className="page2-contact-button">Contact Us</button>
            </ScrollToTop>
          </div>
        </div>

        <div className="page2-right-column">
          <div className="page2-image-container">
            <img src={whyimage} alt="Developer Advocacy Team" className="page2-image" />
          </div>
          <div className="page2-text-container">
            <h3>Technology Evangelism</h3>
            <p>
              Our work has been featured in LinkedIn Top Voices, TED AI, United 
              Nations Digital Media, Linux Foundation, Grace Hopper Celebration, Business Insider, Forbes,
               United States Patent and TradeMark Office

            </p>
            <div className="page2-links">
              <span className="page2-link">
                Advocacy Strategy
              </span>
             <span className="page2-link">
                Technical Content
              </span>
            <span className="page2-link">
                Community Building
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBrand;
