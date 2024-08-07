// Components/NavBar1.js
import React from "react";
import "../components/Navbar.css"

function NavBar1() {
  return (
    <div className="main-nav">
      <nav className="navbar navbar-height navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="news-keyword">News</span> Pulse
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
