import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import "../Design Opengen Component/Footer.css";
import { Link } from "react-router-dom";
import logore from '../assets/logore.jpg';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section logo-section">
          <Link to="/"><h2 className="logo">
            <img src={logore} alt="yeret" style={{width:'50px',height:'50px'}}/>
          </h2></Link>
            <Link to="/"><p className="tagline">OpenGen</p></Link>
          </div>

          {/* Column 1 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/about/Opengen">About OpenGen</Link>
              </li>
              <li>
                <Link to="/services/Opengen">Developer Advocacy</Link>
              </li>
              <li>
                <Link to="/brandamplification/Opengen">Brand Amplification</Link>
              </li>
              <li>
                <Link to="/partnerships/Opengen">Partnerships</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <Link to="/services/Opengen">Services</Link>
              </li>
              <li>
                <Link to="/community/Opengen">Events</Link>
              </li>
              <li>
                <Link to="/community/Opengen">Meetups</Link>
              </li>
              <li>
                <Link to="/community/Opengen">LiveStreams</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-section">
            <ul className="footer-links">
            <li>
                <Link to="/learn/Opengen">Reports</Link>
              </li>
              <li>
                <Link to="/learn/Opengen">Blogs</Link>
              </li>
              <li>
                <Link to="/learn/Opengen">Podcast</Link>
              </li>
              <li>
                <Link to="/support/Opengen">Developer Support</Link>
              </li>
              {/* Removed the empty link */}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-section">
            <ul className="footer-links">
              
              <li>
                <Link to="/support/Opengen">Get in Touch</Link>
              </li>
              <li>
                <Link to="/support/Opengen">Developers Community</Link>
              </li>
              <li>
                <Link to="/learn/Opengen">Resources</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-left">
             
          </div>
          
          <div className="footer-center">
            <div className="social-icons">
              <Link to="/" className="social-icon">
                <FaFacebook />
              </Link>
              <Link to="/" className="social-icon">
                <FaXTwitter />
              </Link>
              <Link to="/" className="social-icon">
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
            <p className="developer-text">Developed with <span className="love-symbol">❤️</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
