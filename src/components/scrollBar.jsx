import React from "react";
import "./scrollBar.css";
export default function scrollBar() {
  const items = [
    "HTML, ",
    "CSS, ",
    "React.js, ",
    "Next.js, ",
    "JavaScript, ",
    "C, ",
    "C++, ",
    " GitHub, ",
    "Rest API’s, ",
    "Bootstrap, ",
    "Material UI, ",
    "Java, ",
    "Redux, ",
    "MERN, ",
  ];
  return (
    <div>
      <div className="marquee">
        <div className="marquee__inner">
          {items.concat(items).map((item, i) => (
            <React.Fragment key={i}>
              <div className="marquee__item">{item}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
