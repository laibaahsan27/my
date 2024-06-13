import React from "react";
import "./scrollBar.css";
import Marquee from "react-fast-marquee";

const ScrollBarOne = () => {
  const items = [
    "HTML",
    "CSS",
    "React.js",
    "Next.js",
    "JavaScript",
    "C",
    "C++",
    "GitHub",
    "Rest API’s",
    "Bootstrap",
    "Material UI",
    "Java",
    "Redux",
    "MERN"
  ];

  return (
    <div className="marquee">
      <Marquee gradient={false} speed={70}>
        {items.concat(items).map((item, i) => (
          <div className="marquee__item" key={i}>{item}</div>
        ))}
      </Marquee>
    </div>
  );
}

export default ScrollBarOne;
