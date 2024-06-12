import React from "react";
import "./Hero1.css";
import bg from "../../assets/bghero.svg";
import ABOUT from "../about/about.jsx";
import FOOTER from "../footer/footer.jsx";
import PROJECTS from "../Projects/index.jsx";
export default function Hero1() {
  return (
    <div className="heroDIV">
      <img className="bgimg" src={bg} alt="" />
      <nav className="navCON">
        <div className="navleft">laiba ahsan</div>
        <div className="navright">
          <a className="rightnavoptions" href="">
            work
          </a>
          <a className="rightnavoptions" href="">
            about
          </a>
          <a href="" className="contactbtnDesktop">
            <button className="contactbtn cssbuttons">contact</button>
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
        <button className="contactbtnPhone">CONTACT</button>
      </div>
      {/* <PROJECTS />
      <ABOUT />
      <FOOTER /> */}
    </div>
  );
}
