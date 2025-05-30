import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import "../Design Opengen Component/Footer.css"

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section logo-section">
            <h2 className="logo">LOGO</h2>
            <p className="tagline">OpenGen</p>
          </div>

          {/* Column 1 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#">About OpenGen</a>
              </li>
              <li>
                <a href="#">Community News</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Developer Support</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">AFFILIATES</a>
              </li>
              <li>
                <a href="#">RESOURCES</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-left">
            <a href="#" className="terms-link">Terms and Conditions</a>
          </div>
          
          <div className="footer-center">
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaXTwitter />
              </a>
              <a href="#" className="social-icon">
                <RxLinkedinLogo />
              </a>
              <a href="#" className="social-icon">
                <AiFillInstagram />
              </a>
              <a href="#" className="social-icon">
                <FcGoogle />
              </a>
            </div>
            <div className="copyright">
              <p>©Copyright. All rights reserved.</p>
            </div>
          </div>
          
          <div className="footer-right">
            <p className="developer-text">Developed with <span className="love-symbol">❤️</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection;
