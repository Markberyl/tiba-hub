import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Tiba <span className="ft-sign">hub</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart-Care</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Pharmacy</a>
            </li>
            <li>
              <a href="#services">Consultations</a>
            </li>
          </ul>
        </div>


        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@get-tiba.com">support@get-tiba.com</a>
            </li>
            <li>
              <a href="mailto:appointment@get tiba.com">
                appointment@Tiba-hub.com
              </a>
            </li>
          
            <li>
              <a href="tel:+254 723384056">+254 723384056</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 get-tiba. All rights reserved.</p>

      </div>
    </div>
  );
}

export default Footer;