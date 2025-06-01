import { useEffect, useRef, useState } from "react"
import "../Design Opengen Component/Services.css"
import sample from '../assets/partnership.png'
import sample2 from '../assets/K.jpeg'
import sample3 from '../assets/brandpromotee.jpg'
import { Link, useLocation } from "react-router-dom"

const Services = () => {
  const location =useLocation();
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className={`modern-services-section ${isVisible ? "section-visible" : ""}`}>
      <div className="gradient-background">
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>

      <div className="modern-container">
        <div className="header-section">
          <div className="resources-tag">Services</div>
          <h1 className="main-heading" style={{color:'#ffffff'}}>Explore Developer Advocacy Services & Resources</h1>
        </div>

        <div className="cards-grid">
          <div className="modern-card">
            <div className="image-container">
              <img
                src={sample2}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Developer Advocacy</h3>
              <p className="card-text">Explore comprehensive how-to articles, tutorials, and instructional content to enhance your development skills.</p>
              <button className="action-button">
              <Link to="/services/Opengen" style={{textDecoration:'none'}}>
               <span style={{color:"white"}}>Know More</span>
                </Link>
                
              </button>
            </div>
          </div>

          <div className="modern-card">
            <div className="image-container">
              <img
                src={sample3}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Brand Amplification</h3>
              <p className="card-text">Access adoption and training resources to quickly onboard and maximize your Teams experience.</p>
              <button className="action-button">
               <Link to="/brandamplification/Opengen" style={{textDecoration:'none'}}>
                <span style={{color:"white"}}>Know More</span>
                </Link>
                 
              </button>
            </div>
          </div>

          <div className="modern-card">
            <div className="image-container">
              <img
                 src={sample}
                alt="Services"
                className="card-img"
              />
            </div>
            <div className="content-section">
              <h3 className="card-heading">Partnership</h3>
              <p className="card-text">Explore strategic partnership opportunities with us to leverage advanced solutions, foster industry leadership, and unlock new pathways for growth.</p>
              <button className="action-button">
               <Link to="/partnerships/Opengen" style={{textDecoration:'none'}}>
                <span style={{color:"white"}}>Know More</span>
                </Link>
                 
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
