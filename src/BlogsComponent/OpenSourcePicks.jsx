import headerimage from '../assets/newblog.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaDatabase,
  FaRocket,
  FaCog,
  FaChartLine,
  FaBrain,
} from "react-icons/fa"
import "../BlogsComponent/OpenSourcePicks.css"
import { Link } from 'react-router-dom';

const OpenSourcePicks = () => {
  return (
    <div className="blog-tiger-container">
      <div className="blog-tiger-content">
        <div className="blog-tiger-main">
          <header className="blog-tiger-header">
            <h1 className="blog-tiger-title">My Top Open Source Picks at Data + AI Summit 2025</h1>
            <div className="blog-tiger-meta">
              <span className="blog-tiger-author">Vini Jaiswal</span>
              <span className="blog-tiger-author-title">
                Developer Advocate | Top Voice in AI, Data & Open Source | Databricks, TikTok, Citi Alumni
              </span>
              <span className="blog-tiger-date">June 9, 2025</span>
            </div>
            <div className="blog-tiger-social">
              <FaFacebookF className="blog-tiger-icon" />
              <FaTwitter className="blog-tiger-icon" />
              <FaLinkedinIn className="blog-tiger-icon" />
              <FaGithub className="blog-tiger-icon" />
            </div>
          </header>

          <div className="blog-tiger-hero">
            <img
              src={headerimage}
              alt="Data + AI Summit 2025"
              width={800}
              height={400}
              className="blog-tiger-image"
            />
          </div>

          <div className="blog-tiger-text">
            <p>
              Data + AI Summit is finally here! I have spent the past week digging through the schedule, and pulled
              together a list of sessions that I think every open source-minded engineer, architect, or data
              practitioner should have on their radar. Whether you are into distributed systems, privacy, or just want
              to see what teams like Netflix, NVIDIA, LinkedIn, and Meta are building, this one's for you.
            </p>

            <h2 className="blog-tiger-heading">Open Source + LLMs: Data Meets AI Tooling</h2>

            <p>
              We are seeing a wave of innovation around synthetic data, prompt engineering, and AI agents, and a lot of
              it is happening in the open.
            </p>

            <ul className="blog-tiger-list">
              <li>
                <strong>Generating Zero-Shot Hard-Case Hallucinations: A Synthetic and Open Data Approach</strong> —
                Creating synthetic "hard" examples to evaluate LLMs by NVIDIA's Eric Tramel, a timely topic for anyone
                exploring evaluation frameworks.
              </li>

              <li>
                <strong>
                  Improve AI Training With the First Synthetic Personas Dataset Aligned to Real-World Distributions
                </strong>{" "}
                — Also from NVIDIA's Dane Corneil (PhD) & Yev Meyer, Ph.D., this talk addresses the bias and
                representativeness issue in training data.
              </li>

              <li>
                <strong>Let the LLM Write the Prompts: An Intro to DSPy in Compound AI Pipelines</strong> — This is one
                to watch if you're experimenting with compound AI pipelines. DSPy is getting more traction as a
                declarative framework for prompt orchestration. (Speaker: Drew Breunig Overture Maps Foundation)
              </li>

              <li>
                <strong>Meet Goose, an Open Source AI Agent</strong> — Block's foray into agent frameworks. I'm curious
                to see how it stacks up against others like AutoGen or LlamaIndex, especially in terms of developer
                experience and real-world use cases. (by Bradley Axen)
              </li>
            </ul>

            <h2 className="blog-tiger-heading">Scaling Spark (and Saving Money While You're At It)</h2>

            <p>
              There's no shortage of infra-heavy sessions this year, especially from teams running Spark at massive
              scale.
            </p>

            <ul className="blog-tiger-list">
              <li>
                <strong>LinkedIn: Spark Right-Sizing: Saving Thousands of PBHrs of Compute at LinkedIn</strong> — How
                LinkedIn trimmed thousands of PBHrs of compute through smarter resource allocation. Expect practical
                advice on workload tuning, autoscaling, and managing cost without compromising SLAs. (By Shreyesh
                Arangath)
              </li>

              <li>
                <strong>
                  Pinterest: Saving Millions From Millions: Navigating Towards Cost-Efficiency in Pinterest's Spark Jobs
                </strong>{" "}
                — Insights into how Pinterest fine-tuned their Spark pipelines to save real dollars. If you're under
                pressure to optimize cloud spend, this session is for you. (By Nan Zhu)
              </li>

              <li>
                <strong>Netflix: Lessons Learned: Building a Scalable Game Analytics Platform at Netflix</strong> — A
                behind-the-scenes look at how Netflix scaled their analytics stack to support real-time and batch
                processing for game telemetry. (By Bhargavi Reddy Dokuru, Michael Cuthbert)
              </li>
            </ul>

            <h2 className="blog-tiger-heading">Tooling and Table Format Innovation</h2>

            <p>
              Open table formats, new data abstractions, and better developer ergonomics continue to shape the modern
              data stack.
            </p>

            <ul className="blog-tiger-list">
              <li>
                <strong>Delta Lake + Iceberg:</strong> Don't miss "The Future of Open Table Formats" and "Introduction
                to Modern Open Table Formats and Catalogs". These sessions will set the tone for where the community is
                heading. (Ryan Blue Daniel Weeks Bart Samwel Sirui Sun)
              </li>

              <li>
                <strong>Declarative Pipelines by Michael Armbrust</strong> — A look into simplifying workloads. I wonder
                if we can now tell AI to define the pipelines in natural language!
              </li>

              <li>
                <strong>Delta Lake Liquid Clustering</strong> — Lightning-fast query improvements sound promising,
                especially for folks hitting scale limits. (Rahul Mahadev, Cindy Jiang)
              </li>
            </ul>

            <h2 className="blog-tiger-heading">OSS Unity Catalog, and Infra Advances</h2>

            <ul className="blog-tiger-list">
              <li>
                <strong>Open Source Unity Catalog</strong> — With more users managing governance in-house, this is a
                critical track. Don't miss best practices from the Databricks team - Tathagata Das and Benjamin Wilson
              </li>

              <li>
                <strong>Deploying Unity Catalog OSS on Kubernetes</strong> — Super relevant for teams looking to
                decouple from cloud-managed services and build portable infra. (Vasilii Bulatov)
              </li>

              <li>
                <strong>Daft and Unity Catalog</strong> — If you're working with multimodal data, this session will be
                worth attending. (Jay Chia, Eventual)
              </li>
            </ul>

            <h2 className="blog-tiger-heading">Honorable Mentions: Industry Use Cases & Applied AI</h2>

            <ul className="blog-tiger-list">
              <li>
                <strong>Swiggy:</strong> How India's leading quick commerce platform's AI platform is scaling in
                real-time commerce (serving ~13 million users across 653 cities, with 196,000 restaurant partners and
                17,000 SKU). Akash Agarwal, Vasan Vembu Srini.
              </li>

              <li>
                <strong>DoorDash's journey toward an entity management framework,</strong> A look at how DoorDash
                evolved from a customer 360 to a more generalized framework. (Chao Wang, Gowri Shankar)
              </li>

              <li>
                <strong>ByteDance + Mosaic:</strong> Combining Apache Iceberg and streaming for model training (Zilong
                Zhou)
              </li>
            </ul>

            <p>
              These sessions will give you a front-row seat to where open source and production AI are heading. I will
              be sharing more insights live from the conference floor, so stay tuned! If there's a session you're
              excited about, DM me, I am always up for a hallway conversation or coffee chat during Summit week ☕
            </p>
          </div>
        </div>

        <aside className="blog-tiger-sidebar">
          <div className="blog-tiger-section">
            <h3 className="blog-tiger-sidebar-title">Key Topics</h3>
            <div className="blog-tiger-points">
              <div className="blog-tiger-point">
                <FaBrain className="blog-tiger-point-icon" />
                <span>AI & LLMs</span>
              </div>
              <div className="blog-tiger-point">
                <FaDatabase className="blog-tiger-point-icon" />
                <span>Apache Spark</span>
              </div>
              <div className="blog-tiger-point">
                <FaCode className="blog-tiger-point-icon" />
                <span>Open Source Tools</span>
              </div>
              <div className="blog-tiger-point">
                <FaRocket className="blog-tiger-point-icon" />
                <span>Performance Optimization</span>
              </div>
              <div className="blog-tiger-point">
                <FaCog className="blog-tiger-point-icon" />
                <span>Infrastructure</span>
              </div>
              <div className="blog-tiger-point">
                <FaChartLine className="blog-tiger-point-icon" />
                <span>Data Analytics</span>
              </div>
            </div>
          </div>

          <div className="blog-tiger-section">
            <h3 className="blog-tiger-sidebar-title">Featured Companies</h3>
            <ul className="blog-tiger-links">
              <li>
                <Link to="/opensourcepicks/vinijaiswal/blogs" className="blog-tiger-link">
                  Netflix
                </Link>
              </li>
              <li>
                 <Link to="/opensourcepicks/vinijaiswal/blogs"  className="blog-tiger-link">
                  NVIDIA
                </Link>
              </li>
              <li>
                 <Link to="/opensourcepicks/vinijaiswal/blogs"  className="blog-tiger-link">
                  LinkedIn
                </Link>
              </li>
              <li>
                 <Link to="/opensourcepicks/vinijaiswal/blogs"  className="blog-tiger-link">
                  Pinterest
                </Link>
              </li>
              <li>
                 <Link to="/opensourcepicks/vinijaiswal/blogs"  className="blog-tiger-link">
                  Meta
                </Link>
              </li>
              <li>
                 <Link to="/opensourcepicks/vinijaiswal/blogs"  className="blog-tiger-link">
                  Databricks
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default OpenSourcePicks;
