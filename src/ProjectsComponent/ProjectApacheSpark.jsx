import { useEffect, useRef } from "react";
import "./ProjectApacheSpark.css"
import GenAi from "../assets/apachesparkimage1.png"
import framework from "../assets/Framwworkcomparision.png";

const ProjectApacheSpark = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll")
    elementsToAnimate.forEach((el) => observer.observe(el))

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="harleygg-project-spark">
      {/* Header Section */}
      <header className="yamahagg-header">
        <div className="kawasakigg-header-content">
          <h1 className="ducatigg-header-title">
            Apache Spark Community to Data + AI Summit | From Spark to GenAI, Agents and Beyond
          </h1>
          <p className="hondagg-header-subtitle">
            What began as a modest Spark meetup in 2013 has grown into one of the most influential gatherings in the
            data and AI ecosystem
          </p>
          <div className="suzukigg-header-date">2025 Data + AI Summit</div>
        </div>
        <div className="bmwgg-wave-pattern"></div>
      </header>

      {/* Main Content */}
      <main className="ktmgg-main-content">
        <div className="triumphgg-content-wrapper">
          {/* Left Content */}
          <div className="apriligg-left-content">
            <div className="husqvarnagg-main-text">
              <div className="mvgg-intro-section animate-on-scroll">
                <p className="royalenfieldgg-intro-text">
                  What began as a modest Spark meetup in 2013 has grown into one of the most influential gatherings in
                  the data and AI ecosystem. Twelve years later, the conversation has evolved far beyond distributed
                  computing. Today, it spans Generative AI, AI agents, data governance, trust and privacy, and the
                  realities of running production-grade LLMs.
                </p>

                <p className="indiangg-intro-text">
                  The Data + AI Summit—formerly known as Spark Summit and Spark + AI Summit, is an annual conference
                  initiated by Databricks and a longstanding reflection of where the data and AI community is heading.
                  From open-source foundations like Apache Spark, MLflow and Delta Lake to newer evolutions like Unity
                  Catalog, Clean Rooms, Unified Table Formats, AI gateways, and Llama/Claude integrations, the summit
                  has consistently spotlighted the tools, architectures, and ideas shaping the modern production AI.
                </p>

                <p className="victorygg-intro-text">
                  As the 2025 edition approaches, this article looks back on the summit's evolution—tracing its journey
                  from early open-source and distributed compute to the edge of agentic AI, and exploring the
                  innovations, people, and architectural shifts that have made it a core part of the industry's
                  momentum.
                </p>
              </div>

              <div className="benelligg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">Introduction</h2>
                <p className="vespagg-section-text">
                  The Data + AI Summit is where open-source contributors, system architects, AI builders, visionaries
                  and latest trends come together to inspire and push the boundaries of what's possible with data and
                  intelligence. It has become a launchpad for technologies that power everything from data engineering,
                  ETL pipelines and real-time analytics to large-scale AI systems and enterprise-grade governance.
                </p>

                <p className="piaggigg-section-text">
                  What sets this summit apart is how closely it has tracked the needs of developers.
                </p>

                <div className="cannondalgg-feature-list">
                  <div className="trekgg-feature-item">When Spark needed SQL, the community built it.</div>
                  <div className="trekgg-feature-item">When streaming became critical, they made it structured.</div>
                  <div className="trekgg-feature-item">
                    When machine learning demanded reproducibility, MLflow was born.
                  </div>
                  <div className="trekgg-feature-item">
                    When data needed reliability at scale, Delta Lake emerged to solve it.
                  </div>
                  <div className="trekgg-feature-item">
                    When sharing and privacy presented barriers, Unity Catalog and Data Clean Room emerged.
                  </div>
                </div>

                <p className="giantgg-section-text">
                  Year after year, the summit has evolved in lockstep with the challenges and ambitions of the data and
                  AI community—bringing together practitioners who are not just building tools, but defining the
                  foundations of tomorrow's intelligent systems.
                </p>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">
                  The Origins: Apache Spark and a Community on the Rise (2013–2015)
                </h2>
                <p className="vespagg-section-text">
                  In 2013, the inaugural Spark Summit gathered 450 participants from over 180 companies across 13
                  countries. With keynotes from Databricks, UC Berkeley's AMPLab, and Yahoo, the summit featured
                  discussions primarily around fault-tolerant distributed processing and parallel data operations in
                  memory-bound environments and introduced Apache Spark as a new approach that challenged MapReduce,
                  offering in-memory computation and new programming abstractions like RDDs, spanning a developer
                  community of 100 developers from 25 companies contributing to the code.
                </p>
              </div>

              {/* Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img
                  src={framework || "/placeholder.svg"}
                  alt="Apache Spark Origins"
                  className="pinarellogg-full-image"
                />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">Framework Comparison Analysis</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">Historical Milestone</div>
                  <h4 className="ridleygg-toast-title">Apache Spark Origins: From 450 to Global Community</h4>
                </div>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <p className="vespagg-section-text">
                  The momentum accelerated in 2014, with the summit drawing 1,164 attendees from 453 companies, marking
                  Spark's entry into real-world domains like neuroscience, image processing and genomics. Most active
                  community in the hadoop ecosystem, with total contributors rising to 255 (from 68 in 2013), 50
                  companies contributing code (from 17 in 2013) and lines of code rising to 155,000 (from 63k in 2013)
                  as updated by Matei Zaharia.
                </p>

                <p className="piaggigg-section-text">
                  That year, Databricks Cloud was introduced by Ion Stoica and Ali Ghodsi with goals of simplifying big
                  data workflows with managed, scalable Spark clusters. Key technical advancements included the debut of
                  Spark SQL for unified relational and procedural processing, enhancements to MLlib for scalable machine
                  learning, and the launch of SparkR, enabling R users to run distributed analytics on Spark, as
                  introduced by Patrick Wendell.
                </p>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">
                  2016–2017: Streaming, Structured APIs, and the Shift to the Cloud
                </h2>
                <p className="vespagg-section-text">
                  By 2016, Apache Spark had matured into a leading platform for large-scale data engineering and saw the
                  adoptions in major companies. The Databricks user survey revealed that over 61% of workloads had moved
                  to the public cloud, reflecting Spark's growing dominance in elastic environments.
                </p>
              </div>

              {/* Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Spark Streaming Evolution"
                  className="pinarellogg-full-image"
                />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">Streaming Evolution Timeline</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">Technical Evolution</div>
                  <h4 className="ridleygg-toast-title">Streaming Revolution: Structured APIs and Cloud Migration</h4>
                </div>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">2018–2020: Enter AI, Delta Lake, and MLflow</h2>
                <p className="vespagg-section-text">
                  2018 marked a branding and conceptual shift—Spark Summit officially became Spark + AI Summit,
                  recognizing that machine learning and deep learning had become central to how Spark was being used in
                  production. With over 2,300 attendees, the summit featured talks from Netflix, Salesforce, and NVIDIA,
                  with sessions diving into reinforcement learning, distributed training, and GPU acceleration.
                </p>

                <p className="piaggigg-section-text">
                  In 2019, the Spark + AI Summit brought nearly 5,000 participants to San Francisco and marked one of
                  the most pivotal years in the platform's history. The headline announcements were the releases of two
                  open-source projects: Delta Lake and MLflow.
                </p>
              </div>

              {/* Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Delta Lake and MLflow Launch"
                  className="pinarellogg-full-image"
                />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">Delta Lake & MLflow Innovation</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">Open Source Innovation</div>
                  <h4 className="ridleygg-toast-title">Delta Lake & MLflow: Transforming Data Reliability</h4>
                </div>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">
                  2021–2023: Unifying Data and AI with the Lakehouse Architecture
                </h2>
                <p className="vespagg-section-text">
                  2021 was the year the Lakehouse architecture formally took center stage. Framed as the unification of
                  data lakes and data warehouses, the Lakehouse model combined low-cost object storage with performance
                  optimizations and transactional guarantees.
                </p>
              </div>

              {/* Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Lakehouse Architecture"
                  className="pinarellogg-full-image"
                />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">Lakehouse Architecture Paradigm</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">Architecture Paradigm</div>
                  <h4 className="ridleygg-toast-title">Lakehouse: Unifying Data Lakes and Warehouses</h4>
                </div>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">
                  2024–2025: GenAI, RAG, and the Future of Intelligent Systems
                </h2>
                <p className="vespagg-section-text">
                  2024 marked the summit's evolution into the GenAI frontier, hosting over 16,000 in-person and 40,000+
                  attendees virtually. The conversation shifted from pipelines and governance to large language models,
                  Serverless, retrieval-augmented generation (RAG), and LLM operationalization.
                </p>
              </div>

              {/* Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img src={GenAi || "/placeholder.svg"} alt="GenAI and RAG Systems" className="pinarellogg-full-image" />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">GenAI Revolution Landscape</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">AI Revolution</div>
                  <h4 className="ridleygg-toast-title">GenAI Era: RAG, LLMs and Intelligent Systems</h4>
                </div>
              </div>

              <div className="specializedgg-section animate-on-scroll">
                <h2 className="motoguzzigg-section-title">
                  2025: MCP, Unified Table Formats, and Agentic AI in Production
                </h2>
                <p className="vespagg-section-text">
                  The 2025 Data + AI Summit marks a defining moment—where the community transitions from building GenAI
                  capabilities to deploying governed, agentic AI systems at scale. Central to this year's theme is the
                  operationalization of the Model Context Protocol (MCP).
                </p>

                <p className="piaggigg-section-text">
                  What makes this community remarkable isn't just the speed of innovation. It's the continuity—the way
                  ideas incubated in open source grew into production systems that now power mission-critical
                  infrastructure across the world.
                </p>
              </div>

              {/* Final Full Width Image with Title Overlay */}
              <div className="cervellogg-image-container animate-on-scroll">
                <img
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Future of AI Systems"
                  className="pinarellogg-full-image"
                />
                <div className="ferrarigg-image-title-overlay">
                  <div className="lamborghinigg-title-line"></div>
                  <h3 className="porschegg-image-title">Future AI Systems Vision</h3>
                </div>
                <div className="bianchigg-image-toast">
                  <div className="orbgg-toast-label">Future Vision</div>
                  <h4 className="ridleygg-toast-title">2025 & Beyond: Agentic AI and Production Systems</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="scottgg-right-sidebar animate-on-scroll">
            <div className="raleighgg-sidebar-container">
              <h3 className="fujigg-sidebar-title">🔑 Key Summit Milestones</h3>

              <div className="merckxgg-key-features">
                <div className="colnagogg-key-feature">
                  <strong>2013:</strong> 450 participants, Apache Spark launch
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2014:</strong> 1,164 attendees, Spark SQL debut
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2015:</strong> 2,000+ attendees, DataFrames introduction
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2016-2017:</strong> Structured Streaming, Cloud adoption
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2018:</strong> Spark + AI Summit, 2,300 attendees
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2019:</strong> 5,000 participants, Delta Lake & MLflow
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2020:</strong> 70,000 virtual attendees, Lakehouse architecture
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2021:</strong> Delta Lake 1.0, Unity Catalog
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2022-2023:</strong> Real-time analytics, Cross-platform federation
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2024:</strong> 16,000 in-person, GenAI & RAG focus
                </div>

                <div className="colnagogg-key-feature">
                  <strong>2025:</strong> Agentic AI, MCP, Unified Table Formats
                </div>

                <div className="lookgg-documentation-link">
                  🚀 From 450 to 70,000+ attendees - The evolution of data and AI innovation continues at the 2025 Data
                  + AI Summit!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectApacheSpark;
