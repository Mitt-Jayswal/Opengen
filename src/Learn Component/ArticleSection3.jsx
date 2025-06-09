import "../DesignLearn Component/ArticleSection.css"
import { Link } from "react-router-dom";
import blog5 from '../assets/blog5.png'
import blog6 from '../assets/Blog 1.png'

const ArticleSection3 = () => {
  return (
    <div className="article-section-container">
      <div className="article-section-content">
        <div className="dev-advocacy-container">
          <h2 className="dev-advocacy-title">Contributions to our Planet Earth... every act counts!</h2>
          <p className="dev-advocacy-description">
            Explore the latest trends, best practices, and strategies in developer advocacy. Our experts share insights
            to help you build stronger developer communities.
          </p>
           
          <div className="dev-advocacy-buttons">
            <Link to="https://www.youtube.com/watch?v=HWxPv3iSDTg&ab_channel=ViniJaiswal" style={{textDecoration:'none'}}>
            <button className="primary-button">Subscribe</button>
            </Link>
            <Link to="/about/Opengen">
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
            <h3 className="article-title">Contributions to our Planet Earth... every act counts!</h3>
            <Link to="https://www.linkedin.com/pulse/contributions-our-planet-earth-every-act-counts-vini-jaiswal?trk=news-guest_share-article" className="article-link">
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
            <h3 className="article-title">Delta Lake 1.2.1 Annoucement</h3>
            <Link to="https://www.linkedin.com/pulse/contributions-our-planet-earth-every-act-counts-vini-jaiswal?trk=news-guest_share-article" className="article-link">
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

export default ArticleSection3;
