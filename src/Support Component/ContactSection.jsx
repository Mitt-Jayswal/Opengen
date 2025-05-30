"use client"

import { useState, useEffect, useRef } from "react"
import { FaUser, FaBuilding, FaEnvelope, FaComment, FaPaperPlane, FaArrowRight, FaCheckCircle } from "react-icons/fa"
import { IoMdCall } from "react-icons/io"
import "../Design Support Component/ContactSection.css"

const ContactPageSection = () => {
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
              Know more about OpenGen Events <FaArrowRight className="scorpion-arrow" />
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
              <div className="tent-group floating-label-group">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="dune-input floating-input"
                  placeholder=" "
                />
                <label htmlFor="firstName" className="floating-label">
                  <FaUser className="oasis-input-icon" />
                  First Name
                </label>
              </div>

              <div className="tent-group floating-label-group">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="dune-input floating-input"
                  placeholder=" "
                />
                <label htmlFor="lastName" className="floating-label">
                  <FaUser className="oasis-input-icon" />
                  Last Name
                </label>
              </div>
            </div>

            <div className="tent-group floating-label-group">
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="dune-input floating-input"
                placeholder=" "
              />
              <label htmlFor="company" className="floating-label">
                <FaBuilding className="oasis-input-icon" />
                Company
              </label>
            </div>

            <div className="tent-group floating-label-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="dune-input floating-input"
                placeholder=" "
              />
              <label htmlFor="email" className="floating-label">
                <FaEnvelope className="oasis-input-icon" />
                Email
              </label>
            </div>

            <div className="tent-group floating-label-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                required
                className="sahara-textarea floating-input"
                placeholder=" "
                style={{ resize: "none" }}
              ></textarea>
              <label htmlFor="message" className="floating-label">
                <FaComment className="oasis-input-icon" />
                Message
              </label>
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

export default ContactPageSection;
