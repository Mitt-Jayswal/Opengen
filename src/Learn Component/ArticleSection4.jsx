import "../DesignLearn Component/ArticleSection.css"
import { Link } from "react-router-dom";
import blog5 from '../assets/blog7.png'
import blog6 from '../assets/blog8.png'

const ArticleSection4 = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="article-section-container">
      <div className="article-section-content">
        <div className="dev-advocacy-container">
          <h2 className="dev-advocacy-title">British Columbia's Commitment to Open Source Software: Driving Innovation and Efficiency</h2>
          <p className="dev-advocacy-description">
            The government of British Columbia (BC) has made a remarkable commitment to embracing open source software, which resulted in significant benefits for various industries and organizations.
          </p>
           
          <div className="dev-advocacy-buttons">
            <Link to="https://www.youtube.com/watch?v=HWxPv3iSDTg&ab_channel=ViniJaiswal" style={{textDecoration:'none'}}>
            <button className="primary-button">Subscribe</button>
            </Link>
            <Link to="/about/Opengen" onClick={handleNavClick}>
            <button className="secondary-button">Know More about OpenGen</button>
            </Link>
          </div>
        </div>

        <div className="articles-container">
          <div className="article-card">
            <div className="article-image-container">
              <img
                src={blog5}
                alt="OpenGen"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">British Columbia's Commitment to Open Source Software: Driving Innovation and Efficiency</h3>
            <Link to="https://www.linkedin.com/pulse/british-columbias-commitment-open-source-software-driving-jaiswal?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" className="article-link">
              View Blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="article-card">
            <div className="article-image-container">
              <img
                src={blog6}
                alt="OpenGen"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">7 Predictions On The Future Of Technology and Innovation</h3>
            <Link to="https://www.linkedin.com/pulse/7-predictions-future-technology-innovation-vini-jaiswal/?trackingId=NvSuIIyeTSCwjXSzo1PluA%3D%3D" className="article-link">
              View Blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>




          
        </div>
      </div>
    </div>
  )
}

export default ArticleSection4;
