import headerimage from '../assets/unitednations.jpeg';
import unitednationsimage2 from '../assets/unitednationsimage2.png';
import unitednationsimage3 from '../assets/unitednationsimage3.png';
import unitednationsimage4 from '../assets/unitednationsimage4.png';
 import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCalendarAlt,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa"
import "./UnitedNation.css"

const UnitedNation = () => {
  return (
    <div className="blog-lion-container">
      <div className="blog-lion-content">
        <div className="blog-lion-main">
          <header className="blog-lion-header">
            <h1 className="blog-lion-title">United Nations Open Source Week 2025</h1>
            <div className="blog-lion-meta">
              <span className="blog-lion-author">Vini Jaiswal</span>
              <span className="blog-lion-date">June 26, 2025</span>
            </div>
            <div className="blog-lion-social">
              <FaFacebookF className="blog-lion-icon" />
              <FaTwitter className="blog-lion-icon" />
              <FaLinkedinIn className="blog-lion-icon" />
              <FaGithub className="blog-lion-icon" />
            </div>
          </header>

          <div className="blog-lion-hero">
            <img
              src={headerimage}
              alt="UN Open Source Week 2025"
              width={800}
              height={400}
              className="blog-lion-image"
            />
          </div>

          <div className="blog-lion-text">
            <p>
              Last week, I had the privilege of attending and actively contributing to the UN Open Source Week 2025 at
              the United Nations Headquarters in New York City. As someone who has spent the last several years working
              across continents to champion open source, scale AI infrastructure, and advise on global technology
              policies, this experience felt like a natural culmination of everything I have been working on.
            </p>

            <p>
              The discussions were about what it takes to maintain open digital infrastructure, build responsible AI
              systems, and support communities doing the hard work on the ground. It didn't matter whether you were from
              a major tech company, a government office, or an open source project, everyone was there because they care
              about building technology that serves people, the businesses and the public infrastructure.
            </p>

            <h2 className="blog-lion-heading">✨ Open Source Public-Private Sector Evolution</h2>

            <p>
              Since its launch in 2023, the UN Open Source Week has grown into a hub for open collaboration across
              borders. This year's edition expanded its scope significantly featuring hands-on hackathons, strategy
              sessions, and deep-dives into topics ranging from ethical AI to digital public infrastructure (DPI).
            </p>

            <div className="blog-lion-content-image">
              <img
                src={unitednationsimage4}
                alt="UN Open Source Week Sessions"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <p>
              We saw active participation from open source maintainers in Nairobi, civic technologists in Berlin, and
              policymakers from across the Global South. There was a noticeable shift in tone, from experimental
              enthusiasm to a clear intent to institutionalize open source practices, sustainable AI development and
              principles into how we build public systems.
            </p>

            <p>
              In one of the sessions, we explored how open source solutions often fall into the "messy middle", a space
              where ideas and pilots are promising, but long-term sustainability, funding, and adoption fall short. We
              talked about use cases beyond emergencies, like education, mental health, privacy, and delivery of
              government services.
            </p>

            <h2 className="blog-lion-heading">👩🏽‍💻 "Ahead of the Storm" Hackathon</h2>

            <p>
              One of the highlights for me was judging the "Ahead of the Storm" Hackathon, co-hosted by UNICEF and the
              United Nations Office of Information and Communications Technology. Over the course of two days, more than
              81 global participants collaborated in-person, forming a total of 21 teams to address urgent challenges at
              the intersection of climate resilience and child-focused emergency response.
            </p>

            <div className="blog-lion-content-image">
              <img
                src={unitednationsimage2}
                alt="UN Hackathon Participants"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <p>
              The hackathon centered around three complex, open-ended challenges that aimed to strengthen UNICEF's
              GeoSight-OS platform and geospatial intelligence capabilities:
            </p>

            <ul className="blog-lion-list">
              <li>Challenge 1: Transitioning from reactive to proactive child-centric extreme weather forecasting</li>
              <li>
                Challenge 2: Overlaying multi-hazard data layers to improve situational awareness and risk mapping
              </li>
              <li>
                Challenge 3: Enhancing GeoSight with features that make disaster risk data more visible and actionable
              </li>
            </ul>

            <h2 className="blog-lion-heading">🏛️ OSPOs for Good: From Movement to Institutions</h2>

            <p>
              A recurring focus throughout UN Open Source Week was the role of Open Source Program Offices (OSPOs) in
              formalizing open source operations across sectors. We heard from initiatives in India and Trinidad &
              Tobago that are developing OSPOs to bring more structure to their digital public efforts.
            </p>

            <p>
              We also heard from France and institutions like Carnegie Mellon University, GitHub, Amazon, GitLab,
              Mozilla foundation, Japan - The Government of Japan who are using OSPOs to align open source work with
              broader institutional missions.
            </p>

            <div className="blog-lion-content-image">
              <img
                src={unitednationsimage3}
                alt="OSPO Panel Discussion"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <h2 className="blog-lion-heading">🤖 AI, DPI, and the Future of Ethical Systems</h2>

            <p>
              The sessions on AI transparency, open data interoperability and Digital Public Infrastructure (DPI) were
              especially timely. We discussed the possibilities and the responsibilities that come with scaling AI
              systems. How do we build explainable models? How do we prevent marginalized communities from being
              excluded from digital ID systems?
            </p>

            <p>
              It became clear that open source is no longer just the foundation of our tech stack—it's the foundation of
              our trust stack. Hearing from experts like Yann LeCun, Sabrina Farmer, Guilherme Canela, and others, I
              felt proud to be part of an ecosystem that's not afraid to confront the hard questions.
            </p>

            <h2 className="blog-lion-heading">🌍 DPI Day: Building for the Global Majority</h2>

            <p>
              The final day focused on DPI as a public good. Breakouts touched on inclusion in digital payments,
              safeguards for smaller states, and the importance of equitable data access. These conversations mirrored
              much of my own recent work in promoting privacy-enhancing technologies and responsible cross-border data
              collaboration.
            </p>

            <p>
              Event included an open source announcement, FLOSS-PSO Network—a new platform to help public sector OSPOs
              share best practices, build connections, and support each other through shared learning.
            </p>

            <h2 className="blog-lion-heading">Final Reflections: Why This Week Matters</h2>

            <p>
              Tech conferences often lean heavily into hype or high-level policy talk. But what stood out at UN Open
              Source Week was the willingness to face the messy middle, the structural gaps, and the work still left to
              be done.
            </p>

            <p>For me personally, this week deepened my resolve to:</p>

            <ul className="blog-lion-list">
              <li>Champion open and secure AI infrastructure</li>
              <li>Advocate for ethical frameworks in data governance</li>
              <li>Elevate maintainers and community contributors</li>
              <li>And ensure that policy and practice evolve hand in hand</li>
            </ul>

            <p>
              I left the week with amazing connections and memories with old friends and network. If you're in this
              space, I hope we get to build something together soon.
            </p>
          </div>
        </div>

        <aside className="blog-lion-sidebar">
          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">Key Highlights</h3>
            <div className="blog-lion-points">
              <div className="blog-lion-point">
                <FaCalendarAlt className="blog-lion-point-icon" />
                <span>UN Open Source Week 2025</span>
              </div>
              <div className="blog-lion-point">
                <FaUsers className="blog-lion-point-icon" />
                <span>81+ Global Participants</span>
              </div>
              <div className="blog-lion-point">
                <FaGlobe className="blog-lion-point-icon" />
                <span>Digital Public Infrastructure</span>
              </div>
              <div className="blog-lion-point">
                <FaLightbulb className="blog-lion-point-icon" />
                <span>AI Ethics & Transparency</span>
              </div>
              <div className="blog-lion-point">
                <FaHandshake className="blog-lion-point-icon" />
                <span>Public-Private Collaboration</span>
              </div>
              <div className="blog-lion-point">
                <FaRocket className="blog-lion-point-icon" />
                <span>OSPO Implementation</span>
              </div>
            </div>
          </div>

          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">Related Topics</h3>
            <ul className="blog-lion-links">
              <li>
                <a href="#" className="blog-lion-link">
                  Open Source Governance
                </a>
              </li>
              <li>
                <a href="#" className="blog-lion-link">
                  AI Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="blog-lion-link">
                  Digital Public Goods
                </a>
              </li>
              <li>
                <a href="#" className="blog-lion-link">
                  Climate Tech
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default UnitedNation;
