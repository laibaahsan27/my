import React from "react";
import "./hero.css";
// import bg from "../../images/bghero.svg";

export default function hero() {
  return (
    <div className="heroDIV">
       {/* <img className='bgimg' src={bg} alt="" /> */}
      <nav className="navCON">
        <div className="navleft">laiba ahsan</div>
        <div className="navright">
          <a className="rightnavoptions" href="">
            work
          </a>
          <a className="rightnavoptions" href="">
            about
          </a>
          <a href="">
            <button className="contactbtn">contact</button>
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
      </div>
    </div>
  );
}
