import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import "../Design Opengen Component/Footer.css";
import { Link } from "react-router-dom";
import logore from '../assets/logore.jpg';
 

const FooterSection = () => {
  // Function to scroll to top when navigation links are clicked
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section logo-section">
            <Link to="/" onClick={handleNavClick}>
              <h2 className="logo">
                <img
                  src={logore}
                  alt="OpenGen Logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </h2>
            </Link>
            <Link to="/" onClick={handleNavClick}>
              <p className="tagline">OpenGen</p>
            </Link>
          </div>

          {/* Column 1 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/about/Opengen" onClick={handleNavClick}>
                  About OpenGen
                </Link>
              </li>
              <li>
                <Link to="/services/Opengen" onClick={handleNavClick}>
                  Developer Advocacy
                </Link>
              </li>
              <li>
                <Link to="/brandamplification/Opengen" onClick={handleNavClick}>
                  Brand Amplification
                </Link>
              </li>
              <li>
                <Link to="/partnerships/Opengen" onClick={handleNavClick}>
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/services/Opengen" onClick={handleNavClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/community/Opengen" onClick={handleNavClick}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/community/Opengen" onClick={handleNavClick}>
                  Meetups
                </Link>
              </li>
              <li>
                <Link to="/community/Opengen" onClick={handleNavClick}>
                  LiveStreams
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/learn/Opengen" onClick={handleNavClick}>
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/learn/Opengen" onClick={handleNavClick}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/learn/Opengen" onClick={handleNavClick}>
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/support/Opengen" onClick={handleNavClick}>
                  Developer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/support/Opengen" onClick={handleNavClick}>
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to="/support/Opengen" onClick={handleNavClick}>
                  Developers Community
                </Link>
              </li>
              <li>
                <Link to="/learn/Opengen" onClick={handleNavClick}>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-left"></div>

          <div className="footer-center">
            <div className="social-icons">
              <Link to="/" className="social-icon">
                <FaFacebook />
              </Link>
              <Link to="/" className="social-icon">
                <FaXTwitter />
              </Link>
              <Link to="https://www.linkedin.com/in/vinijaiswal/" className="social-icon">
                <RxLinkedinLogo />
              </Link>
              <Link to="/" className="social-icon">
                <AiFillInstagram />
              </Link>
              <Link to="/" className="social-icon">
                <FcGoogle />
              </Link>
            </div>
            <div className="copyright">
              <p>©OpenGen. All rights reserved.</p>
            </div>
          </div>

          <div className="footer-right">
            <p className="developer-text">
              Developed with <span className="love-symbol">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection;
