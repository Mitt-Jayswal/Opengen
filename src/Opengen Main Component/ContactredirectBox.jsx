import { useState, useEffect, useRef } from "react"
import "../Design Opengen Component/ContactRedirectBox.css"
import sample from '../assets/getintouchimage.jpg'
import { Link,useLocation } from "react-router-dom"


const ScrollToTopLink = ({ children, to, className, ...props }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Link to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
};

const ContactRedirectBox = () => {

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

    const location=useLocation();
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <section ref={sectionRef} className={`con-attbox-main-section-tact ${isVisible ? "con-attbox-visible-tact" : ""}`}>
      <div className="con-attbox-container-tact">
        <div className="con-attbox-card-tact">
          <div className="con-attbox-content-tact">
            <h1 className="con-attbox-title-tact">Get in touch with our team</h1>
            <p className="con-attbox-description-tact">
              Connect with our expert developers and advocacy specialists. We bring together technical expertise,
              community insights, and strategic guidance to help you build thriving developer ecosystems that your
              customers will love.
            </p>
            <Link to="/support/Opengen" className="con-attbox-link-tact" onClick={handleNavClick}>
              Contact our team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="con-attbox-image-container-tact">
            <div className="con-attbox-image-wrapper-tact">
              <img src={sample} alt="Abstract contact visualization" className="con-attbox-image-tact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactRedirectBox;
