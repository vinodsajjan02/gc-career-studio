import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "📄",
      title: "ATS-Friendly Resume & CV",
      description:
        "Create a professional, recruiter-friendly resume that clearly presents your skills, experience and achievements.",
    },
    {
      icon: "🔗",
      title: "LinkedIn Profile Optimization",
      description:
        "Improve your LinkedIn profile, headline, summary and experience to build a stronger professional presence.",
    },
    {
      icon: "📦",
      title: "Resume + LinkedIn Package",
      description:
        "Get your resume and LinkedIn profile professionally optimized together for a consistent personal brand.",
    },
    {
      icon: "💬",
      title: "Career Consultation",
      description:
        "Get personalized guidance based on your education, skills, career goals and current situation.",
    },
    {
      icon: "🎯",
      title: "Job Search & Career Guidance",
      description:
        "Learn how to approach job searching, identify suitable opportunities and create an effective career strategy.",
    },
    {
      icon: "🎤",
      title: "Interview Preparation",
      description:
        "Prepare for HR and technical interviews through structured practice, questions and personalized feedback.",
    },
    {
      icon: "🚀",
      title: "Personal Branding",
      description:
        "Build a professional identity that communicates your skills, strengths and career value effectively.",
    },
  ];

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
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f8f9fc;
          color: #171d2c;
        }

        .services-page {
          min-height: 100vh;
          background: #f8f9fc;
        }

        /* =========================
           NAVBAR
        ========================= */

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
          color: #172033;
          text-decoration: none;
          font-size: 22px;
          font-weight: 800;
          display: flex;
          align-items: center;
        }

        .brand span {
          color: #ffffff;
          background: linear-gradient(135deg, #5b5df0, #8255e8);
          padding: 8px 10px;
          border-radius: 9px;
          margin-right: 8px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #5d6577;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #5b5df0;
        }

        .nav-btn {
          background: #5b5df0;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 9px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .nav-btn:hover {
          background: #4547d8;
          transform: translateY(-2px);
        }

        /* =========================
           HERO
        ========================= */

        .services-hero {
          padding: 90px 7%;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              #e8e8ff 0%,
              transparent 45%
            ),
            #ffffff;
        }

        .services-hero span {
          color: #5b5df0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .services-hero h1 {
          font-size: 58px;
          line-height: 1.1;
          margin: 15px 0 20px;
          letter-spacing: -2px;
          color: #171d2c;
        }

        .services-hero h1 strong {
          color: #5b5df0;
        }

        .services-hero p {
          max-width: 650px;
          margin: auto;
          color: #737b8d;
          font-size: 17px;
          line-height: 1.7;
        }

        /* =========================
           SERVICES SECTION
        ========================= */

        .services-container {
          max-width: 1150px;
          margin: auto;
          padding: 80px 25px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* SERVICE CARD */

        .service-card {
          background: #ffffff;
          border: 1px solid #e7e9f0;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          min-height: 300px;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(35, 40, 80, 0.11);
          border-color: #d7d7ff;
        }

        /* NUMBER */

        .service-number {
          color: #a5a8b5;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        /* ICON */

        .icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: #eeeeff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 29px;
          margin-bottom: 22px;
          transition: 0.3s;
        }

        .service-card:hover .icon {
          transform: scale(1.08);
        }

        /* SERVICE TITLE */

        .service-card h2 {
          font-size: 20px;
          line-height: 1.35;
          margin: 0 0 12px 0;

          /* IMPORTANT:
             Dark color for service titles
          */

          color: #171d2c !important;

          font-weight: 700;
        }

        /* SERVICE DESCRIPTION */

        .service-card p {
          color: #5f6879 !important;
          line-height: 1.7;
          font-size: 14px;
          margin: 0;
        }

        /* =========================
           CTA SECTION
        ========================= */

        .services-cta {
          margin: 20px 7% 80px;
          padding: 70px 20px;
          text-align: center;
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            #5052dc,
            #7954e7
          );
          color: #ffffff;
        }

        .services-cta h2 {
          font-size: 40px;
          margin: 0 0 15px;
          color: #ffffff;
        }

        .services-cta p {
          color: #e0e0ff;
          max-width: 600px;
          margin: auto;
          line-height: 1.7;
          font-size: 15px;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 25px;
          padding: 15px 24px;
          background: #ffffff;
          color: #5254dc;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 800;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        /* =========================
           FOOTER
        ========================= */

        .footer {
          background: #111525;
          color: #ffffff;
          text-align: center;
          padding: 50px 7%;
        }

        .footer strong {
          font-size: 20px;
        }

        .footer p {
          color: #8990a2;
          font-size: 14px;
          margin-top: 12px;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .nav-links {
            display: none;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-hero h1 {
            font-size: 45px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .navbar {
            padding: 0 5%;
          }

          .nav-btn {
            display: none;
          }

          .brand {
            font-size: 18px;
          }

          .services-hero {
            padding: 65px 5%;
          }

          .services-hero h1 {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .services-hero p {
            font-size: 15px;
          }

          .services-container {
            padding: 55px 15px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 27px;
          }

          .services-cta {
            margin: 20px 5% 60px;
            padding: 55px 20px;
          }

          .services-cta h2 {
            font-size: 30px;
          }

        }

      `}</style>

      <div className="services-page">

        {/* =========================
            NAVBAR
        ========================= */}

        <nav className="navbar">

          <Link to="/" className="brand">
            <span>GC</span>
            Career Studio
          </Link>

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/consultation">
              Consultation
            </Link>

          </div>

          <Link
            to="/consultation"
            className="nav-btn"
          >
            Book Consultation
          </Link>

        </nav>

        {/* =========================
            HERO
        ========================= */}

        <section className="services-hero">

          <span>
            WHAT WE OFFER
          </span>

          <h1>
            Career Services That
            <br />
            <strong>
              Move You Forward
            </strong>
          </h1>

          <p>
            Whether you're a student, fresher or working professional,
            we provide practical guidance to help you present yourself
            better and make smarter career decisions.
          </p>

        </section>

        {/* =========================
            SERVICES
        ========================= */}

        <section className="services-container">

          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="service-card"
                key={service.title}
              >

                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="icon">
                  {service.icon}
                </div>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =========================
            CTA
        ========================= */}

        <section className="services-cta">

          <h2>
            Not Sure Which Service You Need?
          </h2>

          <p>
            That's completely fine. Book a free consultation and
            we'll understand your situation and recommend the right
            approach for you.
          </p>

          <Link
            to="/consultation"
            className="cta-btn"
          >
            Book a Free Consultation →
          </Link>

        </section>

        {/* =========================
            FOOTER
        ========================= */}

        <footer className="footer">

          <strong>
            GC Career Studio
          </strong>

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

export default Services;