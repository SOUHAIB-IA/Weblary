/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";

import "../css/css.css";

export const Review = () => {
  //inside parenthese en ecrire html

  const [inputs, setInputs] = useState([GetFormvalues]);

  const [creat, setCreat] = useState({
    days: "",
    month: "",
    years: "",
  });
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlechangecreat = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreat((values) => ({ ...values, [name]: value }));
  };

  React.useEffect(() => {
    localStorage.setItem("login", JSON.stringify(inputs));
  }, [inputs]);
  React.useEffect(() => {
    localStorage.setItem("creat", JSON.stringify(creat));
  }, [creat]);

  function GetFormvalues() {
    const storedvalues = localStorage.getItem("login");
    return JSON.parse(storedvalues);
  }

  function Getform() {
    const storedvalues = localStorage.getItem("creat");
    return JSON.parse(storedvalues);
  }

  const handlsubmit = (event) => {
    event.preventDefault();
    const but = document.querySelector("#botona2");
    const txt = document.querySelector("#demo1");
    const cree = document.querySelector("#back");
    cree.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    cree.style.opacity = 0.2;
    txt.id = "yes";
  };

  const Reject = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const but = document.querySelector("#close");
    const txt = document.querySelector("#yes");
    const cree = document.querySelector("#back");
    cree.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    cree.style.opacity = 1;
    txt.id = "demo1";
  };

  const styly = {
    height: "15px",
    width: "20px",
  };

  // Generate arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 84 }, (_, i) => 1940 + i);

  return (
    <>
      <body className="body">
        <div id="back">
          <article className="motiv">
            What are you waitng for!go a head and create an account to have more
            fun
          </article>
          <div id="demo">
            <form>
              <label>
                Email
                <br />
                <input
                  type="text"
                  name="Email"
                  value={inputs.Email || ""}
                  className="input1"
                  onChange={handlechange}
                  placeholder="Enter your email"
                />
              </label>

              <label>
                Password
                <br />
                <input
                  type="text"
                  name="Password"
                  value={inputs.Password || ""}
                  className="input1"
                  onChange={handlechange}
                  placeholder="Enter your Password"
                />
              </label>

              <div id="claser">
                <button className="but1" type="submit">
                  Log in
                </button>
                <br />

                <a className="forget">forgot password?</a>
                <br />
                <hr id="bar" />
                <button className="but2" id="botona2" onClick={handlsubmit}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="demo1">
          <button className="reject" id="close" onClick={Reject}>
            X
          </button>
          <div id="contenu">
            <h3 className="hre">
              Sign Up
              <hr className="bari" />
            </h3>

            <div className="name">
              <input
                type="text"
                name="prenom"
                className="se"
                value={creat.prenom || ""}
                onChange={handlechangecreat}
                placeholder="laste name"
              />
              <input
                type="text"
                name="nom"
                className="se"
                value={creat.nom || ""}
                onChange={handlechangecreat}
                placeholder="First name"
              />
            </div>
            <input
              type="text"
              name="email"
              className="seul"
              value={creat.email || ""}
              onChange={handlechangecreat}
              placeholder="Phone number or e-mail"
            />
            <input
              type="password"
              name="password"
              placeholder="new password"
              value={creat.password || ""}
              onChange={handlechangecreat}
              className="se"
            />
            <span className="spane">
              date of birth<button className="button-div">?</button>
            </span>
            <div className="naissance">
              <select
                name="days"
                value={creat.days}
                onChange={handlechangecreat}
                className="se"
              >
                <option value="">Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={creat.month}
                onChange={handlechangecreat}
                className="se"
              >
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="years"
                value={creat.years}
                onChange={handlechangecreat}
                className="se"
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <span className="spann">
              Gender <button className="button-div">?</button>
            </span>

            <div className="genre">
              <label className="border">
                femal
                <input
                  type="radio"
                  name="sex"
                  value={"femme" || ""}
                  onChange={handlechangecreat}
                  style={styly}
                />
              </label>
              <label className="border">
                mal
                <input
                  type="radio"
                  name="sex"
                  value={"homme" || ""}
                  onChange={handlechangecreat}
                  style={styly}
                />
              </label>
            </div>

            <p className="ss">
              by clicking on register to accept in our application, with respect
              to policy and functionality, you can receive emails for new books
              and many .....
            </p>
            <button
              type="submit"
              className="inscrire"
              onClick={() => window.location.reload(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </body>
    </>
  );
};
