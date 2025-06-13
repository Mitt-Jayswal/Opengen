import { useState, useEffect, useRef } from "react"
import { RiUserCommunityFill } from "react-icons/ri"
import { SiGooglemeet } from "react-icons/si"
import { Link } from "react-router-dom"
import '../Design Community Component/CommunityEvents.css'
import Event from '../assets/events.jpeg'
import { RiLiveFill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";
import { MdInsights } from "react-icons/md";

const AndyLaptopCommunity = () => {

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }


  
  const [nityVisibleSections, setNityVisibleSections] = useState(new Set())
  const andySectionRefs = useRef([])

  const LaptopScrollToTopLink = ({ children, to, className, ...props }) => {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    return (
      <Link href={to} onClick={handleClick} className={className} {...props}>
        {children}
      </Link>
    )
  }

  useEffect(() => {
    const nityObservers = andySectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setNityVisibleSections((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      nityObservers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const setAndySectionRef = (index) => (el) => {
    andySectionRefs.current[index] = el
  }

  return (
    <div className="andy-opengen-page">
      {/* Community Section */}
      <section
        ref={setAndySectionRef(0)}
        className={`laptop-opengen-section nity-community-section ${nityVisibleSections.has(0) ? "andy-visible" : ""}`}
      >
        <div className="nity-section-container">
          <div className="andy-section-headerrt">
            <h1 className="laptop-section-title nity-main-heading">Join the Opengen Community</h1>
            <p className="andy-section-description nity-main-text">
              Our community is made up of Data Professionals, AI Engineers, AI developers, researchers, data scientists,
              enthusiasts and people who are interested in building with and advancing AI and Data resources. Join us!
            </p>
          </div>

          <div className="laptop-community-grid-two">
            <div className="nity-community-action">
              <div className="andy-action-icon laptop-discord-icon">
                <RiUserCommunityFill />
              </div>
              <h3 className="nity-action-title">Join our community</h3>
              <Link to="/support/Opengen" onClick={handleNavClick}>
                <button className="andy-action-button laptop-primary-button">
                  Want to Amplify your Brand ?
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="nity-community-action">
              <div className="andy-action-icon laptop-story-icon">
                <SiGooglemeet />
              </div>
              <h3 className="nity-action-title">Host a Meetup</h3>
              <Link to="/support/Opengen">
                <button className="andy-action-button laptop-secondary-button">
                  Schedule a Call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="nity-social-links">
            <Link href="#" className="andy-social-link laptop-instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#e6c068"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>
            <Link href="#" className="andy-social-link laptop-twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6c068" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/vinijaiswal/" className="andy-social-link laptop-linkedin">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6c068" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#" className="andy-social-link laptop-youtube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#e6c068" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        ref={setAndySectionRef(1)}
        className={`laptop-opengen-section nity-events-section ${nityVisibleSections.has(1) ? "andy-visible" : ""}`}
      >
        <div className="nity-section-container">
          <div className="andy-section-header">
            <h2 className="laptop-section-title nity-events-heading">Upcoming Events</h2>
            <p className="andy-section-description nity-events-text">
              Join us in our upcoming in-person or online events 
            </p>
            <button className="nity-events-button">
              See the upcoming events
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="laptop-events-container">
            <img
  src={Event}
  alt="Data + AI Summit 2025"
  className="andy-event-image"
/>


            {/* Event content */}
            <div className="nity-event-content">
              {/* Next week badge */}
              <div className="laptop-next-week-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
                </svg>
                <Link to="https://www.linkedin.com/pulse/apache-spark-community-data-ai-summit-from-genai-agents-vini-jaiswal-xzjfc/?trackingId=ApbLmTEDT1qgG4Kz8lNOFw%3D%3D" style={{textDecoration:'none',color:'#000000'}}>
                Happening Now!
                </Link>
              </div>

              {/* Coming soon floating icon */}
              <div className="andy-empty-state">
                <div className="nity-coming-soon-wrapper">
                  
                  <div className="nity-celebration-tooltip">
                    <div className="andy-tooltip-content">
                      <div className="laptop-celebration-icons">🎉 🎊 ✨</div>
                      <div className="nity-tooltip-text">Stay Tuned</div>
                      <div className="andy-tooltip-subtext">Something amazing is brewing...</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main heading */}
              <h3 className="laptop-event-main-heading">
                Apache Spark Community to Data + AI Summit | From Spark to GenAI, Agents and Beyond
              </h3>

              {/* Horizontal info container */}
              <div className="andy-event-info-horizontal">
                <div className="nity-info-section">
                  <h4 className="laptop-info-heading">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                    Summit Evolution
                  </h4>
                  <p className="andy-info-text">
                    What began as a modest Spark meetup in 2013 has grown into one of the most influential gatherings in
                    the data and AI ecosystem. Twelve years later, the conversation has evolved far beyond distributed
                    computing. Today, it spans Generative AI, AI agents, data governance, trust and privacy, and the
                    realities of running production-grade LLMs.
                  </p>
                  <div className="nity-feature-list">
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">When Spark needed SQL, the community built it.</div>
                    </div>
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">When streaming became critical, they made it structured.</div>
                    </div>
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">
                        When machine learning demanded reproducibility, MLflow was born.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nity-info-section">
                  <h4 className="laptop-info-heading">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                    Industry Impact
                  </h4>
                  <p className="andy-info-text">
                    The Data + AI Summit—formerly known as Spark Summit and Spark + AI Summit, is an annual conference
                    initiated by Databricks and a longstanding reflection of where the data and AI community is heading.
                    From open-source foundations like Apache Spark, MLflow and Delta Lake to newer evolutions like Unity
                    Catalog, Clean Rooms, Unified Table Formats, AI gateways, and Llama/Claude integrations.
                  </p>
                  <div className="nity-feature-list">
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.25-11.25v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zm0 4v4.75a.75.75 0 0 1-1.5 0v-4.75a.75.75 0 0 1 1.5 0z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">
                        When data needed reliability at scale, Delta Lake emerged to solve it.
                      </div>
                    </div>
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">
                        When sharing and privacy presented barriers, Unity Catalog and Data Clean Room emerged.
                      </div>
                    </div>
                    <div className="laptop-feature-row">
                      <div className="andy-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div className="nity-feature-text">
                        As the 2025 edition approaches, exploring innovations that shape modern production AI.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestreams Section */}
      <section
        ref={setAndySectionRef(2)}
        className={`laptop-opengen-section nity-livestreams-section ${nityVisibleSections.has(2) ? "andy-visible" : ""}`}
      >
        <div className="nity-section-container">
          <div className="andy-livestreams-content">
            <div className="laptop-livestreams-text">
              <h2 className="laptop-section-title nity-livestream-heading">Opengen Livestreams</h2>
              <p className="andy-section-description nity-livestream-text">
                Join our weekly livestreams where we dive deep into developer advocacy strategies, community building
                techniques, and the latest trends in developer relations.
              </p>
              <div className="nity-livestream-features">
                <div className="andy-feature-item">
                  <span className="laptop-feature-icon">
                    <RiLiveFill style={{color:'#e6c068'}}/>
                  </span>
                  <span>Weekly live sessions</span>
                </div>
                <div className="andy-feature-item">
                  <span className="laptop-feature-icon">
                    <MdLiveHelp style={{color:'#e6c068'}}/>
                  </span>
                  <span>Interactive Q&A</span>
                </div>
                <div className="andy-feature-item">
                  <span className="laptop-feature-icon">
                    <MdInsights style={{color:'#e6c068'}}/>
                  </span>
                  <span>Expert insights</span>
                </div>
              </div>
              <button className="nity-livestream-button">
                Watch Latest Stream (Coming Soon)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="laptop-livestreams-visual">
              <div className="andy-coming-soon-container">
                <div className="nity-coming-soon-wrapper">
                  <div className="laptop-coming-soon-icon andy-floating-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 10l-4 4l6 6l4-16l-16 4l6 6l4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="nity-celebration-tooltip">
                    <div className="andy-tooltip-content">
                      <div className="laptop-celebration-icons">🚀 🎬 🌟</div>
                      <div className="nity-tooltip-text">Coming Soon!</div>
                      <div className="andy-tooltip-subtext">Epic streams incoming...</div>
                    </div>
                  </div>
                </div>
                <h3 className="laptop-coming-soon-title nity-livestream-coming-title">Coming Soon</h3>
                <p className="andy-coming-soon-text nity-livestream-coming-text">
                  Our livestreams will be available here shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* Meetup Section */}
      <section
        ref={setAndySectionRef(3)}
        className={`laptop-opengen-section nity-meetup-section ${nityVisibleSections.has(3) ? "andy-visible" : ""}`}
      >
        <div className="nity-section-container">
          <div className="andy-meetup-grid">
            <div className="laptop-meetup-card">
              <div className="nity-meetup-header">
                <h2 className="laptop-section-title nity-meetup-heading">The Opengen Meetup</h2>
                <p className="andy-section-description nity-meetup-text">
                  Connect with fellow developer advocates in your city. Our global meetup network brings together DevRel
                  professionals for networking, learning, and collaboration.
                </p>
              </div>
              <div className="laptop-meetup-stats">
                <div className="andy-stat-item">
                  <div className="nity-stat-number">25+</div>
                  <div className="laptop-stat-label">Cities</div>
                </div>
                <div className="andy-stat-item">
                  <div className="nity-stat-number">500+</div>
                  <div className="laptop-stat-label">Members</div>
                </div>
                <div className="andy-stat-item">
                  <div className="nity-stat-number">50+</div>
                  <div className="laptop-stat-label">Events</div>
                </div>
              </div>
              <div className="nity-meetup-actions">
                <button className="andy-meetup-button laptop-primary">Find Local Meetup</button>
              </div>
            </div>
            <div className="laptop-meetup-locations">
              <div className="andy-coming-soon-container nity-meetup-coming-soon">
                <div className="nity-coming-soon-wrapper">
                  <div className="laptop-coming-soon-icon andy-floating-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.5 21h-11c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12h.01M8 12h.01M16 12h.01M12 16h.01M8 16h.01M16 16h.01M12 8h.01M8 8h.01M16 8h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="nity-celebration-tooltip">
                    <div className="andy-tooltip-content">
                      <div className="laptop-celebration-icons">🌍 🤝 🎪</div>
                      <div className="nity-tooltip-text">Coming Soon!</div>
                      <div className="andy-tooltip-subtext">Global meetups loading...</div>
                    </div>
                  </div>
                </div>
                <h3 className="laptop-coming-soon-title">Coming Soon</h3>
                <p className="andy-coming-soon-text">Our meetup locations will be announced here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default AndyLaptopCommunity;
