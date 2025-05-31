import { useEffect, useState } from "react"
import "../Design Opengen Component/header-section.css"
import { Link,useLocation } from "react-router-dom"
import square1 from '../assets/G.jpeg'
import square2 from '../assets/square2.png'
import square3 from '../assets/square3.png'

const HeaderSection = () => {
  const location=useLocation();
  const [isVisible, setIsVisible] = useState(false)


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


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="manhattan-hero">
      <div className="brooklyn-atmosphere">
        <div className="chicago-backdrop"></div>
        <div className="nevada-particles">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className={`texas-dot texas-dot-${i + 1}`}></div>
          ))}
        </div>
        <div className="california-waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      <div className={`denver-showcase ${isVisible ? "visible" : ""}`}>
        <div className="phoenix-layout">
          <div className="seattle-narrative">
            <div className="portland-content">
              <h1 className="vegas-headline">
              Your Developer Community, Supercharged —  
                <span className="miami-accent"> We Drive Connection, Trust, and Scalable Growth for advancing data and AI innovation</span>
              </h1>
              <p className="atlanta-description">
                We bridge the gap between cutting-edge technology and developer communities. Our mission is to empower
                developers, foster innovation, and create meaningful connections that drive the future of software
                development.
              </p>
              <div className="boston-actions">
                <button className="dallas-primary">
                  <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <ScrollToTopLink to="/about/Opengen" style={{textDecoration:'none',color:'white'}}>
                 Know More About OpenGen
                 </ScrollToTopLink>
                </button>
                 
              </div>
            </div>
          </div>
          

          <div className="orlando-gallery">
            <div className="tampa-showcase">
              <div className="triangle-shape triangle-right"></div>
              <div className="triangle-shape triangle-bottom"></div>
              <div className="nashville-frame">
                <div className="raleigh-portrait raleigh-first">
                  <img src={square1} alt="Developer" />
                </div>
                <div className="raleigh-portrait raleigh-second">
                  <img src={square2} alt="Developer" />
                </div>
                <div className="raleigh-portrait raleigh-third">
                  <img src={square3} alt="Developer" />
                </div>
                <div className="richmond-navigator">
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection;
