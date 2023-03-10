import React from "react";
import "./Footer.css";
import logo from "../../assets/img/Logo.png";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="section-footer-1">
          <div className="logo-footer">
            <a href="#home">
              <img src={logo} alt="logo-img" className="logo-img" />
            </a>
            <p>CONSULTORIO YOLANDA DELGADO</p>
          </div>
          <div className="rrss-link-footers">
            <IconContext.Provider value={{ size: "3em", color: "#fff" }}>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </IconContext.Provider>
          </div>
        </div>
        <div className="sector-footer-2">
          <div className="menu-footer">
            <div className="link-footer">
              <a href="#about"> ¿PORQUE ELEGIRNOS?</a>
            </div>
            <div className="link-footer">
              <a href="#area">ESPECIALIDADES</a>
            </div>
            <div className="link-footer">
              <a href="#doctors">PERSONAL</a>
            </div>
          </div>
          <div className="address-footer">
            <p> DIRECCION:</p>
            <p>AGUA SALUD - CARACAS</p>
            <p>HORARIOS:</p>
            <p>LUN a VIE</p>
            <p>DE 8:00 AM a 4:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
