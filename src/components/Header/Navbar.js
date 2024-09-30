import "./Navbar.css";
import Logo from "../LandingPage/kik-final-logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className={`TitleOfPlatforms ${isOpen ? "open" : ""}`}>
        <div className="logoo">
          <img src={Logo} alt="KodeinKGP Logo" />
          <h4>KodeinKGP</h4>
        </div>
      </div>

      <button
        id="hambutton"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <div className={`Navigation ${isOpen ? "open" : ""}`}>
        <div className={`NavigatingOptions ${isOpen ? "open" : ""}`}>
          <div className={`MainPartNavBar ${isOpen ? "open" : ""}`}>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag">
                <Link className="link" to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </span>
            </li>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag2">
                <Link className="link" to="/pds" onClick={toggleMenu}>
                  PDS_Bank
                </Link>
              </span>
            </li>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag2">
                <Link className="link" to="/articles" onClick={toggleMenu}>
                  Articles
                </Link>
              </span>
            </li>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag">
                <Link className="link" to="/teams" onClick={toggleMenu}>
                  Teams
                </Link>
              </span>
            </li>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag">
                <Link className="link" to="/events" onClick={toggleMenu}>
                  Events
                </Link>
              </span>
            </li>
            <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              {/* <span className="link-tag link-tag-reg">
                <Link className="link" to="/regform" onClick={toggleMenu}>
                  Registration Form
                </Link>
              </span> */}
            </li>
            {/* <li
              onClick={() => {
                if (isOpen) {
                  toggleMenu();
                }
              }}
            >
              <span className="link-tag1">
                <Link className="link" to="/selections" onClick={toggleMenu}>
                  Selection Results
                </Link>
              </span>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
