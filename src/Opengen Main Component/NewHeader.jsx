"use client"

import { useState, useEffect } from "react"
import "../Design Opengen Component/Headernew.css"
import square1 from '../assets/C.jpeg'
import square2 from '../assets/M.jpeg'
import { Link } from "react-router-dom"
 
 

const Headernew = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

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

  return (
    <div className={`header-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
                <img src={square2} alt="Developer Dashboard" />
              </div>
              <div className="dashboard-image dashboard-2">
                <img src={square1} alt="Community Analytics" />
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
