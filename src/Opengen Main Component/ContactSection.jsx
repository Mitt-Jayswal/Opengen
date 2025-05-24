"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa"
import { IoMdCall } from "react-icons/io";
import "../Design Opengen Component/ContactSection.css"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
    termsAccepted: false,
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      formData.termsAccepted
    )
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      console.log("Form submitted:", formData)
      // Add your form submission logic here
      alert("Form submitted successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
        termsAccepted: false,
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
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

  return (
    <section ref={sectionRef} className={`sahara-section ${isVisible ? "sahara-visible" : ""}`}>
      <div className="desert-container">
        <div className="oasis-content">
          <h1 className="dune-title">Build better developer experiences with OpenGen</h1>
          <p className="sand-paragraph">
            Great developer communities are built with great advocacy. With OpenGen, documentation, support, and
            developer relations are maintained across the entire workflow, powering a complete set of tools to deliver
            any developer experience.
          </p>

          <ul className="cactus-list">
            <li className="cactus-item">
              <FaCheckCircle className="mirage-icon" />
              Create, tune and deploy your own developer advocacy programs
            </li>
            <li className="cactus-item">
              <FaCheckCircle className="mirage-icon" />
              Automate documentation tracking and governance
            </li>
            <li className="cactus-item">
              <FaCheckCircle className="mirage-icon" />
              Deploy and monitor developer relations at scale
            </li>
          </ul>

          <div className="palm-buttons">
             
            <a href="#schedule" className="camel-secondary">
              Schedule demo <FaArrowRight className="scorpion-arrow" />
            </a>
          </div>
        </div>

        <div className="mesa-form">
          <div className="canyon-header">
            <div className="plateau-title">
              <div className="oasis-icon">
                <IoMdCall className="sandstorm-icon" />
              </div>
              <h2 className="dune-heading">Contact Us</h2>
            </div>
            <a href="#feedback" className="mirage-link">
              Provide feedback <FaArrowRight className="scorpion-arrow" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="nomad-form">
            <div className="caravan-row">
              <div className="tent-group">
                <label htmlFor="firstName" className="bazaar-label">
                  <FaUser className="oasis-input-icon" />
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="dune-input"
                />
              </div>

              <div className="tent-group">
                <label htmlFor="lastName" className="bazaar-label">
                  <FaUser className="oasis-input-icon" />
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="dune-input"
                />
              </div>
            </div>

            <div className="tent-group">
              <label htmlFor="company" className="bazaar-label">
                <FaBuilding className="oasis-input-icon" />
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="dune-input"
              />
            </div>

            <div className="tent-group">
              <label htmlFor="email" className="bazaar-label">
                <FaEnvelope className="oasis-input-icon" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="dune-input"
              />
            </div>

            <div className="tent-group">
              <label htmlFor="message" className="bazaar-label">
                <FaComment className="oasis-input-icon" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                required
                className="sahara-textarea" style={{resize:'none'}}
              ></textarea>
            </div>

            <div className="tent-group sandstorm-checkbox">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="oasis-checkbox"
              />
              <label htmlFor="terms" className="mirage-terms">
                I agree to the{" "}
                <a href="/terms" className="camel-link">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button type="submit" className="desert-submit" disabled={!isFormValid()}>
              <FaPaperPlane className="sandstorm-btn-icon" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
