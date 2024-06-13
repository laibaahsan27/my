import React from "react";
import "./footer.css";
import BG from "../../assets/footerBg.svg";
import footerFlower from "../../assets/footerFlower.svg";
import workAboutLine from "../../assets/sanyaLine.svg";
import GetInTouch from "../../assets/getintouch.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.svg";
import heart from "../../assets/footerHeart.svg";
import Bar from "../scrollBar";
import ScrollBarOne from "../ScrollBarOne";

export default function footer({ scrollToProjects, scrollToAbout }) {
  // https://www.linkedin.com/in/sanya031malhotra/
  const handleSanyaClick = () => {
    window.location.href = "https://www.linkedin.com/in/sanya031malhotra/";
  };
  return (
    <div
      className="footerMain"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div
          className="footerTop"
          // style={{
          //   paddingTop: "80px",
          //   paddingLeft: "35px",
          // }}
        >
          <div className="footerFlower">
            {" "}
            <img src={footerFlower} alt="" />
          </div>

          <div className="textAlongScroller">Mastering,</div>
          <div
            className="scroolerDiv"
            style={
              {
                // paddingTop: "15px",
                // width: "130%",
              }
            }
          >
           <ScrollBarOne/>
          </div>
          <div
            className="textAlongScroller"
            style={{
              paddingTop: "15px",
            }}
          >
            And constantly expanding with
            <br /> fresh additions
          </div>
        </div>
      </div>
      <div
        className="footerMid"
        style={
          {
            // display: "flex",
            // justifyContent: "space-between",
            // paddingLeft: "35px",
            // marginTop: "140px",
            // marginBottom: "80px",
          }
        }
      >
        <img src={GetInTouch} alt="" className="gentintouchImg" />
        <div
          className="footerMidSec"
          style={
            {
              // paddingRight: "10%",
            }
          }
        >
          <div className="textAboveLinks">
            Feel free to get in touch with me for any development needs or
            collaborations. I'm here to craft engaging and user-friendly digital
            experiences. Let's bring your ideas to life!
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://www.linkedin.com/in/laiba-ahsan-8a913a23a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="mailto:laiba.ahsan27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="Mail" />
            </a>
            <a
              href="https://github.com/laibaahsan27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="footerBottom"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   borderTop: "1px solid white",
        //   padding: "20px 35px",
        // }}
      >
        <div className="footerBottom1">
          <a href="#work" className="wavy-link" onClick={scrollToProjects}>
            WORK
          </a>
          <a href="#about" className="wavy-link" onClick={scrollToAbout}>
            ABOUT
          </a>
        </div>
        <div className="footerBottom2">
          © 2024 Laiba Ahsan.{" "}
          <span className="rightsRe">All rights reserved.</span>
        </div>
        <div className="footerBottom3" onClick={handleSanyaClick}>
          Designed by sanya{" "}
          <img src={heart} alt="" style={{ height: "20px" }} />
        </div>
      </div>
    </div>
  );
}
