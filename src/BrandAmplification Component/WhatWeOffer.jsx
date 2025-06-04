import { useState, useEffect, useRef } from "react"
import "../Design BrandAmplification Component/WhatWeOffer.css"
import { FaThreads } from "react-icons/fa6";

const WhatWeOffer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      title: "LinkedIn Post",
      description:
        "Engaging content in various formats such as text posts, short videos, text with photos, document carousels, and polls.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      title: "Twitter (X) Posts",
      description:
        "Crafting tweets to promote a specific call-to-action. Live tweeting is an option for in-person / virtual events.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Conference Promo",
      description:
        "A customizable package that includes pre-event promo to drive attendance, in-person appearance, live posting, and event recap.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      title: "Medium Article",
      description:
        "A blog article of approximately 500-750 words for the Medium platform, which can include images and CTA.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
      ),
      title: "LinkedIn Newsletter",
      description:
        "A 250-500 word newsletter tailored to your needs; with a specific CTA, sent to subscribers via email.",
    },
    {
      icon: (
         <FaThreads/>
      ),
      title: "Threads Posts",
      description:
        "Creation of engaging threads; each promoting a specific call-to-action. Live threads posts is an option.",
    },
  ]

  return (
    <section ref={sectionRef} className={`we-lion-offer-ics ${isVisible ? "we-lion-offer-visible-ics" : ""}`}>
      <div className="we-tiger-offer-ics">
        <h2 className="we-elephant-offer-ics">WHAT WE OFFER</h2>

        <div className="we-bear-offer-ics">
          {services.map((service, index) => (
            <div
              key={index}
              className={`we-wolf-offer-ics ${isVisible ? "we-wolf-offer-animate-ics" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="we-fox-offer-ics">{service.icon}</div>
              <h3 className="we-giraffe-offer-ics">{service.title}</h3>
              <p className="we-zebra-offer-ics">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer;
