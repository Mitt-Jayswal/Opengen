import { useState, useEffect, useRef } from "react"
import { RiUserCommunityFill } from "react-icons/ri"
import { SiGooglemeet } from "react-icons/si"
import {Link} from "react-router-dom"
import '../Design Community Component/CommunityEvents.css'

const AndyLaptopCommunity = () => {
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
              <Link href="/brandamplification/Opengen">
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
              <LaptopScrollToTopLink to="/support/Opengen">
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
              </LaptopScrollToTopLink>
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
              Join us in our upcoming in-person or online events 💙
            </p>
            <br />
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
            <div className="andy-empty-state">
              <div className="nity-coming-soon-wrapper">
                <div className="laptop-empty-icon andy-floating-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="nity-celebration-tooltip">
                  <div className="andy-tooltip-content">
                    <div className="laptop-celebration-icons">🎉 🎊 ✨</div>
                    <div className="nity-tooltip-text">Coming Soon!</div>
                    <div className="andy-tooltip-subtext">Something amazing is brewing...</div>
                  </div>
                </div>
              </div>
              <h3 className="laptop-empty-title">Coming Soon</h3>
              <p className="andy-empty-description">Check back later to join Opengen new events.</p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

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
                  <span className="laptop-feature-icon">🎥</span>
                  <span>Weekly live sessions</span>
                </div>
                <div className="andy-feature-item">
                  <span className="laptop-feature-icon">💬</span>
                  <span>Interactive Q&A</span>
                </div>
                <div className="andy-feature-item">
                  <span className="laptop-feature-icon">📚</span>
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
