import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { FaCode, FaBullhorn, FaHandshake, FaUsers, FaBookOpen, FaEnvelope } from "react-icons/fa"
import "../Design Opengen Component/Headernew.css"
import { Link } from "react-router-dom"
import square1 from '../assets/C.jpeg'
import square2 from '../assets/M.jpeg'

const Headernew = () => {
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
    <div className={`header-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <header className="navbar-container">
        <div className="navbar">
          <div className="left-section">
            <div className="logo-container">
              <Link to="/" className="logo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill={isDarkMode ? "#e6c068" : "#0078d4"}
                    stroke={isDarkMode ? "#e6c068" : "#0078d4"}
                    strokeWidth="1"
                  />
                </svg>
                <span className="logo-text" style={{ color: isDarkMode ? "#e6c068" : "#0078d4" }}>
                  OpenGen
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-links">
                <li>
                  <Link to="/about/Opengen">About</Link>
                </li>
                <li
                  className="services-dropdown-container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownContainerRef}
                >
                  <button className="dropdown-button">Services</button>
                  {servicesDropdownOpen && (
                    <div className="dropdown-content modern-dropdown">
                      <Link to="/services/Opengen">
                        <FaCode style={{ marginRight: 8, color: "#0078d4" }} />
                        Developer Advocacy
                      </Link>
                      <Link to="/brandamplification/Opengen">
                        <FaBullhorn style={{ marginRight: 8, color: "#0078d4" }} />
                        Brand Amplification
                      </Link>
                      <Link to="/partnerships/Opengen">
                        <FaHandshake style={{ marginRight: 8, color: "#0078d4" }} />
                        Partnership
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/community/Opengen">Community</Link>
                </li>
                <li>
                  <Link to="/learn/Opengen">Learn</Link>
                </li>
                <li>
                  <Link to="/support/Opengen">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right-section">
            <div className="action-buttons">
              <Link to="/support/Opengen" className="signin-button">
                <FaEnvelope style={{ marginRight: 6, verticalAlign: "middle" }} />
                Get in Touch
              </Link>
            </div>
            <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu" type="button">
              <Menu size={24} />
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
          <div className="mobile-sidebar-header">
            <div className="mobile-logo">
              <span
                className="logo-text"
                style={{ color: isDarkMode ? "#e6c068" : "#0078d4", fontFamily: "Poppins, Arial, sans-serif" }}
              >
                OpenGen
              </span>
            </div>
            <button className="close-sidebar" onClick={toggleMenu} type="button">
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              <li>
                <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                  <FaUsers style={{ marginRight: 10, color: "#000000" }} /> About Us
                </Link>
              </li>
              <li className="mobile-dropdown">
                <button
                  className="mobile-dropdown-button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  type="button"
                >
                  <FaCode style={{ marginRight: 10, color: "#000000" }} />
                  Services
                </button>
                <div className={`mobile-dropdown-content ${servicesDropdownOpen ? "open" : ""}`}>
                  <Link to="/services/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                    <FaCode style={{ marginRight: 10, color: "#000000" }} />
                    Developer Advocacy
                  </Link>
                  <Link to="/brandamplification/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                    <FaBullhorn style={{ marginRight: 10, color: "#000000" }} />
                    Brand Amplification
                  </Link>
                  <Link to="/partnerships/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                    <FaHandshake style={{ marginRight: 10, color: "#000000" }} />
                    Partnership
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/community/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                  <FaUsers style={{ marginRight: 10, color: "#000000" }} /> Community Connect
                </Link>
              </li>
              <li>
                <Link to="/learn/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                  <FaBookOpen style={{ marginRight: 10, color: "#000000" }} /> Learn
                </Link>
              </li>
              <li>
                <Link to="/support/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                  <FaEnvelope style={{ marginRight: 10, color: "#000000" }} /> Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-action-buttons">
            <Link to="/support/Opengen" className="mobile-signin-button" onClick={toggleMenu}>
              <FaEnvelope style={{ marginRight: 10, color: "#fff" }} />
              Get in Touch
            </Link>
          </div>
        </div>
        {/* Overlay for mobile sidebar */}
        {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
      </header>

      <div className="header-background">
        {/* 3D Geometric Background */}
        <div className="geometric-background">
          <div className="geometric-shape shape1"></div>
          <div className="geometric-shape shape2"></div>
          <div className="geometric-shape shape3"></div>
          <div className="geometric-shape shape4"></div>
          <div className="geometric-shape shape5"></div>
          <div className="geometric-shape shape6"></div>
          <div className="geometric-shape shape7"></div>
          <div className="geometric-shape shape8"></div>
        </div>

        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>

          {/* 3D Squares */}
          <div className="squares-container">
            <div className="square square1"></div>
            <div className="square square2"></div>
            <div className="square square3"></div>
            <div className="square square4"></div>
            <div className="square square5"></div>
            <div className="square square6"></div>
          </div>
        </div>

        <div className="header-content">
          <div className="header-left">
            <div className="templates-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                </svg>
              </div>
              <span className="badge-text">Introducing OpenGen</span>
            </div>

            <h1 className="header-title">
              <span className="typewriter-text">
                <span className="text-gold">{firstHalf}</span>
                <span className="text-white">{secondHalf}</span>
              </span>
            </h1>

            <p className="header-description">
              Empowering developer communities through strategic advocacy, innovative hackathons, and scalable growth
              initiatives. We connect, inspire, and advance the future of data and AI innovation through meaningful
              developer engagement.
            </p>

            <Link to="/community/Opengen">
              <button className="browse-button">
                Explore Our Community
                <svg
                  className="button-arrow"
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

          <div className="header-right">
            <div className="dashboard-images">
              <div className="dashboard-image dashboard-1">
                <img src={square1} alt="Developer Dashboard" />
              </div>
              <div className="dashboard-image dashboard-2">
                <img src={square2} alt="Community Analytics" />
              </div>

              {/* Vertical Image Container */}
              <div className="vertical-image-container">
                <h3 className="vertical-image-title">Featured Resources</h3>
                <div className="vertical-image-item">
                  <div className="vertical-image-icon">
                    <FaCode />
                  </div>
                  <div className="vertical-image-content">
                    <h4>Developer Tools</h4>
                    <p>Access our latest SDKs</p>
                  </div>
                </div>
                <div className="vertical-image-item">
                  <div className="vertical-image-icon">
                    <FaBookOpen />
                  </div>
                  <div className="vertical-image-content">
                    <h4>Documentation</h4>
                    <p>Explore our guides</p>
                  </div>
                </div>
                <div className="vertical-image-item">
                  <div className="vertical-image-icon">
                    <FaUsers />
                  </div>
                  <div className="vertical-image-content">
                    <h4>Community</h4>
                    <p>Join our events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="theme-toggle-container">
          <div className="theme-toggle-line"></div>
          <div className="theme-toggle-buttons">
            <button
              className={`theme-button ${!isDarkMode ? "active" : ""}`}
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
              className={`theme-button ${isDarkMode ? "active" : ""}`}
              onClick={() => setIsDarkMode(true)}
              aria-label="Dark mode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headernew;
