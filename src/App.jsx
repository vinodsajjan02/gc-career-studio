import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Consultation from "./pages/Consultation";

function NotFound() {
  return (
    <>
      <style>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          background: #f8f9fc;
          font-family: Arial, Helvetica, sans-serif;
        }

        .not-found-box {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 15px 45px rgba(30, 35, 70, 0.08);
          max-width: 500px;
        }

        .not-found h1 {
          font-size: 80px;
          margin: 0;
          color: #5b5df0;
        }

        .not-found h2 {
          color: #171d2c;
          margin: 10px 0;
        }

        .not-found p {
          color: #737b8d;
          line-height: 1.6;
        }

        .home-button {
          display: inline-block;
          margin-top: 20px;
          padding: 13px 22px;
          border-radius: 9px;
          background: #5b5df0;
          color: white;
          text-decoration: none;
          font-weight: 700;
        }
      `}</style>

      <div className="not-found">
        <div className="not-found-box">
          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p>
            Sorry, the page you're looking for doesn't exist.
          </p>

          <a href="/" className="home-button">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONSULTATION */}
        <Route
          path="/consultation"
          element={<Consultation />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </Router>
  );
}

export default App;