import React from "react";
import aboutBg from "../../assets/aboutBg.svg";
import aboutBgPhn from "../../assets/aboutBgPhn.png";
import codingSprees from "../../assets/codingSprees.svg";
import me from "../../assets/me.svg";
import resume from "../../assets/resume.svg";
import quatro from "../../assets/quatro.svg";
import codingSpreesImg from "../../assets/myCodingSpreeImg.svg";
import meImg from "../../assets/myImg.svg";
import quatroImg from "../../assets/quatroSticker.svg";
import "./about.css";
import arrow1 from "../../assets/arrowsAbout/arrow1.svg";
import arrow2 from "../../assets/arrowsAbout/arrow2.svg";
import arrow3 from "../../assets/arrowsAbout/arrow3.svg";
import flower from "../../assets/arrowsAbout/viewResumeFlower.svg";

export default function About() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/17GMyU-JtRdOXkdOrGt_twHjI-bmbaA00/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <div className="aboutdesktop">
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
                <span className="underlineText3" onClick={handleButtonClick}>
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
      <div className="aboutPhn">
        <img className="aboutBgImg" src={aboutBgPhn} alt="" />
        <p className="aboutphnLaiba">
          LAIBA <br />
          AHSAN
        </p>
        <img
          src={meImg}
          alt=""
          style={{
            width: "159.96px",
            height: "auto",
            top: "90px",
            position: "absolute",
            right: "20px",
          }}
        />
        <img
          src={arrow1}
          alt=""
          style={{
            width: "150px",
            height: "auto",
            paddingLeft: "55px",
            marginTop: "10px",
          }}
        />
        <p className="aboutPhnHI">
          Hi, this is <b>me</b> ! I am a front-end developer and a 3rd year
          computer science student.{" "}
          <span> Currently interning at OPTIGRIT</span>{" "}
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <img
            src={quatroImg}
            alt=""
            style={{
              width: "200px",
              height: "100px",
              marginTop: "10px",
            }}
          />
          <img
            src={arrow2}
            alt=""
            style={{
              width: "150px",
              height: "auto",
              marginTop: "40px",
            }}
          />
        </div>

        <p className="aboutPhnHI">
          I wear the developer hat at <b>Quatro</b>, a fun venture founded by me
          and my awesome friends
        </p>
        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={arrow3}
            alt=""
            style={{
              width: "150px",
              height: "auto",
              marginTop: "120px",
              position: "relative",
              zIndex: 2,
            }}
          />
          <img
            src={codingSpreesImg}
            alt=""
            style={{
              width: "200px",
              height: "auto",
              position: "absolute",
              top: "40px",
              left: "25%",
            }}
          />
        </div>
        <p className="aboutPhnHI">
          Chicken wings fuel my fun <br /> <b>coding sprees</b>
        </p>
        <button className="viwResumeBtn" onClick={handleButtonClick}>
          <img src={flower} alt="" />
          VIEW RESUME
          <img src={flower} alt="" />
        </button>
      </div>
    </>
  );
}
