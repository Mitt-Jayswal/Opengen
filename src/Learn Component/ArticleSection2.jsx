import "../DesignLearn Component/ArticleSection.css"
import Blog3 from '../assets/Blog3.png'

const ArticleSection2 = () => {
  return (
    <div className="article-section-container">
      <div className="article-section-content">
        <div className="dev-advocacy-container">
          <h2 className="dev-advocacy-title">Developer Advocacy Insights</h2>
          <p className="dev-advocacy-description">
            As I stepped into the United Nations headquarters in New York, I felt a surge of excitement and pride. The Open Source assembly was about to unfold, and I was honored to be a part of it.
          </p>
           
          <div className="dev-advocacy-buttons">
            <button className="primary-button">Subscribe</button>
            <button className="secondary-button">Explore Topics</button>
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
            <a href="#" className="article-link">
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
            </a>
          </div>

          <div className="article-card">
            <div className="article-image-container">
              <img
                src="/"
                alt="OpenGen"
                className="article-image"
              />
              <div className="article-tag">Blog</div>
            </div>
            <h3 className="article-title">United Nations Office for Digital and Emerging Technologies Digital Public Goods Alliance</h3>
            <a href="#" className="article-link">
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
            </a>
          </div>




          
        </div>
      </div>
    </div>
  )
}

export default ArticleSection2;
