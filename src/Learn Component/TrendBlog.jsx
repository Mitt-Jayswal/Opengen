import "../DesignLearn Component/TrendsBlog.css"

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
                <span className="news-label">News</span>
              </div>
              <h3 className="news-headline">
                OpenGen Recognized as Developer Advocacy Leader at 2025 Business Awards UK
              </h3>
              <div className="news-divider"></div>
            </div>

            <div className="news-item">
              <div className="news-bullet">
                <span className="bullet"></span>
                <span className="news-label">News</span>
              </div>
              <h3 className="news-headline">
                OpenGen Achieves New Milestone with ISO 9001:2025, ISO 27001:2022 Certifications
              </h3>
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
