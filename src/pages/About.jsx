import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f8f9fc;
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
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          color: #172033;
          text-decoration: none;
        }

        .brand span {
          color: white;
          background: linear-gradient(135deg, #5b5df0, #8055e8);
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

        /* HERO */

        .about-hero {
          padding: 90px 7%;
          display: flex;
          align-items: center;
          gap: 70px;
          background:
            radial-gradient(circle at 80% 20%, #e7e7ff, transparent 35%),
            white;
        }

        .about-image {
          flex: 1;
        }

        .about-image img {
          width: 100%;
          max-width: 560px;
          height: 460px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(30,35,80,0.16);
        }

        .about-content {
          flex: 1;
          max-width: 570px;
        }

        .about-content > span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .about-content h1 {
          font-size: 52px;
          line-height: 1.12;
          margin: 15px 0 22px;
          color: #5b5df0;
        }

        .about-content h1 strong {
          color: #5b5df0;
        }

        .about-content p {
          color: #6f7789;
          line-height: 1.8;
          font-size: 16px;
        }

        .about-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 15px 23px;
          border-radius: 10px;
          background: linear-gradient(135deg, #5b5df0, #7656e8);
          color: white;
          text-decoration: none;
          font-weight: 700;
        }

        /* MISSION */

        .mission {
          padding: 90px 7%;
          background: #f8f9fc;
          text-align: center;
        }

        .mission > span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .mission h2 {
          font-size: 42px;
          max-width: 750px;
          margin: 15px auto;
          color: #5b5df0;
        }

        .mission p {
          max-width: 700px;
          margin: auto;
          color: #727a8b;
          line-height: 1.8;
        }

        /* VALUES */

        .values {
          padding: 100px 7%;
          background: white;
        }

        .values-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .values-title span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .values-title h2 {
          font-size: 40px;
          margin: 12px 0;
          color: #5b5df0;
        }

        .value-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .value-card {
          padding: 32px;
          background: #f8f9fc;
          border-radius: 18px;
          border: 1px solid #eceef3;
          transition: 0.3s;
        }

        .value-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 40px rgba(30,35,80,0.09);
        }

        .value-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eeeeff;
          border-radius: 14px;
          font-size: 26px;
          margin-bottom: 18px;
        }

        .value-card h3 {
          font-size: 19px;
          margin-bottom: 10px;
        }

        .value-card p {
          color: #737b8c;
          line-height: 1.7;
          font-size: 14px;
        }

        /* STATS */

        .about-stats {
          padding: 55px 7%;
          background: #111525;
          color: white;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          text-align: center;
        }

        .about-stat h2 {
          color: #8b8cff;
          font-size: 32px;
          margin: 0;
        }

        .about-stat p {
          color: #9ba1b2;
          font-size: 13px;
        }

        /* CTA */

        .about-cta {
          margin: 80px 7%;
          padding: 75px 20px;
          text-align: center;
          border-radius: 28px;
          background: linear-gradient(135deg, #5052dc, #7954e7);
          color: white;
        }

        .about-cta h2 {
          font-size: 40px;
          margin: 0 0 15px;
        }

        .about-cta p {
          color: #e1e1ff;
          max-width: 600px;
          margin: auto;
          line-height: 1.7;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 25px;
          padding: 15px 24px;
          border-radius: 10px;
          background: white;
          color: #5254dc;
          text-decoration: none;
          font-weight: 800;
        }

        /* FOOTER */

        .footer {
          padding: 45px 7%;
          text-align: center;
          background: #111525;
          color: white;
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

          .about-hero {
            flex-direction: column;
            text-align: center;
          }

          .value-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

        }

        @media (max-width: 600px) {

          .navbar {
            padding: 0 5%;
          }

          .nav-btn {
            display: none;
          }

          .about-hero {
            padding: 60px 5%;
          }

          .about-content h1 {
            font-size: 38px;
          }

          .about-image img {
            height: 330px;
          }

          .value-grid {
            grid-template-columns: 1fr;
          }

          .mission,
          .values {
            padding: 70px 5%;
          }

          .mission h2,
          .values-title h2 {
            font-size: 32px;
          }

          .about-cta {
            margin: 50px 5%;
            padding: 55px 20px;
          }

          .about-cta h2 {
            font-size: 31px;
          }

        }

      `}</style>

      <div>

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

        <section className="about-hero">

          <div className="about-image">

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
              alt="Career professionals discussing"
            />

          </div>

          <div className="about-content">

            <span>ABOUT GC CAREER STUDIO</span>

            <h1>
              Your Career Deserves
              <br />
              <strong>The Right Direction.</strong>
            </h1>

            <p>
              GC Career Studio is a career consultancy focused on helping
              students, freshers and working professionals navigate their
              career journey with greater clarity and confidence.
            </p>

            <p>
              From building a strong resume and LinkedIn profile to
              preparing for interviews and planning your next career move,
              we provide practical and personalized guidance.
            </p>

            <Link to="/consultation" className="about-btn">
              Start Your Career Journey →
            </Link>

          </div>

        </section>

        {/* MISSION */}

        <section className="mission">

          <span>OUR MISSION</span>

          <h2>
            Helping People Turn Career Confusion
            Into Career Confidence.
          </h2>

          <p>
            We believe career growth becomes easier when you have clarity,
            the right presentation, practical preparation and a clear plan.
            Our goal is to help you understand where you are,
            where you want to go and what you need to do next.
          </p>

        </section>

        {/* VALUES */}

        <section className="values">

          <div className="values-title">

            <span>WHAT WE BELIEVE</span>

            <h2>Our Approach</h2>

          </div>

          <div className="value-grid">

            <div className="value-card">

              <div className="value-icon">
                🎯
              </div>

              <h3>Personalized</h3>

              <p>
                Every career journey is different. Our guidance
                focuses on your individual goals and situation.
              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">
                💡
              </div>

              <h3>Practical</h3>

              <p>
                We focus on actionable improvements that you can
                actually apply to your job search and career.
              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">
                🚀
              </div>

              <h3>Growth Focused</h3>

              <p>
                Our goal isn't just to help you get a job,
                but to help you build a stronger professional future.
              </p>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="about-stats">

          <div className="about-stat">
            <h2>360°</h2>
            <p>Career Guidance</p>
          </div>

          <div className="about-stat">
            <h2>1:1</h2>
            <p>Personalized Support</p>
          </div>

          <div className="about-stat">
            <h2>7+</h2>
            <p>Career Services</p>
          </div>

          <div className="about-stat">
            <h2>100%</h2>
            <p>Goal Focused</p>
          </div>

        </section>

        {/* CTA */}

        <section className="about-cta">

          <h2>Ready to Take the Next Step?</h2>

          <p>
            Whether you need help with your resume, interview,
            LinkedIn profile or career direction, we're here to help.
          </p>

          <Link to="/consultation" className="cta-btn">
            Book a Free Consultation →
          </Link>

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

export default About;
