import React from "react";
import aboutBg from "../../assets/aboutBg.svg";
import "./about.css";
export default function about() {
  return (
    <div>
      <img className="aboutBgImg" src={aboutBg} alt="" />
      <div className="aboutContentMainDiv">
        <div className="aboutLinesMain">
          <p className="aboutLine1">
            I am a full-stack developer and a 4th year computer science student
          </p>
          <div className="aboutLine2-div">
            <p className="aboutLine2">Currently interning at OPTIGRIT</p>
          </div>

          <div className="aboutLine3">
            <p className="aboutLine3-first">Hi, this is me !</p>
            <p className="aboutName">
              LAIBA <br /> AHSAN
            </p>
            <p className="aboutLine3-second">
              I wear the developer hat at Quatro, a fun venture founded by me
              and my awesome friends
            </p>
          </div>
          <div className="aboutLine4-div">
            <p className="aboutLine4">
              Chicken wings fuel my fun coding sprees
            </p>
          </div>
          <p className="aboutLine5">View my resume here</p>
        </div>
      </div>
      {/* <div className="aboutLinesMain">
        <p className="aboutLine1">
          I am a front-end developer and a 3rd year computer science student
        </p>
        <p className="aboutLine2">Currently interning at OPTIGRIT</p>
        <div className="aboutLine3">
          <p className="aboutLine3-first">
            I wear the developer hat at Quatro, a fun venture founded by me and
            my awesome friends
          </p>
          <p className="aboutName ">
            LAIBA <br /> AHSAN
          </p>
          <p className="aboutLine3-second">Hi, this is me !</p>
        </div>
        <p className="aboutLine4">Chicken wings fuel my fun coding sprees</p>
        <p className="aboutLine5">View my resume here</p>
      </div> */}
    </div>
  );
}
