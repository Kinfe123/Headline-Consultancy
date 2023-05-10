import React from "react";
import studies from "../constants/Study.json";
import "./Study.css";

console.log(studies);
function Study() {
  return (
    <div id="study">
      <div className="parent">
        <h1>
          Study with <span className="gradient__text">Us.</span>
        </h1>

        <div className="underline"></div>
      </div>

      <div className="study">
        {studies.map((each) => {
          return (
            <div className="each-study">
              <img src={`${each.img}`} alt={`${each.text}`} />
              <h3>{each.text}</h3>
              <p className="text-left">{each.desc}</p>
              <button className="btn">Learn More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Study;
