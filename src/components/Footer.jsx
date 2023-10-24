/* eslint-disable react/no-unescaped-entities */
import "../css/Footer.css";
// import "../styles/Footer.css";
import fb from "../assets/fb.png";
import twit from "../assets/twit.png";
import gmail from "../assets/gmail.png";
import phone from "../assets/phone.png";
import git from "../assets/git.png";
import React from "react";
export const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <section id="contact" className="contact-section">
          <div className="contact-section-header">
            <h3>Let's work together...</h3>
            <p id="how">How do you take your coffee?</p>
          </div>
          <div className="contact-links">
            <a
              href="https://facebook.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>{" "}
              <img src={fb} height="30px"></img>Facebook
            </a>

            <a
              id="profile-link"
              href="https://github.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>{" "}
              <img src={git} height="30px"></img>GitHub
            </a>

            <a
              href="https://twitter.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>{" "}
              <img src={twit} height="30px"></img> Twitter
            </a>
            <a
              href="/cdn-cgi/l/email-protection#a6c3dec7cbd6cac3e6c3dec7cbd6cac388c5c9cb"
              className="btn contact-details"
            >
              <i className="fas fa-at"></i>{" "}
              <img src={gmail} height="30px"></img>Send a mail
            </a>

            <a href="tel:555-555-5555" className="btn contact-details">
              <i className="fas fa-mobile-alt"></i>{" "}
              <img src={phone} height="30px"></img>Call me
            </a>
          </div>
        </section>
      </footer>
    </React.Fragment>
  );
};
