import lfaiHero from "../assets/lfaiimage1.png"
import aiInnovation from "../assets/lfaiimage2.png"
import dataCollaboration from "../assets/lfaiimage1.png"
import communityDriven from "../assets/lfaiimage1.png"
import '../ProjectsComponent/lfaidesign.css'

const LFAI = () => {
  return (
    <div className="lf-quantum-ai-wrapper">
      {/* Hero Banner */}
      <div className="lf-quantum-ai-hero-banner">
        <img src={lfaiHero || "/placeholder.svg"} alt="LF AI & Data Foundation" className="lf-quantum-ai-hero-visual" />
        <div className="lf-quantum-ai-hero-overlay">
          <div className="lf-quantum-ai-hero-content">
            
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="lf-quantum-ai-layout">
        {/* Primary Content */}
        <main className="lf-quantum-ai-primary-content">
          {/* Leadership Announcement */}
          <div className="lf-quantum-ai-announcement-block">
            <h2 className="lf-quantum-ai-announcement-title">Welcome Our New TAC Chairperson</h2>
            <p className="lf-quantum-ai-body-text">
              <strong>San Francisco, CA – January 26, 2025</strong> – The{" "}
              <span className="lf-quantum-ai-highlight-text">Linux Foundation AI & Data (LF AI & Data)</span> today
              announced a pivotal appointment that will significantly support and help advance the foundation's mission
              to cultivate an open artificial intelligence and data community.
            </p>
            <p className="lf-quantum-ai-body-text">
              Please join us in welcoming <span className="lf-quantum-ai-highlight-text">Vini Jaiswal</span> as the
              newly elected Chairperson of the Linux Foundation – AI & Data Technical Advisory Council (TAC). Vini
              brings a wealth of experience and expertise in the fields of artificial intelligence and data science, and
              has made significant contributions to <span className="lf-quantum-ai-highlight-text">Apache Spark</span>,{" "}
              <span className="lf-quantum-ai-highlight-text">MLflow</span>, and, most notably,{" "}
              <span className="lf-quantum-ai-highlight-text">Delta Lake</span>.
            </p>
            <p className="lf-quantum-ai-body-text">
              Under Vini's leadership, we expect to see accelerated innovation in open source AI and data technologies,
              stronger community engagement, and enhanced collaboration across our ecosystem of projects and members.
              This appointment comes at a critical time as organizations worldwide are increasingly adopting AI and
              data-driven solutions to transform their operations and drive competitive advantage.
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="lf-quantum-ai-visual-showcase">
            <div className="lf-quantum-ai-showcase-item">
              <img
                src={aiInnovation || "/placeholder.svg"}
                alt="Open Source AI Innovation"
                className="lf-quantum-ai-showcase-visual"
              />
              <div className="lf-quantum-ai-showcase-content">
                <h3 className="lf-quantum-ai-showcase-title">Open Source AI Innovation</h3>
                <p className="lf-quantum-ai-showcase-description">
                  Advancing artificial intelligence through collaborative open source development and community-driven
                  innovation.
                </p>
              </div>
            </div>
            <div className="lf-quantum-ai-showcase-item">
              <img
                src={dataCollaboration || "/placeholder.svg"}
                alt="Data Science Collaboration"
                className="lf-quantum-ai-showcase-visual"
              />
              <div className="lf-quantum-ai-showcase-content">
                <h3 className="lf-quantum-ai-showcase-title">Data Science Collaboration</h3>
                <p className="lf-quantum-ai-showcase-description">
                  Data Ecosystem Development. Building sustainable data ecosystems that enable organizations to harness
                  the full potential of their data assets.
                </p>
              </div>
            </div>
            <div className="lf-quantum-ai-showcase-item">
              <img
                src={communityDriven || "/placeholder.svg"}
                alt="Community Driven Development"
                className="lf-quantum-ai-showcase-visual"
              />
              <div className="lf-quantum-ai-showcase-content">
                <h3 className="lf-quantum-ai-showcase-title">Community Driven Development</h3>
                <p className="lf-quantum-ai-showcase-description">
                  Global Community Collaboration. Fostering worldwide collaboration among developers, researchers, and
                  organizations to accelerate AI adoption.
                </p>
              </div>
            </div>
          </div>

          {/* About Foundation */}
          <div className="lf-quantum-ai-content-block">
            <h2 className="lf-quantum-ai-block-title">About LF AI & DATA Foundation</h2>
            <p className="lf-quantum-ai-body-text">
              LF AI & Data is an umbrella foundation of the Linux Foundation that supports open source innovation in
              artificial intelligence (AI) and data. Our foundation was created to support open source AI and data, and
              to create a sustainable open source AI and data ecosystem that makes it easy to create AI and data
              products and services using open source technologies.
            </p>
            <p className="lf-quantum-ai-body-text">
              We host and support some of the most innovative projects in the AI and data space, including machine
              learning frameworks, data processing engines, model serving platforms, and privacy-preserving
              technologies. Our community includes leading technology companies, startups, academic institutions, and
              individual contributors from around the world.
            </p>
            <p className="lf-quantum-ai-body-text">
              The foundation's portfolio includes over 50 hosted projects across various stages of maturity, from
              sandbox to graduated status. These projects collectively serve millions of developers and data scientists
              globally, powering everything from small-scale experiments to enterprise-grade production systems.
            </p>
          </div>

          {/* Featured Image Section */}
          <div className="lf-quantum-ai-featured-image-section">
            <img
              src={aiInnovation || "/placeholder.svg"}
              alt="LF AI & Data Innovation Ecosystem"
              className="lf-quantum-ai-featured-image"
            />
            <p className="lf-quantum-ai-featured-caption">
              Empowering the future of AI and data through open source collaboration and innovation
            </p>
          </div>

          {/* Featured Projects */}
          <div className="lf-quantum-ai-content-block">
            <h2 className="lf-quantum-ai-block-title">Featured Projects & Initiatives</h2>
            <div className="lf-quantum-ai-projects-showcase">
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">Apache Spark</h3>
                <p className="lf-quantum-ai-project-info">
                  Unified analytics engine for large-scale data processing with built-in modules for streaming, SQL,
                  machine learning and graph processing. Powers data processing at scale for thousands of organizations
                  worldwide.
                </p>
                <a href="https://github.com/apache/spark" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">Delta Lake</h3>
                <p className="lf-quantum-ai-project-info">
                  Open-source storage framework that enables building a Lakehouse architecture with compute engines
                  including Spark, PrestoDB, Flink, Trino, and Hive. Provides ACID transactions and scalable metadata
                  handling.
                </p>
                <a href="https://github.com/delta-io/delta" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">MLflow</h3>
                <p className="lf-quantum-ai-project-info">
                  Open source platform to manage the ML lifecycle, including experimentation, reproducibility,
                  deployment, and a central model registry. Simplifies machine learning development and deployment
                  workflows.
                </p>
                <a href="https://github.com/mlflow/mlflow" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">Kubeflow</h3>
                <p className="lf-quantum-ai-project-info">
                  Machine learning toolkit for Kubernetes that makes deployments of ML workflows on Kubernetes simple,
                  portable and scalable. Enables ML operations at enterprise scale.
                </p>
                <a href="https://github.com/kubeflow/kubeflow" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">ONNX</h3>
                <p className="lf-quantum-ai-project-info">
                  Open standard for representing machine learning models that enables AI developers to use models with a
                  variety of frameworks and tools. Facilitates model interoperability across platforms.
                </p>
                <a href="https://github.com/onnx/onnx" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
              <div className="lf-quantum-ai-project-tile">
                <h3 className="lf-quantum-ai-project-name">Feast</h3>
                <p className="lf-quantum-ai-project-info">
                  Open source feature store for machine learning that helps teams operate production ML systems at scale
                  by allowing them to define, manage and serve features consistently across training and serving.
                </p>
                <a href="https://github.com/feast-dev/feast" target="_blank" rel="noopener noreferrer">
                  <button className="lf-quantum-ai-action-button">View on GitHub</button>
                </a>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="lf-quantum-ai-content-block">
            <h2 className="lf-quantum-ai-block-title">Community Impact & Strategic Growth</h2>
            <p className="lf-quantum-ai-body-text">
              Our 2024 annual report showcases incredible growth and impact across the AI and data ecosystem. With over
              50 hosted projects, 200+ member organizations, and thousands of contributors worldwide, LF AI & Data
              continues to be the premier destination for open source AI and data innovation.
            </p>
            <p className="lf-quantum-ai-body-text">
              Key achievements include significant increases in project adoption, new member onboarding from Fortune 500
              companies, successful graduation of projects through our maturity levels, and expanded educational
              initiatives that have reached developers and data scientists globally. The foundation has facilitated over
              $2 billion in enterprise AI implementations through its member organizations.
            </p>
            <p className="lf-quantum-ai-body-text">
              Looking ahead, under Vini Jaiswal's leadership, the foundation will focus on accelerating AI
              democratization, enhancing cross-project collaboration, and establishing new standards for responsible AI
              development. Strategic initiatives include expanding partnerships with academic institutions, launching
              new incubation programs for emerging AI technologies, and strengthening the foundation's role in global AI
              governance discussions.
            </p>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lf-quantum-ai-sidebar-panel">
          <div className="lf-quantum-ai-sidebar-widget">
            <h3 className="lf-quantum-ai-sidebar-heading">🔑 Key Highlights</h3>
            <ul className="lf-quantum-ai-sidebar-menu">
              <li className="lf-quantum-ai-sidebar-link">50+ Hosted Projects</li>
              <li className="lf-quantum-ai-sidebar-link">200+ Member Organizations</li>
              <li className="lf-quantum-ai-sidebar-link">Global Developer Community</li>
              <li className="lf-quantum-ai-sidebar-link">Enterprise-Grade Solutions</li>
              <li className="lf-quantum-ai-sidebar-link">Academic Partnerships</li>
              <li className="lf-quantum-ai-sidebar-link">Industry Standards</li>
            </ul>
          </div>

          <div className="lf-quantum-ai-sidebar-widget">
            <h3 className="lf-quantum-ai-sidebar-heading">📚 Resources</h3>
            <ul className="lf-quantum-ai-sidebar-menu">
              <li className="lf-quantum-ai-sidebar-link">Getting Involved Guide</li>
              <li className="lf-quantum-ai-sidebar-link">LF AI & Data Overview</li>
              <li className="lf-quantum-ai-sidebar-link">Technical Documentation</li>
              <li className="lf-quantum-ai-sidebar-link">Member Directory</li>
              <li className="lf-quantum-ai-sidebar-link">Project Landscape</li>
              <li className="lf-quantum-ai-sidebar-link">Annual Reports</li>
            </ul>
          </div>

          <div className="lf-quantum-ai-sidebar-widget">
            <h3 className="lf-quantum-ai-sidebar-heading">🌐 Connect</h3>
            <ul className="lf-quantum-ai-sidebar-menu">
              <li className="lf-quantum-ai-sidebar-link">GitHub Organization</li>
              <li className="lf-quantum-ai-sidebar-link">LinkedIn Community</li>
              <li className="lf-quantum-ai-sidebar-link">Twitter Updates</li>
              <li className="lf-quantum-ai-sidebar-link">Community Slack</li>
              <li className="lf-quantum-ai-sidebar-link">Mailing Lists</li>
              <li className="lf-quantum-ai-sidebar-link">Join Foundation</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="lf-quantum-ai-footer-area">
        <div className="lf-quantum-ai-footer-content">
          <div className="lf-quantum-ai-footer-brand">LF AI & DATA Foundation</div>
          <p className="lf-quantum-ai-footer-tagline">
            Supporting open source innovation in artificial intelligence and data
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LFAI;
