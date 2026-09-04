import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f8f9ff;
          color: #172033;
        }

        .home-page {
          overflow: hidden;
        }

        /* NAVBAR */

        .navbar {
          height: 76px;
          padding: 0 7%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          color: #182033;
          text-decoration: none;
        }

        .brand span {
          background: linear-gradient(135deg, #5759ed, #8055e8);
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
          font-weight: 600;
          font-size: 14px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #5b5df0;
        }

        .nav-btn {
          text-decoration: none;
          color: white;
          background: #5b5df0;
          padding: 12px 20px;
          border-radius: 9px;
          font-weight: 700;
          transition: 0.3s;
        }

        .nav-btn:hover {
          background: #4547d8;
          transform: translateY(-2px);
        }

        /* HERO */

        .hero {
          min-height: 650px;
          padding: 80px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          background:
            radial-gradient(circle at 85% 20%, #e7e7ff 0%, transparent 35%),
            linear-gradient(135deg, #f8f9ff, #ffffff);
        }

        .hero-content {
          max-width: 610px;
        }

        .hero-tag {
          display: inline-block;
          background: #eeeeff;
          color: #5557dc;
          padding: 9px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: 68px;
          line-height: 1.05;
          letter-spacing: -3px;
          margin: 0 0 25px;
          color: #141a2a;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #5759ed, #8755e8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #687184;
          max-width: 570px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 32px;
        }

        .primary-btn {
          display: inline-block;
          padding: 15px 23px;
          background: linear-gradient(135deg, #5b5df0, #7656e9);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          box-shadow: 0 12px 30px rgba(91, 93, 240, 0.25);
          transition: 0.3s;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 35px rgba(91, 93, 240, 0.3);
        }

        .outline-btn {
          display: inline-block;
          padding: 15px 23px;
          background: white;
          color: #252b3a;
          text-decoration: none;
          border: 1px solid #dfe2eb;
          border-radius: 10px;
          font-weight: 700;
          transition: 0.3s;
        }

        .outline-btn:hover {
          color: #5b5df0;
          border-color: #5b5df0;
        }

        /* HERO IMAGE */

        .hero-image-container {
          position: relative;
          width: 470px;
          height: 500px;
        }

        .hero-image {
          width: 420px;
          height: 460px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 30px 70px rgba(30, 35, 80, 0.2);
        }

        .floating-card {
          position: absolute;
          background: white;
          padding: 14px 18px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 15px 40px rgba(40, 45, 80, 0.16);
        }

        .floating-card .icon {
          font-size: 25px;
        }

        .floating-card strong {
          display: block;
          font-size: 13px;
        }

        .floating-card small {
          display: block;
          color: #7a8292;
          margin-top: 3px;
        }

        .card-one {
          top: 65px;
          left: -40px;
        }

        .card-two {
          bottom: 60px;
          right: -15px;
        }

        /* STATS */

        .stats {
          background: white;
          padding: 40px 7%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
        }

        .stat {
          text-align: center;
        }

        .stat h2 {
          margin: 0;
          color: #5b5df0;
          font-size: 31px;
        }

        .stat p {
          margin: 7px 0 0;
          color: #727a8c;
          font-size: 13px;
        }

        /* SERVICES PREVIEW */

        .home-services {
          padding: 100px 7%;
          background: #f8f9fc;
        }

        .section-title {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 55px;
        }

        .section-title span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .section-title h2 {
          font-size: 42px;
          margin: 12px 0;
        }

        .section-title p {
          color: #737b8c;
          line-height: 1.7;
        }

        .service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid #e9ebf2;
          transition: 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(30, 35, 80, 0.1);
        }

        .service-icon {
          width: 55px;
          height: 55px;
          background: #eeeeff;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .service-card h3 {
          margin: 0 0 10px;
          font-size: 19px;
        }

        .service-card p {
          color: #747c8c;
          line-height: 1.6;
          font-size: 14px;
        }

        /* CTA */

        .home-cta {
          margin: 80px 7%;
          padding: 75px 8%;
          border-radius: 30px;
          text-align: center;
          background: linear-gradient(135deg, #4f51dc, #7954e7);
          color: white;
        }

        .home-cta h2 {
          font-size: 43px;
          margin: 10px 0 15px;
        }

        .home-cta p {
          max-width: 600px;
          margin: auto;
          line-height: 1.7;
          color: #e2e2ff;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 28px;
          padding: 15px 24px;
          border-radius: 10px;
          background: white;
          color: #5254dc;
          text-decoration: none;
          font-weight: 800;
        }

        /* FOOTER */

        .footer {
          background: #111525;
          color: white;
          padding: 50px 7%;
          text-align: center;
        }

        .footer-brand {
          font-size: 21px;
          font-weight: 800;
        }

        .footer-brand span {
          color: #8889ff;
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

          .hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-description {
            margin: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .navbar {
            padding: 0 5%;
          }

          .nav-btn {
            display: none;
          }

          .hero {
            padding: 55px 5%;
          }

          .hero h1 {
            font-size: 45px;
            letter-spacing: -2px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-image-container {
            transform: scale(0.7);
            margin: -70px 0;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .section-title h2 {
            font-size: 32px;
          }

          .home-cta {
            margin: 40px 5%;
            padding: 55px 25px;
          }

          .home-cta h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="home-page">

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

          <Link to="/consultation" className="nav-btn">
            Book Consultation
          </Link>
        </nav>

        {/* HERO */}
        <section className="hero">

          <div className="hero-content">

            <div className="hero-tag">
              🚀 Your Career. Your Growth. Your Future.
            </div>

            <h1>
              Build a Career
              <br />
              <span>You're Proud Of.</span>
            </h1>

            <p className="hero-description">
              From resumes and LinkedIn profiles to interviews and
              career strategy, we help students, freshers and
              professionals move forward with confidence.
            </p>

            <div className="hero-buttons">
              <Link to="/consultation" className="primary-btn">
                Book a Free Consultation →
              </Link>

              <Link to="/services" className="outline-btn">
                Explore Services
              </Link>
            </div>

          </div>

          <div className="hero-image-container">

            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
              alt="Career consultation"
            />

            <div className="floating-card card-one">
              <div className="icon">📄</div>
              <div>
                <strong>Resume</strong>
                <small>ATS Optimized</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <div className="icon">🎯</div>
              <div>
                <strong>Career Growth</strong>
                <small>Build your future</small>
              </div>
            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="stats">

          <div className="stat">
            <h2>100%</h2>
            <p>Personalized Support</p>
          </div>

          <div className="stat">
            <h2>1:1</h2>
            <p>Career Guidance</p>
          </div>

          <div className="stat">
            <h2>360°</h2>
            <p>Career Strategy</p>
          </div>

          <div className="stat">
            <h2>7+</h2>
            <p>Career Services</p>
          </div>

        </section>

        {/* SERVICES */}
        <section className="home-services">

          <div className="section-title">
            <span>OUR EXPERTISE</span>

            <h2>
              Everything You Need
              <br />
              to Move Forward
            </h2>

            <p>
              Practical career support designed to help you present
              yourself professionally and become job-ready.
            </p>
          </div>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>ATS-Friendly Resume</h3>
              <p>
                Build a professional resume designed to highlight
                your skills and experience.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>LinkedIn Optimization</h3>
              <p>
                Improve your LinkedIn profile and professional presence.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Interview Preparation</h3>
              <p>
                Prepare for HR and technical interviews with confidence.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="home-cta">

          <h2>Ready to Build Your Career?</h2>

          <p>
            Take the first step today. Tell us about your career goals
            and we'll help you find the right direction.
          </p>

          <Link to="/consultation" className="cta-btn">
            Book Your Free Consultation →
          </Link>

        </section>

        {/* FOOTER */}
        <footer className="footer">

          <div className="footer-brand">
            <span>GC</span> Career Studio
          </div>

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

export default Home;