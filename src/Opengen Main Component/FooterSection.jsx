"use client"

import { useState } from "react"
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp, FaHeart } from "react-icons/fa"
import "../Design Opengen Component/Footer.css"
import {Link} from 'react-router-dom';

const FooterSection = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  return (
    <>
       
      <footer className="footer-container">
        <div className="footer-content">
          {/* Desktop View */}
          <div className="footer-desktop">
            {/* Left: Company logo and info */}
            <div className="footer-company-info">
              <div className="company-logo">
                <div className="logo-icon">
                  <div className="logo-shape"></div>
                </div>
                <div className="company-info">
                  <span className="company-name">Opengen</span>
                  <p className="company-tagline">Empowering developers through advocacy and innovation</p>
                </div>
              </div>
            </div>

            {/* Middle: Navigation columns */}
            <div className="footer-nav-columns">
              <div className="footer-column">
                <h3>SOFTWARE ADVOCACY</h3>
                <ul>
                  <li>
                    <Link to="/">Community Connect</Link>
                  </li>
                  <li>
                    <a href="#community-support">Community Event</a>
                  </li>
                  <li>
                    <a href="#developer-resources">Community build</a>
                  </li>
                  <li>
                    <a href="#open-source">Community Get Involved</a>
                  </li>
                  <li>
                    <a href="#advocacy-programs">Learn podcast</a>
                  </li>
                  <li>
                    <a href="#tech-ambassadors">Learn Blogs</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>BUSINESS</h3>
                <ul>
                  <li>
                    <a href="#solutions">Solutions</a>
                  </li>
                  <li>
                    <a href="#enterprise">Enterprise</a>
                  </li>
                  <li>
                    <a href="#partners">Partners</a>
                  </li>
                  <li>
                    <a href="#case-studies">Case Studies</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#support-plans">Support Plans</a>
                  </li>
                  <li>
                    <a href="#consulting">Consulting</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>DEVELOPER & IT</h3>
                <ul>
                  <li>
                    <a href="#documentation">Documentation</a>
                  </li>
                  <li>
                    <a href="#api-reference">API Reference</a>
                  </li>
                  <li>
                    <a href="#developer-tools">Developer Tools</a>
                  </li>
                  <li>
                    <a href="#sdk">SDK</a>
                  </li>
                  <li>
                    <a href="#community">Community</a>
                  </li>
                  <li>
                    <a href="#marketplace">Marketplace</a>
                  </li>
                  <li>
                    <a href="#tech-blog">Tech Blog</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>COMPANY</h3>
                <ul>
                  <li>
                    <Link to="/about/Opengen">About Us</Link>
                  </li>
                  <li>
                    <a href="#careers">Services</a>
                  </li>
                  <li>
                    <a href="#news">Community</a>
                  </li>
                  <li>
                    <a href="#investors">Learn</a>
                  </li>
                  <li>
                    <a href="#sustainability">Contact OpenGen</a>
                  </li>
                   
                </ul>
              </div>
            </div>

            {/* Right: Social links */}
            <div className="footer-social">
              <h3 className="follow-us-text">FOLLOW US</h3>
              <div className="social-links-horizontal">
                <a href="https://twitter.com/opengen" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/company/opengen" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/opengen" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/opengen" className="social-icon" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="footer-mobile">
            <div className="footer-logo-section">
              <div className="company-logo">
                <div className="logo-icon">
                  <div className="logo-shape"></div>
                </div>
                <div className="company-info">
                  <span className="company-name">Opengen</span>
                  <p className="company-tagline">Empowering developers through advocacy and innovation</p>
                </div>
              </div>
            </div>

            <div className="footer-accordion">
              <div className="footer-section">
                <div className="section-header" onClick={() => toggleSection("advocacy")}>
                  <h3>SOFTWARE ADVOCACY</h3>
                  {openSection === "advocacy" ? (
                    <FaChevronUp className="dropdown-arrow" />
                  ) : (
                    <FaChevronDown className="dropdown-arrow" />
                  )}
                </div>
                <div className={`section-content ${openSection === "advocacy" ? "open" : ""}`}>
                  <ul className="section-links">
                    <li>
                      <a href="#best-practices">Best Practices</a>
                    </li>
                    <li>
                      <a href="#community-support">Community Support</a>
                    </li>
                    <li>
                      <a href="#developer-resources">Developer Resources</a>
                    </li>
                    <li>
                      <a href="#open-source">Open Source</a>
                    </li>
                    <li>
                      <a href="#advocacy-programs">Advocacy Programs</a>
                    </li>
                    <li>
                      <a href="#tech-ambassadors">Tech Ambassadors</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <div className="section-header" onClick={() => toggleSection("business")}>
                  <h3>BUSINESS</h3>
                  {openSection === "business" ? (
                    <FaChevronUp className="dropdown-arrow" />
                  ) : (
                    <FaChevronDown className="dropdown-arrow" />
                  )}
                </div>
                <div className={`section-content ${openSection === "business" ? "open" : ""}`}>
                  <ul className="section-links">
                    <li>
                      <a href="#solutions">Solutions</a>
                    </li>
                    <li>
                      <a href="#enterprise">Enterprise</a>
                    </li>
                    <li>
                      <a href="#partners">Partners</a>
                    </li>
                    <li>
                      <a href="#case-studies">Case Studies</a>
                    </li>
                    <li>
                      <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="#support-plans">Support Plans</a>
                    </li>
                    <li>
                      <a href="#consulting">Consulting</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <div className="section-header" onClick={() => toggleSection("developer")}>
                  <h3>DEVELOPER & IT</h3>
                  {openSection === "developer" ? (
                    <FaChevronUp className="dropdown-arrow" />
                  ) : (
                    <FaChevronDown className="dropdown-arrow" />
                  )}
                </div>
                <div className={`section-content ${openSection === "developer" ? "open" : ""}`}>
                  <ul className="section-links">
                    <li>
                      <a href="#documentation">Documentation</a>
                    </li>
                    <li>
                      <a href="#api-reference">API Reference</a>
                    </li>
                    <li>
                      <a href="#developer-tools">Developer Tools</a>
                    </li>
                    <li>
                      <a href="#sdk">SDK</a>
                    </li>
                    <li>
                      <a href="#community">Community</a>
                    </li>
                    <li>
                      <a href="#marketplace">Marketplace</a>
                    </li>
                    <li>
                      <a href="#tech-blog">Tech Blog</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <div className="section-header" onClick={() => toggleSection("company")}>
                  <h3>COMPANY</h3>
                  {openSection === "company" ? (
                    <FaChevronUp className="dropdown-arrow" />
                  ) : (
                    <FaChevronDown className="dropdown-arrow" />
                  )}
                </div>
                <div className={`section-content ${openSection === "company" ? "open" : ""}`}>
                  <ul className="section-links">
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#careers">Services</a>
                    </li>
                    <li>
                      <a href="#news">Community</a>
                    </li>
                    <li>
                      <a href="#investors">Learn</a>
                    </li>
                    <li>
                      <a href="#sustainability">Get in Touch</a>
                    </li>
                     
                  </ul>
                </div>
              </div>

              <div className="footer-section">
                <div className="section-header" onClick={() => toggleSection("social")}>
                  <h3>SOCIAL</h3>
                  {openSection === "social" ? (
                    <FaChevronUp className="dropdown-arrow" />
                  ) : (
                    <FaChevronDown className="dropdown-arrow" />
                  )}
                </div>
                <div className={`section-content ${openSection === "social" ? "open" : ""}`}>
                  <div className="social-links-horizontal">
                    <a href="https://twitter.com/opengen" className="social-icon" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/company/opengen" className="social-icon" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/opengen" className="social-icon" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://youtube.com/opengen" className="social-icon" aria-label="YouTube">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <span className="copyright">©{new Date().getFullYear()} Opengen</span>
                <div className="footer-bottom-links">
                  <a href="#terms">Terms</a>
                  <span className="separator">•</span>
                  <a href="#privacy">Privacy</a>
                  <span className="separator">•</span>
                  <a href="#cookies">Cookies</a>
                </div>
              </div>
              <div className="developed-with-love">
                Developed with <FaHeart className="heart-icon" /> by Opengen
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection;
