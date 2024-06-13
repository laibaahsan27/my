import React from "react";
import "./Hero1.css";
import bg from "../../assets/bghero.svg";

export default function Hero1({ scrollToProjects, scrollToAbout }) {
  const handleContactClick = () => {
    window.location.href = "mailto:laiba.ahsan27@gmail.com";
  };

  return (
    <div className="heroDIV">
      <img className="bgimg" src={bg} alt="" />
      <nav className="navCON">
        <div className="navleft">laiba ahsan</div>
        <div className="navright">
          <a
            className="rightnavoptions"
            onClick={scrollToProjects}
            style={{ cursor: "pointer" }}
          >
            work
          </a>
          <a
            className="rightnavoptions"
            onClick={scrollToAbout}
            style={{ cursor: "pointer" }}
          >
            about
          </a>
          <a href="#" className="contactbtnDesktop">
            <button
              className="contactbtn cssbuttons"
              onClick={handleContactClick}
              style={{ cursor: "pointer" }}
            >
              contact
            </button>
          </a>
        </div>
      </nav>
      <div className="herotxt">
        <div className="herotext1">Web Alchemy</div>
        <div className="herotext2">Where Art Meets Code</div>
        <div className="herotext3">
          <div>Web Developer</div>
          &#x2022;
          <div>Innovator</div>
          &#x2022;
          <div>Crafting Experiences</div>
        </div>
        <button className="contactbtnPhone" onClick={handleContactClick}>
          CONTACT
        </button>
        <button className="contactbtnPhone" onClick={handleContactClick}>
          CONTACT
        </button>
        <button>Hi</button>
      </div>
    </div>
  );
}
