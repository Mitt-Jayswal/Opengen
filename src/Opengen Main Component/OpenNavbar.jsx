"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../Design Opengen Component/navbar.css"
import { Link } from "react-router-dom"

const OpenNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Toggle for mobile dropdown
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen)
  }

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="left-section">
          <div className="logo-container">
            <a href="/" className="logo">
              <span className="logo-text">OpenGen</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
               
              <li>
                <Link to="/about/Opengen">About</Link>
              </li>
              <li className="services-dropdown-container">
                <button
                  className="dropdown-button"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                >
                  Services
                </button>
                {servicesDropdownOpen && (
                  <div
                    className="dropdown-content"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link to="/services/Opengen">Developer Advocacy</Link>
                    <Link to="/services/Opengen">Brand Amplification</Link>
                    <Link to="/services/Opengen">Partnership</Link>
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
            <a href="/" className="signin-button">
              Contact OpenGen
            </a>
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
            <span className="logo-text">OpenGen</span>
          </div>
          <button className="close-sidebar" onClick={toggleMenu} type="button">
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
             
            <li>
              <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                About Us
              </Link>
            </li>
            <li className="mobile-dropdown">
              <button className="mobile-dropdown-button" onClick={toggleServicesDropdown} type="button">
                Services
              </button>
              <div className={`mobile-dropdown-content ${servicesDropdownOpen ? "open" : ""}`}>
                <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                  Developer Advocacy
                </Link>
                <a href="/services/brand-amplification" onClick={toggleMenu} className="mobile-dropdown-link">
                  Brand Amplification
                </a>
                <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-dropdown-link">
                  Partnership
                </Link>
              </div>
            </li>
            <li>
              <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                Community Connect
              </Link>
            </li>
            <li>
              <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/about/Opengen" onClick={toggleMenu} className="mobile-nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-action-buttons">
          <Link to="/about/Opengen" className="mobile-signin-button" onClick={toggleMenu}>
            Contact Opengen
          </Link>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </header>
  )
}

export default OpenNavbar;