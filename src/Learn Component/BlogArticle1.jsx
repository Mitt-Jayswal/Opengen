import "../DesignLearn Component/ArticleSection.css";
import { Link } from "react-router-dom";
import Blog1 from '../assets/unitednations.jpeg';
import Blog2 from '../assets/blog4.png';


const BlogArticle1 = () => {

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
          <h2 className="dev-advocacy-title">United Nations Open Source Week 2025</h2>
          <p className="dev-advocacy-description">
            Last week, I had the privilege of attending and actively contributing to the UN Open Source Week 2025 at the United Nations Headquarters in New York City.
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
                src={Blog1}
                alt="AI in Manufacturing"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">United Nations Open Source Week 2025</h3>
            <Link to="/unitednations-Open+Source&Week=2025/vinijaiswal/blogs" className="article-link" onClick={handleNavClick}>
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
                src={Blog2}
                alt="AI in Learning Management Systems"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">Grace Hopper Open Source Day 2024</h3>
            <Link to="/pulse/gracehopper+opensourceday+2024+we-jaiswal/vinijaiswal/blogs" className="article-link" onClick={handleNavClick}>
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

export default BlogArticle1;
