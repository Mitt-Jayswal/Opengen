import privacyHero from "../assets/privacyinnovation.jpeg"
import privacyArchitecture from "../assets/privacyinnovation2.png"
import manateePlatform from "../assets/privacymeeting.png"
import '../ProjectsComponent/PrivacyInnovation.css'
import privacytiktoksponsored from '../assets/privacttiktopsponsored.png'

const PrivacyInnovation = () => {
  return (
    <div className="privacy-nexus-innovation-wrapper">
      {/* Hero Banner */}
      <div className="privacy-nexus-innovation-hero-banner">
        <img
          src={privacyHero || "/placeholder.svg"}
          alt="Privacy Innovation"
          className="privacy-nexus-innovation-hero-visual"
        />
        <div className="privacy-nexus-innovation-hero-overlay">
          <div className="privacy-nexus-innovation-hero-content">
           
            
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="privacy-nexus-innovation-layout">
        {/* Primary Content */}
        <main className="privacy-nexus-innovation-primary-content">
          {/* Introduction */}
          <div className="privacy-nexus-innovation-announcement-block">
            <h2 className="privacy-nexus-innovation-announcement-title">Introducing PrivacyGo</h2>
            <p className="privacy-nexus-innovation-body-text">
              <strong>San Francisco, CA – June 27, 2024</strong> – TikTok is developing a new privacy-tech solution for
              advertisers called <span className="privacy-nexus-innovation-highlight-text">PrivacyGo</span>. PrivacyGo
              will function similarly to a data clean room, allowing brands to match data in a privacy-safe way. For
              instance, a car manufacturer might match prospective customer data with TikTok viewers to measure ad
              success.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              The tool uses{" "}
              <span className="privacy-nexus-innovation-highlight-text">multi-party computation (MPC)</span> and{" "}
              <span className="privacy-nexus-innovation-highlight-text">differential privacy</span> to securely match
              datasets without exposing individual data. This represents a significant advancement in privacy-preserving
              advertising technology, addressing growing concerns about data protection while maintaining advertising
              effectiveness.
            </p>
          </div>

          {/* Why PrivacyGo Matters */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">🔐 Why PrivacyGo Matters</h2>
            <div className="privacy-nexus-innovation-features-showcase">
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🛡️</div>
                <h3 className="privacy-nexus-innovation-feature-name">Secure Data Matching</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Uses multi-party computation (MPC) and differential privacy to securely match datasets without
                  exposing individual data, ensuring complete privacy protection throughout the process.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">📈</div>
                <h3 className="privacy-nexus-innovation-feature-name">Ad Performance Recovery</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Clean rooms like PrivacyGo help recover lost ad performance as privacy laws and platform restrictions
                  limit traditional targeting methods, enabling effective measurement without compromising privacy.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🔓</div>
                <h3 className="privacy-nexus-innovation-feature-name">Open Source Transparency</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  TikTok is making PrivacyGo open-source to increase transparency, with code and methods available on
                  GitHub for community review and contribution.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🏆</div>
                <h3 className="privacy-nexus-innovation-feature-name">Competitive Advantage</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  This move positions TikTok to compete more effectively with Google, Meta, and Amazon for brand
                  advertising budgets by offering superior privacy guarantees.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🏛️</div>
                <h3 className="privacy-nexus-innovation-feature-name">Regulatory Compliance</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  While government concerns over TikTok data practices remain, open-source privacy tools may provide the
                  transparency and assurance needed for regulatory approval.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Architecture */}
          <div className="privacy-nexus-innovation-visual-showcase">
            <div className="privacy-nexus-innovation-showcase-item">
              <img
                src={privacyArchitecture || "/placeholder.svg"}
                alt="PrivacyGo Architecture"
                className="privacy-nexus-innovation-showcase-visual"
              />
              <div className="privacy-nexus-innovation-showcase-content">
                <h3 className="privacy-nexus-innovation-showcase-title">Two-Stage Data Clean Room Architecture</h3>
                <p className="privacy-nexus-innovation-showcase-description">
                  Advanced architecture combining programming and secure execution stages for maximum privacy and
                  usability.
                </p>
              </div>

              
            </div>



            
          </div>

          

          {/* Key Features */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">🔑 Key Features in PrivacyGo</h2>
            <div className="privacy-nexus-innovation-features-showcase">
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">⭐</div>
                <h3 className="privacy-nexus-innovation-feature-name">Clean Room Technology</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Advanced clean room technology for secure data matching without compromising individual privacy or
                  revealing sensitive business information.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">⭐</div>
                <h3 className="privacy-nexus-innovation-feature-name">Differential Privacy</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Ensures individual anonymity through mathematical privacy guarantees, adding carefully calibrated
                  noise to protect personal data.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">⭐</div>
                <h3 className="privacy-nexus-innovation-feature-name">Multi-Party Computation</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Enables secure computation on encrypted data without revealing source information through advanced
                  cryptographic protocols.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">⭐</div>
                <h3 className="privacy-nexus-innovation-feature-name">Open-Source Implementation</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Full transparency with open-source code available for community review, contribution, and independent
                  security audits.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">⭐</div>
                <h3 className="privacy-nexus-innovation-feature-name">Enterprise Trust</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Supports advertiser trust in highly regulated environments with verifiable privacy guarantees and
                  compliance certifications.
                </p>
              </div>
            </div>
          </div>


          <div className="privacy-nexus-innovation-showcase-item">
              <img
                src={privacytiktoksponsored || "/placeholder.svg"}
                alt="PrivacyGo Architecture"
                className="privacy-nexus-innovation-showcase-visual"
              />
              <div className="privacy-nexus-innovation-showcase-content">
                <h3 className="privacy-nexus-innovation-showcase-title">TikTok sponsors IEEE Symposuim on security and privacy 2025</h3>
                
              </div>

              
            </div>

          {/* Technical Deep Dive */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">PrivacyGo Data Clean Room: Technical Overview</h2>
            <p className="privacy-nexus-innovation-body-text">
              <em>
                by Vini Jaiswal, Open Source Manager, Dayeol Lee, Research Scientist and Mingshen Sun, Research
                Scientist at TikTok
              </em>
            </p>

            <h3 className="privacy-nexus-innovation-block-subtitle">Introduction</h3>
            <p className="privacy-nexus-innovation-body-text">
              As part of our ongoing efforts in Privacy Innovation, we are excited to release a new open source project
              called <span className="privacy-nexus-innovation-highlight-text">PrivacyGo Data Clean Room</span>. This
              project allows easy data collaboration on private datasets without compromising individual data. The
              project started as a use case for TikTok to provide interactive tools to protect security and privacy,
              strong access control, accurate data analytics, and easy deployment.
            </p>

            <h3 className="privacy-nexus-innovation-block-subtitle">Technology Background and Challenges</h3>
            <p className="privacy-nexus-innovation-body-text">
              Data collaboration is not a new concept, and numerous data collaboration frameworks already exist.
              However, different frameworks try to apply different privacy-enhancing technologies (PETs), each with its
              own strengths and weaknesses. Traditional data protection methods, such as encryption at rest and in
              transit, offer limited protection when data is being processed.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              Applications and data remain vulnerable to attacks during runtime, regardless of infrastructure access
              privileges. This leaves organizations that store and process sensitive and regulated data exposed to
              potential security breaches. Additionally, without remote attestation, it becomes difficult to verify the
              integrity and authenticity of the computing environment, raising concerns about the security of data in
              use.
            </p>

            <h3 className="privacy-nexus-innovation-block-subtitle">What is PrivacyGo Data Clean Room?</h3>
            <p className="privacy-nexus-innovation-body-text">
              PrivacyGo Data Clean Room (PGDCR) is an open-source project to easily build and deploy data collaboration
              frameworks to the cloud using trusted execution environments (TEEs). PGDCR achieves this by combining
              different privacy-enhancing technologies (PETs) in different stages.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              In the programming stage, the platform allows data consumers to explore the dataset while providing
              interactive data usage and protecting data providers' privacy by provisioning two different datasets. In
              the execution stage, the workload runs in an isolated environment, and data providers can manage the data,
              code, and output space based on the results of their testing.
            </p>
          </div>

          {/* Two-Stage Approach */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">Our Approach: Two-Stage Data Clean Room</h2>
            <p className="privacy-nexus-innovation-body-text">
              PrivacyGo Data Clean Room utilizes different PETs in different processing stages to maximize usability
              while protecting individual data privacy. Specifically, PGDCR divides data analytics into two stages:
            </p>

            <div className="privacy-nexus-innovation-features-showcase">
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">1️⃣</div>
                <h3 className="privacy-nexus-innovation-feature-name">Programming Stage</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  The data scientist uses Jupyter Notebook interface to explore the general data structure and
                  statistical characteristics. Data providers can determine how they protect privacy using
                  differentially-private synthetic data, completely random data, or partial public data.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">2️⃣</div>
                <h3 className="privacy-nexus-innovation-feature-name">Secure Execution Stage</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  The submitted notebook file is built into an image and scheduled to confidential virtual machines
                  (CVMs) in the cloud. Data providers can set up their data such that only an attested program can fetch
                  the data.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">Benefits of Two-Stage Data Clean Room with TEE</h2>
            <div className="privacy-nexus-innovation-tech-showcase">
              <div className="privacy-nexus-innovation-tech-item">Data Provider Control</div>
              <div className="privacy-nexus-innovation-tech-item">Trusted Execution Environment</div>
              <div className="privacy-nexus-innovation-tech-item">Integrity Protection</div>
              <div className="privacy-nexus-innovation-tech-item">Access Control</div>
              <div className="privacy-nexus-innovation-tech-item">Attestation Reports</div>
              <div className="privacy-nexus-innovation-tech-item">Accurate Results</div>
              <div className="privacy-nexus-innovation-tech-item">Interactive Programming</div>
              <div className="privacy-nexus-innovation-tech-item">Cloud-Ready Deployment</div>
            </div>
          </div>

          {/* ManaTEE Donation */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">TikTok Donates ManaTEE to Linux Foundation</h2>
            <p className="privacy-nexus-innovation-body-text">
              <strong>November 11, 2024</strong> – TikTok is marking a major milestone by making its first donation of
              an open source project to an open-source software foundation.{" "}
              <span className="privacy-nexus-innovation-highlight-text">ManaTEE</span>, a Data Clean Room platform built
              on Trusted Execution Environments (TEEs), will now be part of the Linux Foundation's Confidential
              Computing Consortium (CCC).
            </p>

            <div className="privacy-nexus-innovation-visual-showcase">
              <div className="privacy-nexus-innovation-showcase-item">
                <img
                  src={manateePlatform || "/placeholder.svg"}
                  alt="ManaTEE Platform"
                  className="privacy-nexus-innovation-showcase-visual"
                />
                <div className="privacy-nexus-innovation-showcase-content">
                  <h3 className="privacy-nexus-innovation-showcase-title">
                    ManaTEE: Secure Data Collaboration Platform
                  </h3>
                  <p className="privacy-nexus-innovation-showcase-description">
                    Advanced platform enabling secure multi-party data collaboration without compromising privacy.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="privacy-nexus-innovation-block-subtitle">The Evolution of ManaTEE</h3>
            <p className="privacy-nexus-innovation-body-text">
              ManaTEE was originally launched as an open source project in June 2024 as PrivacyGo Data Clean Room, a
              secure data collaboration platform built to address TikTok's internal needs. By combining
              privacy-enhancing technologies with the security of TEEs, ManaTEE allows for privacy-preserving data
              collaboration across industries, whether it's for trusted research, marketing analytics, or machine
              learning.
            </p>

            <h3 className="privacy-nexus-innovation-block-subtitle">Core Capabilities</h3>
            <div className="privacy-nexus-innovation-features-showcase">
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🔒</div>
                <h3 className="privacy-nexus-innovation-feature-name">Secure Multi-Party Collaboration</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Enabling multiple parties to collaborate on data without compromising privacy through advanced
                  cryptographic techniques.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">🧠</div>
                <h3 className="privacy-nexus-innovation-feature-name">AI Training with Private Datasets</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Providing a secure environment for training AI models on sensitive data without exposing underlying
                  information.
                </p>
              </div>
              <div className="privacy-nexus-innovation-feature-tile">
                <div className="privacy-nexus-innovation-feature-icon">📈</div>
                <h3 className="privacy-nexus-innovation-feature-name">Accurate Data Analytics</h3>
                <p className="privacy-nexus-innovation-feature-info">
                  Providing tools necessary for accurate data analytics without compromising privacy or data integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">📢 Community Engagement & Open Source Initiatives</h2>
            <p className="privacy-nexus-innovation-body-text">
              We are hosting technical talks and networking events at major conferences including the USENIX
              Association's Security conference. We unveil our open source efforts and our research scientists introduce
              projects like PrivacyGo, sharing how they fit into real-world applications while effectively addressing
              privacy requirements.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              TikTok's commitment to open source extends beyond individual projects. We've made significant
              contributions to popular open source tools including ESLint, RushJS, and PNPM. Our Privacy Innovation
              initiative includes several sub-projects: PrivacyGo protocol set, PETAce cryptographic framework, and
              comprehensive Data Clean Room solutions.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              If you are participating in these conferences, we would love for you to join us and meet the TikTok
              Privacy Innovation team. Light catering is provided at our networking events. We're passionate about being
              part of the broader open source community and fostering innovation through collaboration.
            </p>
            <p className="privacy-nexus-innovation-body-text">
              <span className="privacy-nexus-innovation-highlight-text">
                #OpenSource #Innovation #DataAndAI #Privacy #TikTokDev
              </span>
            </p>
          </div>

          {/* Resources */}
          <div className="privacy-nexus-innovation-content-block">
            <h2 className="privacy-nexus-innovation-block-title">📖 Resources & Documentation</h2>
            <div className="privacy-nexus-innovation-resources-showcase">
              <div className="privacy-nexus-innovation-resource-tile">
                <h3 className="privacy-nexus-innovation-resource-name">PrivacyGo GitHub Repository</h3>
                <p className="privacy-nexus-innovation-resource-info">
                  Access the complete source code, documentation, and contribution guidelines for PrivacyGo Data Clean
                  Room. Join our growing community of contributors.
                </p>
                <a
                  href="https://github.com/manatee-project/manatee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-nexus-innovation-action-button"
                >
                  View on GitHub
                </a>
              </div>
              <div className="privacy-nexus-innovation-resource-tile">
                <h3 className="privacy-nexus-innovation-resource-name">TikTok Privacy Innovation Blog</h3>
                <p className="privacy-nexus-innovation-resource-info">
                  Learn more about TikTok's privacy innovations, open source initiatives, and technical deep dives from
                  our engineering team.
                </p>
                <a
                  href="https://developers.tiktok.com/blog/privacy-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-nexus-innovation-action-button"
                >
                  Read Blog
                </a>
              </div>
              <div className="privacy-nexus-innovation-resource-tile">
                <h3 className="privacy-nexus-innovation-resource-name">LF AI & Data Annual Report</h3>
                <p className="privacy-nexus-innovation-resource-info">
                  Discover the incredible achievements and growth in the AI and data ecosystem, including
                  privacy-preserving technologies.
                </p>
                <a
                  href="https://lfaidata.foundation/blog/2025/01/13/reflecting-on-an-incredible-year-lf-ai-data-annual-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-nexus-innovation-action-button"
                >
                  View Report
                </a>
              </div>
              <div className="privacy-nexus-innovation-resource-tile">
                <h3 className="privacy-nexus-innovation-resource-name">Technical Documentation</h3>
                <p className="privacy-nexus-innovation-resource-info">
                  Comprehensive technical documentation, API references, and implementation guides for developers and
                  researchers.
                </p>
                <a
                  href="https://developers.tiktok.com/blog/privacygo-data-clean-room-open-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-nexus-innovation-action-button"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="privacy-nexus-innovation-sidebar-panel">
          <div className="privacy-nexus-innovation-sidebar-widget">
            <h3 className="privacy-nexus-innovation-sidebar-heading">🔑 Key Technologies</h3>
            <ul className="privacy-nexus-innovation-sidebar-menu">
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Multi-Party Computation</li>
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Differential Privacy</li>
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Trusted Execution Environments</li>
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Clean Room Technology</li>
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Cryptographic Protocols</li>
              <li className="privacy-nexus-innovation-sidebar-link">⭐ Remote Attestation</li>
            </ul>
          </div>

          <div className="privacy-nexus-innovation-sidebar-widget">
            <h3 className="privacy-nexus-innovation-sidebar-heading">🚀 Project Timeline</h3>
            <ul className="privacy-nexus-innovation-sidebar-menu">
              <li className="privacy-nexus-innovation-sidebar-link">June 2024: PrivacyGo Launch</li>
              <li className="privacy-nexus-innovation-sidebar-link">Nov 2024: ManaTEE Donation</li>
              <li className="privacy-nexus-innovation-sidebar-link">2024: DevDay Conference</li>
              <li className="privacy-nexus-innovation-sidebar-link">2024: Open Source Summit</li>
              <li className="privacy-nexus-innovation-sidebar-link">Ongoing: Community Growth</li>
            </ul>
          </div>

          <div className="privacy-nexus-innovation-sidebar-widget">
            <h3 className="privacy-nexus-innovation-sidebar-heading">🌐 Connect & Contribute</h3>
            <ul className="privacy-nexus-innovation-sidebar-menu">
              <li className="privacy-nexus-innovation-sidebar-link">GitHub Repository</li>
              <li className="privacy-nexus-innovation-sidebar-link">Developer Documentation</li>
              <li className="privacy-nexus-innovation-sidebar-link">Community Discussions</li>
              <li className="privacy-nexus-innovation-sidebar-link">Technical Papers</li>
              <li className="privacy-nexus-innovation-sidebar-link">Conference Presentations</li>
              <li className="privacy-nexus-innovation-sidebar-link">Open Source Contributions</li>
            </ul>
          </div>

          <div className="privacy-nexus-innovation-sidebar-widget">
            <h3 className="privacy-nexus-innovation-sidebar-heading">📊 Impact Metrics</h3>
            <ul className="privacy-nexus-innovation-sidebar-menu">
              <li className="privacy-nexus-innovation-sidebar-link">Open Source Projects: 5+</li>
              <li className="privacy-nexus-innovation-sidebar-link">GitHub Stars: 1000+</li>
              <li className="privacy-nexus-innovation-sidebar-link">Contributors: 50+</li>
              <li className="privacy-nexus-innovation-sidebar-link">Research Papers: 10+</li>
              <li className="privacy-nexus-innovation-sidebar-link">Conference Talks: 20+</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="privacy-nexus-innovation-footer-area">
        <div className="privacy-nexus-innovation-footer-content">
          <div className="privacy-nexus-innovation-footer-brand">Privacy Innovation Initiative</div>
          <p className="privacy-nexus-innovation-footer-tagline">
            Building a more secure and private digital future through open source innovation
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyInnovation;
