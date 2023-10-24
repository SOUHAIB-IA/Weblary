import "../styles/Library.css";
import cov1 from "../assets/ML_Python.jpg";
import cov2 from "../assets/ML_pour_null.jpg";
import cov3 from "../assets/data_sc.jpg";
import cov4 from "../assets/opencv.jpg";
import cov5 from "../assets/image.jpg";
import cov6 from "../assets/impros.jpg";
import cov7 from "../assets/hack.jpg";
import cov8 from "../assets/black.jpg";
import cov9 from "../assets/fist.jpg";
import cov10 from "../assets/fram.jpg";
import cov11 from "../assets/tho.jpg";
import cov12 from "../assets/computer.jpg";
import cov13 from "../assets/rea.jpg";
import cov14 from "../assets/mod.jpg";
import cov15 from "../assets/java.jpg";
import cov16 from "../assets/des.jpg";
import cov17 from "../assets/beld.jpg";
import cov18 from "../assets/full.jpg";
import B1 from "../assets/B1.pdf";
import B2 from "../assets/B2.pdf";
import B3 from "../assets/B3.pdf";
import B4 from "../assets/B4.pdf";
import B5 from "../assets/B5.pdf";
import B6 from "../assets/B6.pdf";
import B7 from "../assets/B7.pdf";
import B8 from "../assets/B8.pdf";
import B9 from "../assets/B9.pdf";
import B10 from "../assets/B10.pdf";
import B11 from "../assets/B11.pdf";
import B12 from "../assets/B12.pdf";
import B13 from "../assets/B13.pdf";
import B14 from "../assets/B14.pdf";
import B15 from "../assets/B1.pdf";
import B16 from "../assets/B16.pdf";
import B17 from "../assets/B17.pdf";
import B18 from "../assets/B18.pdf";
import React, { useRef, useEffect } from "react";
function togglePDF(coverId, pdfId, botID) {
  const cover = document.getElementById(coverId);
  const pdf = document.getElementById(pdfId);
  const button = document.getElementById(botID);
  var list = document.getElementsByTagName("img");
  var lista = document.getElementsByClassName("readD");
  var listh = document.getElementsByClassName("T");
  var listbut = document.getElementsByTagName("button");
  if (pdf.style.display === "none") {
    cover.style.display = "none";
    pdf.style.display = "block";
    for (var obj of list) {
      obj.style.filter = "blur(20px)";
    }
    for (var ob of listbut) {
      // eslint-disable-next-line eqeqeq
      if (ob.id == botID) {
        ob.style.filter = "blur(none)";
      } else {
        ob.style.filter = "blur(20px)";
      }
    }
    for (var a of lista) {
      a.style.filter = "blur(20px)";
    }
    for (var h of listh) {
      h.style.filter = "blur(20px)";
    }
    pdf.style.position = "fixed";
    pdf.style.height = "630px";
    pdf.style.width = "600px";
    pdf.style.top = "50%";
    pdf.style.left = "50%";
    pdf.style.transform = "translate(-50%, -50%)";
    pdf.style.WebkitBackdropFilter = "blur(10px)";
    pdf.style.backdropFilter = "blur(10px)";
    pdf.style.zIndex = "1000";
    button.innerText = "return";
    button.style.position = "fixed";
    button.style.right = "80%";
    button.style.top = "50%";
    button.style.zIndex = "10100";
    document.body.style.overflowX = "hidden";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#131417";
    pdf.onclick = function () {
      cover.style.display = "inline";
      pdf.style.display = "none";
      document.body.style.overflow = "auto";
    };
  } else {
    cover.style.display = "inline";
    pdf.style.display = "none";
    document.body.style.overflowX = "hidden";
  }
  button.onclick = function () {
    button.innerText = "Read online";
    button.style.position = "relative";
    button.style.right = "20%";
    button.style.top = "1px";
    button.style.zIndex = "0";
    document.body.style.backgroundImage = "var(--black-image)";
    document.body.style.backgroundColor = "none";
    for (var obj of list) {
      obj.style.filter = "none";
    }
    for (var ob of listbut) {
      ob.style.filter = "none";
    }
    for (var a of lista) {
      a.style.filter = "none";
    }
    for (var h of listh) {
      h.style.filter = "none";
    }
  };
}

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, sectionRef.current.offsetTop);
  }, []);

  return (
    <React.Fragment>
      <h2 id="section1" ref={sectionRef} className="T">
        {" "}
        IA Books
      </h2>
      <section className="covers">
        <div className="cover">
          <img
            src={cov1}
            alt="machine_book"
            id="B1"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B1}
            style={{ display: "none" }}
            id="pdf1"
            className="IA"
          ></embed>
          <div className="c red_down ">
            <button
              className="read"
              onClick={() => togglePDF("B1", "pdf1", "cov1")}
              id="cov1"
            >
              Read online
            </button>
            <a className="readD" href={B1} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov2}
            alt="machine_book"
            id="B2"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B2}
            style={{ display: "none" }}
            id="pdf2"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B2", "pdf2", "cov2")}
              id="cov2"
            >
              Read online
            </button>
            <a className="readD" href={B2} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov3}
            alt="data_book"
            id="B3"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B3}
            style={{ display: "none" }}
            id="pdf3"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B3", "pdf3", "cov3")}
              id="cov3"
            >
              Read online
            </button>
            <a className="readD" href={B3} download>
              Download{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="covers">
        <div className="cover">
          <img
            src={cov4}
            alt="machine_book"
            id="B4"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B4}
            style={{ display: "none" }}
            id="pdf4"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B4", "pdf4", "cov4")}
              id="cov4"
            >
              Read online
            </button>
            <a className="readD" href={B4} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov5}
            alt="machine_book"
            id="B5"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B5}
            style={{ display: "none" }}
            id="pdf5"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B5", "pdf5", "cov5")}
              id="cov5"
            >
              Read online
            </button>
            <a className="readD" href={B5} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov6}
            alt="data_book"
            id="B6"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <div>
            <embed
              src={B6}
              style={{ display: "none" }}
              id="pdf6"
              className="IA"
            ></embed>
            <div className="red_down">
              <button
                className="read"
                onClick={() => togglePDF("B6", "pdf6", "cov6")}
                id="cov6"
              >
                Read online
              </button>
              <a className="readD" href={B6} download>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
      <h2 id="title2" className="T">
        {" "}
        Cybersecurity Books
      </h2>
      <section className="covers">
        <div className="cover">
          <img
            src={cov7}
            alt="machine_book"
            id="B7"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B7}
            style={{ display: "none" }}
            id="pdf7"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B7", "pdf7", "cov7")}
              id="cov7"
            >
              Read online
            </button>
            <a className="readD" href={B7} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov8}
            alt="machine_book"
            id="B8"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B8}
            style={{ display: "none" }}
            id="pdf8"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B8", "pdf8", "cov8")}
              id="cov8"
            >
              Read online
            </button>
            <a className="readD" href={B8} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov9}
            alt="data_book"
            id="B9"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B9}
            style={{ display: "none" }}
            id="pdf9"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B9", "pdf9", "cov9")}
              id="cov9"
            >
              Read online
            </button>
            <a className="readD" href={B9} download>
              Download{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="covers">
        <div className="cover">
          <img
            src={cov10}
            alt="machine_book"
            id="B10"
            className="IAe"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B10}
            style={{ display: "none" }}
            id="pdf10"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B10", "pdf10", "cov10")}
              id="cov10"
            >
              Read online
            </button>
            <a className="readD" href={B10} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov11}
            alt="machine_book"
            id="B11"
            className="IAe"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B11}
            style={{ display: "none" }}
            id="pdf11"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B11", "pdf11", "cov11")}
              id="cov11"
            >
              Read online
            </button>
            <a className="readD" href={B11} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov12}
            alt="data_book"
            id="B12"
            className="IAe"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B12}
            style={{ display: "none" }}
            id="pdf12"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B12", "pdf12", "cov12")}
              id="cov12"
            >
              Read online
            </button>
            <a className="readD" href={B12} download>
              Download
            </a>
          </div>
        </div>
      </section>
      <h2 id="title3" className="T">
        Web Development books
      </h2>
      <section className="covers">
        <div className="cover">
          <img
            src={cov13}
            alt="machine_book"
            id="B13"
            className="IAee"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B13}
            style={{ display: "none" }}
            id="pdf13"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B13", "pdf13", "cov13")}
              id="cov13"
            >
              Read online
            </button>
            <a className="readD" href={B13} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov14}
            alt="machine_book"
            id="B14"
            className="IAee"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B14}
            style={{ display: "none" }}
            id="pdf14"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B14", "pdf14", "cov14")}
              id="cov14"
            >
              Read online
            </button>
            <a className="readD" href={B14} download>
              Download{" "}
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov15}
            alt="data_book"
            id="B15"
            className="IAee"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B15}
            style={{ display: "none" }}
            id="pdf15"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B15", "pdf15", "cov15")}
              id="cov15"
            >
              Read online
            </button>
            <a className="readD" href={B15} download>
              Download
            </a>
          </div>
        </div>
      </section>
      <section className="covers">
        <div className="cover">
          <img
            src={cov16}
            alt="machine_book"
            id="B16"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B16}
            style={{ display: "none" }}
            id="pdf16"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B16", "pdf16", "cov16")}
              id="cov16"
            >
              Read online
            </button>
            <a className="readD" href={B16} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov17}
            alt="machine_book"
            id="B17"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B17}
            style={{ display: "none" }}
            id="pdf17"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B17", "pdf17", "cov17")}
              id="cov17"
            >
              Read online
            </button>
            <a className="readD" href={B17} download>
              Download
            </a>
          </div>
        </div>
        <div className="cover">
          <img
            src={cov18}
            alt="data_book"
            id="B18"
            className="IA"
            style={{ display: "inline" }}
          ></img>
          <embed
            src={B18}
            style={{ display: "none" }}
            id="pdf18"
            className="IA"
          ></embed>
          <div className="red_down">
            <button
              className="read"
              onClick={() => togglePDF("B18", "pdf18", "cov18")}
              id="cov18"
            >
              Read online
            </button>
            <a className="readD" href={B18} download>
              Download{" "}
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
