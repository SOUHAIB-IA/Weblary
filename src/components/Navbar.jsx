/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import "../css/Prototype.css";
import myImage from "../assets/log.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something is wrong! ${selector}`);
  };

  useEffect(() => {
    const scrollHeader = () => {
      const headerElement = selectElement("#header");
      if (window.scrollY >= 15) {
        headerElement.classList.add("activated");
      } else {
        headerElement.classList.remove("activated");
      }
    };
    window.addEventListener("scroll", scrollHeader);
    const menuToggleIcon = selectElement("#menu-toggle-icon");
    const toggleMenu = () => {
      const mobileMenu = selectElement("#menu");
      mobileMenu.classList.toggle("activated");
      menuToggleIcon.classList.toggle("activated");
    };
    menuToggleIcon.addEventListener("click", toggleMenu);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      menuToggleIcon.removeEventListener("click", toggleMenu);
    };
  }, []);
  useEffect(() => {
    const bodyElement = document.body;
    const themeToggleBtn = selectElement("#theme-toggle-btn");
    const toggleTheme = () => {
      bodyElement.classList.toggle("light-theme");
    };
    themeToggleBtn.addEventListener("click", toggleTheme);

    return () => {
      themeToggleBtn.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <React.Fragment>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./assets/images/favicon.png"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="./assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="./assets/css/main.css"></link>
      <header className="header" id="header">
        <nav className="navbar container div1">
          <Link to="/">
            <img src={myImage} alt="logo" className="logo"></img>
          </Link>
          <div className="menu" id="menu">
            <ul className="list">
              <li className="list-item">
                <Link to="/"> Home</Link>
              </li>
              <li className="list-item">
                <Link to="/about">Library</Link>
              </li>

              <li>
                <Link to="/review">
                  <button className="button ">
                    <span>Sign In</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/review">
                  <button className="button ">
                    <span>Sign Up</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="list list-right">
            <button className="btn place-items-center" id="theme-toggle-btn">
              <i className="ri-sun-line sun-icon"></i>
              <i className="ri-moon-line moon-icon"></i>
            </button>

            <button
              className="btn place-items-center screen-lg-hidden menu-toggle-icon"
              id="menu-toggle-icon"
            >
              <i className="ri-menu-3-line open-menu-icon"></i>
              <i className="ri-close-line close-menu-icon"></i>
            </button>

            <a href="#" className="list-link screen-sm-hidden">
              Sign in
            </a>
            <a
              href="#"
              className="btn sign-up-btn fancy-border screen-sm-hidden"
            >
              <span>Sign up</span>
            </a>
          </div>
        </nav>
      </header>

      <div
        className="search-form-container container"
        id="search-form-container"
      >
        <div className="form-container-inner">
          <form action="" className="form">
            <input
              className="form-input"
              type="text"
              placeholder="What are you looking for?"
            ></input>
            <button className="btn form-btn" type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
          <span className="form-note">Or press ESC to close.</span>
        </div>

        <button
          className="btn form-close-btn place-items-center"
          id="form-close-btn"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
      <div
        className="search-form-container container"
        id="search-form-container"
      >
        <div className="form-container-inner">
          <form action="" className="form">
            <input
              className="form-input"
              type="text"
              placeholder="What are you looking for?"
            ></input>
            <button className="btn form-btn" type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
          <span className="form-note">Or press ESC to close.</span>
        </div>

        <button
          className="btn form-close-btn place-items-center"
          id="form-close-btn"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </React.Fragment>
  );
};
