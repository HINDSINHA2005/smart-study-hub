import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this exists

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm py-3">
      <div className="container px-4">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="SmartStudyHub Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold fs-4 text-primary">SmartStudyHub</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: "Internships", path: "/internships" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li className="nav-item mx-2" key={item.name}>
                <Link
                  className={`nav-link ${
                    location.pathname === item.path ? "text-primary fw-semibold" : "text-dark"
                  }`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Auth Buttons */}
            <li className="nav-item ms-3 d-flex align-items-center">
              <Link className="btn btn-outline-primary btn-sm me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary btn-sm" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
