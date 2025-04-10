import React, { useState } from "react";
import AppLog from "../../assets/AppLog.png";
import "../../Component/LandingCss/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg">
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={AppLog} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">ParkNGo – Easy Parking Solutions</span>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#SubmitForm">SpotReservationDetails</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Aboutsection">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#featuressection">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Blogsection">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#FAQsection">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





