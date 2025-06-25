import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { FaCode, FaBullhorn, FaHandshake, FaUsers, FaBookOpen, FaEnvelope } from "react-icons/fa"
import "../Design Opengen Component/Headernew.css"
import { Link } from "react-router-dom"
import square1 from '../assets/newimage2.png'
import square2 from '../assets/C.jpeg'
import logore from '../assets/logore.jpg'
 
const Headernew = () => {

   const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownTimeout = useRef(null)
  const dropdownContainerRef = useRef(null)

  const texts = [
    "Your Developer Community, Supercharged",
    "We Drive Connection, Trust, and Scalable Growth",
    "Advancing Data and AI Innovation Together",
    "Conducting Hackathons for Developer Excellence",
    "Building Powerful Developer Advocacy Networks",
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  // Split text into two halves for coloring
  const midPoint = Math.ceil(displayText.length / 2)
  const firstHalf = displayText.slice(0, midPoint)
  const secondHalf = displayText.slice(midPoint)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  // Dropdown open/close with delay to prevent flickering on hover out
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
      dropdownTimeout.current = null
    }
    setServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false)
      dropdownTimeout.current = null
    }, 150) // small delay to allow smooth hover transition
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className={`manhattan-wrapper ${isDarkMode ? "brooklyn-dark" : "queens-light"}`}>
      {/* Navbar */}
      <header className="bronx-navigation">
        <div className="staten-navbar">
          <div className="harlem-left">
            <div className="soho-brand">
              <Link to="/" className="tribeca-logo" onClick={handleNavClick}>
                 <img src={logore} alt="keratey" style={{width:'50px',height:'50px'}}/>
                <span className="chelsea-text" style={{ color: isDarkMode ? "#e6c068" : "#0078d4" }}>
                  
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="midtown-desktop">
              <ul className="village-links">
                <li>
                  <Link to="/about" onClick={handleNavClick}>About</Link>
                </li>
                <li
                  className="williamsburg-services"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownContainerRef}
                >
                  <button className="dumbo-dropdown">Services</button>
                  {servicesDropdownOpen && (
                    <div className="greenwich-menu">
                      <Link to="/services/Opengen" onClick={handleNavClick}>
                        <FaCode style={{ marginRight: 8, color: "#e6c068" }} />
                        Developer Advocacy
                      </Link>
                      <Link to="/brandamplification/Opengen" onClick={handleNavClick}>
                        <FaBullhorn style={{ marginRight: 8, color: "#e6c068" }} />
                        Brand Amplification
                      </Link>
                      {/* <Link to="/partnerships/Opengen">
                        <FaHandshake style={{ marginRight: 8, color: "#0078d4" }} />
                        Partnership
                      </Link> */}
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/community/Opengen" onClick={handleNavClick}>Community</Link>
                </li>
                <li>
                  <Link to="/learn/Opengen" onClick={handleNavClick}>Learn</Link>
                </li>
                <li>
                  <Link to="/support/Opengen" onClick={handleNavClick}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nolita-right">
            <div className="flatiron-actions">
              <Link to="/support/Opengen" className="meatpacking-signin" onClick={handleNavClick}>
                <FaEnvelope style={{ marginRight: 6, verticalAlign: "middle" }} />
                Get in Touch
              </Link>
            </div>
            <button className="chinatown-mobile" onClick={toggleMenu} aria-label="Toggle menu" type="button">
              <Menu size={24} />
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div className={`littleitaly-sidebar ${isOpen ? "open" : ""}`}>
          <div className="bowery-header">
            <div className="eastvillage-brand">
              <span
                className="chelsea-text"
                style={{ color: isDarkMode ? "#e6c068" : "#e6c068", fontFamily: "Poppins, Arial, sans-serif" }}
              >
              <Link to="/" style={{textDecoration:'none',color:'#e6c068'}} onClick={handleNavClick}>
                OpenGen
                </Link>
              </span>
            </div>
            <button className="westvillage-close" onClick={toggleMenu} type="button">
              <X size={24} />
            </button>
          </div>
          <nav className="uppereast-nav">
            <ul className="upperwest-links">
              <li>
                <Link to="/about" onClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="morningside-link" >
                  <FaUsers style={{ marginRight: 10, color: "#ffffff" }} /> About Us
                </Link>
              </li>
              <li className="inwood-dropdown">
                <button
                  className="washington-button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  type="button"
                >
                  <FaCode style={{ marginRight: 10, color: "#ffffff" }} />
                  <span style={{color:'#ffffff'}}>Services</span>
                </button>
                <div className={`hamilton-menu ${servicesDropdownOpen ? "open" : ""}`}>
                  <Link to="/services/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="lenox-link">
                    <FaCode style={{ marginRight: 10, color: "#e6c068" }} />
                    <span style={{color:'#ffffff'}}>Developer Advocacy</span>
                  </Link>
                  <Link to="/brandamplification/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="lenox-link">
                    <FaBullhorn style={{ marginRight: 10, color: "#e6c068" }} />
                    <span style={{color:'#ffffff'}}>Brand Amplification</span>
                  </Link>
                  {/* <Link to="/partnerships/Opengen" onClick={toggleMenu} className="lenox-link">
                    <FaHandshake style={{ marginRight: 10, color: "#ffffff" }} />
                    <span style={{color:'#ffffff'}}>Partnership</span>
                  </Link> */}
                </div>
              </li>
              <li>
                <Link to="/community/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="morningside-link">
                  <FaUsers style={{ marginRight: 10, color: "#ffffff" }} /> Community
                </Link>
              </li>
              <li>
                <Link to="/learn/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="morningside-link">
                  <FaBookOpen style={{ marginRight: 10, color: "#ffffff" }} /> Learn
                </Link>
              </li>
              <li>
                <Link to="/support/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="morningside-link">
                  <FaEnvelope style={{ marginRight: 10, color: "#ffffff" }} /> Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="riverside-actions">
            <Link to="/support/Opengen" className="central-signin" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} >
              <FaEnvelope style={{ marginRight: 10, color: "#fff" }} />
              Get in Touch
            </Link>
          </div>
        </div>
        {/* Overlay for mobile sidebar */}
        {isOpen && <div className="prospect-overlay" onClick={toggleMenu}></div>}
      </header>

      <div className="battery-background">
        <div className="financial-waves">
          <div className="wallstreet-wave1"></div>
          <div className="wallstreet-wave2"></div>
          <div className="wallstreet-wave3"></div>
        </div>

        <div className="broadway-content">
          <div className="times-left">
            <div className="herald-badge">
              <div className="madison-icon">
                 
              </div>
              <span className="penn-text">Introducing OpenGen</span>
            </div>

            <h1 className="empire-title">
              <span className="rockefeller-typewriter">
                <span className="fifth-gold">{firstHalf}</span>
                <span className="lexington-white">{secondHalf}</span>
              </span>
            </h1>

            <p className="park-description">
              Empowering developer communities through strategic advocacy, innovative hackathons, and scalable growth
              initiatives. We connect, inspire, and advance the future of data and AI innovation through meaningful
              developer engagement.
            </p>

            <Link to="/community/Opengen" onClick={handleNavClick}>
              <button className="columbus-button">
                Explore Our Community
                <svg
                  className="amsterdam-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

          <div className="brooklyn-right">
            <div className="queens-gallery">
              <div className="bronx-image1">
                <img src={square1} alt="Developer Dashboard" />
              </div>
              <div className="bronx-image2">
                <img src={square2} alt="Community Analytics" />
              </div>

              {/* Vertical Image Container */}
              <div className="staten-vertical">
                <h3 className="harlem-title">Featured Resources</h3>
                <div className="soho-item">
                  <div className="tribeca-icon">
                    <FaCode />
                  </div>
                  <div className="chelsea-content">
                    <h4>Developer Advocacy</h4>
                    <p>Join our latest OpenGen Blogs and Podcast</p>
                  </div>
                </div>
                <div className="soho-item">
                  <div className="tribeca-icon">
                    <FaBookOpen />
                  </div>
                  <div className="chelsea-content">
                    <h4>Brand Promoting</h4>
                    <p>Explore our guides</p>
                  </div>
                </div>
                <div className="soho-item">
                  <div className="tribeca-icon">
                    <FaUsers />
                  </div>
                  <div className="chelsea-content">
                    <h4>Community</h4>
                    <p>Join our events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        {/* <div className="midtown-toggle">
          <div className="village-line"></div>
          <div className="williamsburg-buttons">
            <button
              className={`dumbo-theme ${!isDarkMode ? "active" : ""}`}
              onClick={() => setIsDarkMode(false)}
              aria-label="Light mode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button
              className={`dumbo-theme ${isDarkMode ? "active" : ""}`}
              onClick={() => setIsDarkMode(true)}
              aria-label="Dark mode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Headernew;
