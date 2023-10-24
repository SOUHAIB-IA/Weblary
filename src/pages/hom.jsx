import "../css/Body.css";
import myImage from "../img/book.png";
import book1 from "../img/book1.jpg";
import book2 from "../img/book2.jpg";
import book3 from "../img/book3.jpg";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, sectionRef.current.offsetTop);
  }, []);
  return (
    <React.Fragment>
      <div className="hero-container div2">
        <div className="title-div1" ref={sectionRef}>
          <h1 className="title">Welcom To Weblary!</h1>
        </div>
        <div className="title-div2">
          <h3 className="title-desc">
            Find all your preferred books on AI, Cybersecurity and related
            subjects, all in one location.
          </h3>
        </div>
      </div>
      <div className="parent">
        <div className="div3">
          <h3 className="about">ABOUT</h3>
          <h2 className="section-heading"> Who we are </h2>
          <p className="desc">
            We are a group of students with diverse interests in various domains
            of computer science. Our website is designed for computer scientists
            seeking to deepen their understanding of their chosen field.
          </p>{" "}
        </div>
        <div className="div2-2">
          {" "}
          <img src={myImage} alt="" className="image-heading"></img>
        </div>
      </div>
      <div className="parent">
        <div className="div4">
          <h3 className="about2">ABOUT</h3>
          <h2 className="section-heading2"> What this website provides </h2>
          <p className="desc2">
            Our website offers a diverse range of books to fulfill the learning
            needs of students, self-learners, and teachers alike. This website
            mainly provides Books about AI, CyberSecurity etc..
          </p>
        </div>
      </div>
      <div className="images">
        <img src={book1} alt="" className="image-heading1"></img>
        <img src={book2} alt="" className="image-heading2"></img>
        <img src={book3} alt="" className="image-heading3"></img>
      </div>
      <div className="hero-container div2">
        <div className="title-div1">
          <h2 className="title">What are you waiting for !</h2>
        </div>
        <div className="title-div2">
          <Link to="/about">Go check out our Library</Link>
        </div>
      </div>
    </React.Fragment>
  );
};
