import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FaCode, FaBullhorn, FaHandshake, FaUsers, FaBookOpen, FaEnvelope } from "react-icons/fa";
import "../Design Opengen Component/navbar.css";
import { Link } from "react-router-dom";
import logo from '../assets/logore.jpg';

const OpenNavbar = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const dropdownContainerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Dropdown open/close with delay to prevent flickering on hover out
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      dropdownTimeout.current = null;
    }, 150); // small delay to allow smooth hover transition
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="left-section">
          <div className="logo-container">
            <Link to="/" className="logo">
              <img src={logo} alt="okokoko" style={{ width: '50px', height: '50px' }} />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link to="/about/Opengen" onClick={handleNavClick}>About</Link>
              </li>
              <li
                className="services-dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={dropdownContainerRef}
              >
                <button
                  className="dropdown-button"
                  style={{ fontFamily: "Poppins, Arial, sans-serif",color:'#ffffff' }}
                >
                  Services
                </button>
                {servicesDropdownOpen && (
                  <div className="dropdown-content modern-dropdown">
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
        <div className="right-section">
          <div className="action-buttons">
            <Link to="/support/Opengen" className="signin-button" onClick={handleNavClick}>
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
            <span className="logo-text" style={{ color: "#e6c068", fontFamily: "Poppins, Arial, sans-serif" }}>OpenGen</span>
          </div>
          <button className="close-sidebar" onClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} type="button">
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <Link to="/about/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-nav-link">
                <FaUsers style={{ marginRight: 10, color: "#e6c068" }} /> <span style={{color:'#ffffff'}}>About Us</span>
              </Link>
            </li>
            <li className="mobile-dropdown">
              <button className="mobile-dropdown-button" onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} type="button">
                <FaCode style={{ marginRight: 10, color: "#e6c068" }} />
                <span style={{color:'#ffffff'}}>Services</span>
              </button>
              <div className={`mobile-dropdown-content ${servicesDropdownOpen ? "open" : ""}`}>
                <Link to="/services/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-dropdown-link">
                  <FaCode style={{ marginRight: 10, color: "#e6c068" }} />
                  <span style={{color:'#ffffff'}}>Developer Advocacy</span>
                </Link>
                <Link to="/brandamplification/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-dropdown-link">
                  <FaBullhorn style={{ marginRight: 10, color: "#e6c068" }} />
                  <span style={{color:'#ffffff'}}>Brand Amplification</span>
                </Link>
                {/* <Link to="/partnerships/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                  <FaHandshake style={{ marginRight: 10, color: "#0078d4" }} />
                  Partnership
                </Link> */}
              </div>
            </li>
            <li>
              <Link to="/community/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-nav-link">
                <FaUsers style={{ marginRight: 10, color: "#e6c068" }} /> <span style={{color:'#ffffff'}}>Community</span>
              </Link>
            </li>
            <li>
              <Link to="/learn/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-nav-link">
                <FaBookOpen style={{ marginRight: 10, color: "#e6c068" }} /> <span style={{color:'#ffffff'}}>Learn</span>
              </Link>
            </li>
            <li>
              <Link to="/support/Opengen" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }} className="mobile-nav-link">
                <FaEnvelope style={{ marginRight: 10, color: "#e6c068" }} /> <span style={{color:'#ffffff'}}>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-action-buttons">
          <Link to="/support/Opengen" className="mobile-signin-button" nClick={e => {
    toggleMenu(e);
    handleNavClick(e);
  }}>
            <FaEnvelope style={{ marginRight: 10, color: "#fff" }} />
            Get in Touch
          </Link>
        </div>
      </div>
      {/* Overlay for mobile sidebar */}
      {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default OpenNavbar;

