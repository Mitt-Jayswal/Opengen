import "../DesignLearn Component/ArticleSection.css"
import { Link } from "react-router-dom"
import Blog3 from '../assets/openai2.jpeg'
import blog4 from '../assets/ghcnew1.jpeg'

const BlogArticle4 = () => {
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
          <h2 className="dev-advocacy-title"> Attending OpenAI Dev Day at 2AM from Singapore – Worth Every Second!</h2>
          <p className="dev-advocacy-description">
           <h4> Now possible:</h4>

<li>Read complex documents with diagrams</li>

<li>Analyze screenshots and visual data</li>

<li>Caption and interpret images intelligently</li>

<li> Use cases: Medical imaging, UX analysis, educational visuals, e-commerce auto-tagging</li>.
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
            <h3 className="article-title">🌍 Attending OpenAI Dev Day at 2AM from Singapore – Worth Every Second!</h3>
            <Link to="/pulse/openai+developer=day&singapore-vini-jaiswal/vinijaiswal/blogs" className="article-link" onClick={handleNavClick}>
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
            <h3 className="article-title">Kicking off the Grace Hopper Open Source Day!!! All smiles and excitement 👋 </h3>
            <Link to="/pulse/ghcopen+source=day-vini-jaiswal/vinijaiswal/blogs" className="article-link" onClick={handleNavClick}>
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

export default BlogArticle4;
