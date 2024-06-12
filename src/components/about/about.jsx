import React from "react";
import aboutBg from "../../assets/aboutBg.svg";
import codingSprees from "../../assets/codingSprees.svg";
import me from "../../assets/me.svg";
import resume from "../../assets/resume.svg";
import quatro from "../../assets/quatro.svg";
import codingSpreesImg from "../../assets/myCodingSpreeImg.svg";
import meImg from "../../assets/myImg.svg";
import quatroImg from "../../assets/quatroSticker.svg";
import "./about.css";

export default function About() {
  return (
    <div>
      <img className="aboutBgImg" src={aboutBg} alt="" />
      <div className="aboutContentMainDiv">
        <div className="aboutLinesMain">
          <div className="aboutLine1-div">
            <p className="aboutLine1">
              I am a full-stack developer and a 4th year computer science
              student
            </p>
          </div>

          <div className="aboutLine2-div">
            <p className="aboutLine2">Currently interning at OPTIGRIT</p>
          </div>

          <div className="aboutLine3">
            <div className="aboutLine3-first-div">
              <p className="aboutLine3-first">
                Hi, this is{" "}
                <span className="underlineText">
                  me
                  <img className="meImg" src={me} alt="Me underline" />
                  <img className="hoverImg" src={meImg} alt="Me hover" />
                </span>{" "}
                !
              </p>
            </div>
            <p className="aboutName">
              LAIBA <br /> AHSAN
            </p>
            <div className="aboutLine3-second-div">
              <p className="aboutLine3-second">
                I wear the developer hat at{" "}
                <span className="underlineText1">
                  Quatro
                  <img
                    className="quatroImg"
                    src={quatro}
                    alt="Quatro underline"
                  />
                  <img
                    className="hoverImg2"
                    src={quatroImg}
                    alt="Quatro hover"
                  />
                </span>
                , a fun venture founded by me and my awesome friends
              </p>
            </div>
          </div>
          <div className="aboutLine4-div">
            <p className="aboutLine4">
              Chicken wings fuel my fun{" "}
              <span className="underlineText2">
                coding sprees
                <img
                  className="codingSpreesImg"
                  src={codingSprees}
                  alt="Coding Sprees underline"
                />
                <img
                  className="hoverImg3"
                  src={codingSpreesImg}
                  alt="Coding Sprees hover"
                />
              </span>
            </p>
          </div>
          <div className="aboutLine5-div">
            <p className="aboutLine5">
              View my{" "}
              <span className="underlineText3">
                resume
                <img
                  className="resumeImg"
                  src={resume}
                  alt="Resume underline"
                />
              </span>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
