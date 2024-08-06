import React from "react";
import logo from "../assets/logo.png";
import { FaPenClip } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg font-playpen shadow">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="logo" width={250} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    aria-current="page"
                    to="/stickyNotes"
                  >
                    <div className="outer-btn position-relative">
                      <div className="inner-btn">
                        <FaPenClip /> ADD NOTES
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      
    </>
  );
};

export default Header;
