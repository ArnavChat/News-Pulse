import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/Navbar.css";
import "../components/Navbar2.css";

function NavBar2() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // const handleNavLinkClick = (link) => {
  //   setActiveLink(link);
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary main-nav">
        <div className="container-fluid nav2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/home" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/home")}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Entertainment" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Entertainment")}
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Technology" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Technology")}
                  to="/Technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Sports" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Sports")}
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Business" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Business")}
                  to="/Business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Health" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Health")}
                  to="/Health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Science" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Science")}
                  to="/Science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "/Portfolio" ? "active text-danger" : ""}`}
                  // onClick={() => handleNavLinkClick("/Portfolio")}
                  to="https://arnavchat.github.io/portfolio/"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;
