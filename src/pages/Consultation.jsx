import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://gc-career-studio-backend.onrender.com/api/leads";

function Consultation() {

  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    careerStatus: "",
    experience: "",
    targetRole: "",
    location: "",
    preferredService: "",
    linkedinUrl: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {

      await axios.post(API_URL, formData);

      setStatus("success");

      setFormData(initialForm);

    } catch (err) {

      console.error(err);

      setStatus("error");

    }
  };

  // Load the Calendly widget script once when this page mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f7fb;
          color: #171d2c;
        }

        /* NAVBAR */

        .navbar {
          height: 76px;
          padding: 0 7%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          color: #172033;
          text-decoration: none;
        }

        .brand span {
          background: linear-gradient(135deg, #5b5df0, #8055e8);
          color: white;
          padding: 8px 10px;
          border-radius: 9px;
          margin-right: 7px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #5e6678;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-links a:hover {
          color: #5b5df0;
        }

        .nav-btn {
          color: white;
          background: #5b5df0;
          padding: 12px 20px;
          border-radius: 9px;
          text-decoration: none;
          font-weight: 700;
        }

        /* PAGE */

        .consultation-page {
          min-height: 100vh;
        }

        .consultation-header {
          text-align: center;
          padding: 65px 20px 35px;
        }

        .consultation-header span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .consultation-header h1 {
          font-size: 48px;
          margin: 13px 0;
        }

        .consultation-header p {
          color: #737b8d;
          max-width: 620px;
          margin: auto;
          line-height: 1.7;
        }

        /* FORM AREA */

        .form-layout {
          max-width: 1100px;
          margin: 30px auto 90px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 0.8fr 1.5fr;
          gap: 30px;
          align-items: start;
        }

        /* LEFT */

        .info-card {
          background: linear-gradient(135deg, #5153dc, #7954e7);
          color: white;
          padding: 35px;
          border-radius: 22px;
          position: sticky;
          top: 100px;
        }

        .info-card h2 {
          font-size: 27px;
          margin-top: 0;
        }

        .info-card > p {
          color: #e1e1ff;
          line-height: 1.7;
          font-size: 14px;
        }

        .benefit {
          display: flex;
          gap: 12px;
          margin-top: 25px;
        }

        .benefit-icon {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.15);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit strong {
          display: block;
          font-size: 14px;
        }

        .benefit small {
          display: block;
          margin-top: 5px;
          color: #dedfff;
        }

        /* FORM */

        .form-card {
          background: white;
          padding: 35px;
          border-radius: 22px;
          box-shadow: 0 15px 45px rgba(30,35,70,0.08);
          border: 1px solid #e9eaf0;
        }

        .form-card h2 {
          margin-top: 0;
          font-size: 25px;
          color: #5b5df0;
        }

        .form-card .subtitle {
          color: #7a8190;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 7px;
          color: #343b4c;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #dfe2e9;
          border-radius: 9px;
          padding: 13px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: 0.2s;
          background: white;
          color: #171d2c;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #9aa1b0;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #5b5df0;
          box-shadow: 0 0 0 3px rgba(91,93,240,0.08);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .submit-btn {
          width: 100%;
          border: none;
          padding: 15px;
          margin-top: 22px;
          border-radius: 10px;
          background: linear-gradient(135deg, #5b5df0, #7656e8);
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(91,93,240,0.25);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          margin-top: 18px;
          padding: 13px;
          border-radius: 9px;
          background: #e9f9ef;
          color: #16803b;
          font-size: 14px;
        }

        .error-message {
          margin-top: 18px;
          padding: 13px;
          border-radius: 9px;
          background: #fff0f0;
          color: #d93030;
          font-size: 14px;
        }

        /* CALENDLY SECTION */

        .booking-section {
          max-width: 1100px;
          margin: 0 auto 90px;
          padding: 0 20px;
        }

        .booking-card {
          background: white;
          padding: 35px;
          border-radius: 22px;
          box-shadow: 0 15px 45px rgba(30,35,70,0.08);
          border: 1px solid #e9eaf0;
          text-align: center;
        }

        .booking-card h2 {
          margin-top: 0;
          font-size: 25px;
          color: #5b5df0;
        }

        .booking-card .subtitle {
          color: #7a8190;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .calendly-inline-widget {
          margin-top: 20px;
          border-radius: 14px;
          overflow: hidden;
        }

        /* FOOTER */

        .footer {
          background: #111525;
          color: white;
          padding: 45px;
          text-align: center;
        }

        .footer p {
          color: #8990a2;
          font-size: 14px;
        }

        /* MOBILE */

        @media (max-width: 900px) {

          .nav-links {
            display: none;
          }

          .form-layout {
            grid-template-columns: 1fr;
          }

          .info-card {
            position: static;
          }

        }

        @media (max-width: 600px) {

          .navbar {
            padding: 0 5%;
          }

          .nav-btn {
            display: none;
          }

          .consultation-header h1 {
            font-size: 35px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .full-width {
            grid-column: auto;
          }

          .form-card {
            padding: 23px;
          }

          .form-layout {
            padding: 0 12px;
          }

          .booking-card {
            padding: 20px;
          }

        }

      `}</style>

      <div className="consultation-page">

        {/* NAVBAR */}

        <nav className="navbar">

          <Link to="/" className="brand">
            <span>GC</span>
            Career Studio
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/consultation">Consultation</Link>
          </div>

          <Link to="/services" className="nav-btn">
            View Services
          </Link>

        </nav>

        {/* HEADER */}

        <section className="consultation-header">

          <span>LET'S TALK ABOUT YOUR CAREER</span>

          <h1>Book a Free Consultation</h1>

          <p>
            Tell us about yourself, your career goals and where you
            need help. We'll review your details and get in touch with you.
          </p>

        </section>

        {/* FORM */}

        <section className="form-layout">

          {/* LEFT INFORMATION */}

          <div className="info-card">

            <h2>
              Let's Build Your
              <br />
              Career Roadmap.
            </h2>

            <p>
              A short conversation can help you understand your
              next career move and identify the areas you need to improve.
            </p>

            <div className="benefit">

              <div className="benefit-icon">
                🎯
              </div>

              <div>
                <strong>Personalized Guidance</strong>
                <small>Advice based on your goals</small>
              </div>

            </div>

            <div className="benefit">

              <div className="benefit-icon">
                📄
              </div>

              <div>
                <strong>Profile Review</strong>
                <small>Resume & LinkedIn guidance</small>
              </div>

            </div>

            <div className="benefit">

              <div className="benefit-icon">
                🚀
              </div>

              <div>
                <strong>Clear Next Steps</strong>
                <small>Know what to focus on next</small>
              </div>

            </div>

          </div>

          {/* FORM CARD */}

          <div className="form-card">

            <h2>Tell Us About Yourself</h2>

            <p className="subtitle">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name *</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Current Career Status</label>

                  <select
                    name="careerStatus"
                    value={formData.careerStatus}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select your status
                    </option>

                    <option value="Student">
                      Student
                    </option>

                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="Working Professional">
                      Working Professional
                    </option>

                    <option value="Career Transition">
                      Looking for Career Transition
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Years of Experience</label>

                  <input
                    type="text"
                    name="experience"
                    placeholder="Example: 0, 1, 2..."
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Target Role / Career Goal</label>

                  <input
                    type="text"
                    name="targetRole"
                    placeholder="Example: Java Developer"
                    value={formData.targetRole}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Current Location</label>

                  <input
                    type="text"
                    name="location"
                    placeholder="City / Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Service</label>

                  <select
                    name="preferredService"
                    value={formData.preferredService}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Resume Building">
                      Resume Building
                    </option>

                    <option value="LinkedIn Optimization">
                      LinkedIn Optimization
                    </option>

                    <option value="Resume + LinkedIn Package">
                      Resume + LinkedIn Package
                    </option>

                    <option value="Interview Preparation">
                      Interview Preparation
                    </option>

                    <option value="Career Consultation">
                      Career Consultation
                    </option>

                    <option value="Job Search / Career Guidance">
                      Job Search / Career Guidance
                    </option>

                    <option value="Personal Branding">
                      Personal Branding
                    </option>
                  </select>
                </div>

                <div className="form-group full-width">

                  <label>LinkedIn Profile URL</label>

                  <input
                    type="url"
                    name="linkedinUrl"
                    placeholder="https://linkedin.com/in/yourname"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group full-width">

                  <label>
                    Tell us about your career goals
                  </label>

                  <textarea
                    name="notes"
                    placeholder="What are you currently struggling with? What kind of help are you looking for?"
                    value={formData.notes}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Submit Consultation Request →"}
              </button>

              {status === "success" && (
                <div className="success-message">
                  ✓ Thank you! We've received your details and
                  will get in touch with you soon.
                </div>
              )}

              {status === "error" && (
                <div className="error-message">
                  ✕ Something went wrong. Please try again.
                </div>
              )}

            </form>

          </div>

        </section>

        {/* CALENDLY BOOKING SECTION */}

        <section className="booking-section">

          <div className="booking-card">

            <h2>Prefer to Pick a Time Directly?</h2>

            <p className="subtitle">
              Skip the form and book a free 30-minute consultation slot right now.
            </p>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/vinodsajjan022/30min"
              style={{ minWidth: "320px", height: "630px" }}
            ></div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="footer">

          <strong>GC Career Studio</strong>

          <p>
            Helping students, freshers and professionals build better careers.
          </p>

          <p>
            © 2026 GC Career Studio. All rights reserved.
          </p>

        </footer>

      </div>
    </>
  );
}

export default Consultation;
