import "../DesignLearn Component/ArticleSection.css"
import { Link } from "react-router-dom"
import Blog3 from '../assets/Blog3.png'
import blog4 from '../assets/blog4.png'

const ArticleSection2 = () => {
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
          <h2 className="dev-advocacy-title">United Nations Office for Digital and Emerging Technologies</h2>
          <p className="dev-advocacy-description">
            As I stepped into the United Nations headquarters in New York, I felt a surge of excitement and pride. The Open Source assembly was about to unfold, and I was honored to be a part of it.
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
                src={Blog3}
                alt="AI in Manufacturing"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">United Nations Office for Digital and Emerging Technologies Digital Public Goods Alliance</h3>
            <Link to="https://www.linkedin.com/pulse/open-source-united-nations-vini-jaiswal-wngrc/?trackingId=5%2FjD6H8zS1KjCd3YrEH%2BNA%3D%3D" className="article-link">
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
                src={blog4}
                alt="OpenGen"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">Grace Hopper Open Source Day 2024</h3>
            <Link to="https://www.linkedin.com/pulse/grace-hopper-open-source-day-2024-vini-jaiswal-xbfmc?trk=news-guest_share-article" className="article-link">
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

export default ArticleSection2;
