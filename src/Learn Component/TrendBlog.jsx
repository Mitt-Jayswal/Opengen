import "../DesignLearn Component/TrendsBlog.css";
import { Link } from "react-router-dom";

const TrendsBlog = () => {
  return (
    <div className="trends-blog-container">
      <div className="trends-blog-content">
        <div className="trends-blog-left">
          <h1 className="trends-blog-title">Trends Blog</h1>
        </div>

        <div className="trends-blog-right">
          <h2 className="latest-news-title">Latest news</h2>

          <div className="news-items">
            <div className="news-item">
              <div className="news-bullet">
                <span className="bullet"></span>
                <span className="news-label">2025 News</span>
              </div>
              <Link to="https://www.linkedin.com/pulse/united-nations-open-source-week-2025-vini-jaiswal-puehc/" style={{textDecoration:'none'}}>
              <h3 className="news-headline">
                Participation at the United Nations Open Source Week 2025 Summit
              </h3>
              </Link>
              <div className="news-divider"></div>
            </div>

            <div className="news-item">
              <div className="news-bullet">
                <span className="bullet"></span>
                <span className="news-label"> 2025 News</span>
              </div>
              <Link to="https://www.linkedin.com/pulse/apache-spark-community-data-ai-summit-from-genai-agents-vini-jaiswal-xzjfc/" style={{textDecoration:'none'}}>
              <h3 className="news-headline">
               Participation at the Databricks Data + AI Summit 2025
              </h3>
              </Link>
              <div className="news-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        {/* Future filter controls can be added here */}
      </div>
    </div>
  )
}

export default TrendsBlog;
