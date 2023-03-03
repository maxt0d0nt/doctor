import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../assets/img/Logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [header, setHeader] = useState(false);

  let changebackgrond = () => {
    if (window.scrollY > 0) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changebackgrond);
  return (
    <div className="navbarHero">
      <div className={header ? "header active" : "Nav"}>
        <div className="logo">
          <img
            src={logo}
            width="50"
            height="50"
            alt="logo"
            className="logoImg"
          />
          <a href="#home" className="link-logo">
            Consultorios Yolanda Delgado
          </a>
        </div>
        <ul className={isMobile ? "nav-link-mobile" : "navMenu"}>
          <div className="link">
            <a href="#about">¿PORQUE ELEGIRNOS?</a>
          </div>
          <div className="link">
            <a href="#area">ESPECIALIDADES</a>
          </div>
          <div className="link">
            <a href="#doctors">PERSONAL</a>
          </div>
          <div className="link">
            <a href="#footer">CONTACTO</a>
          </div>
        </ul>
        <button className="mobile-menu-icon">
          {isMobile ? (
            <i className="fas fa-times" onClick={() => setIsMobile(false)}>
              <RiCloseFill />
            </i>
          ) : (
            <i className="fas fa-bars" onClick={() => setIsMobile(true)}>
              <FaBars />
            </i>
          )}
        </button>
      </div>
    </div>
  );
};
