import React from "react";
// import Feature from '../../components/feature/Feature';
import EachFeature from "./EachFeature";

import "./WorkingFeature.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "You will be exposed to improve both your personal and social skill by exposing yoiur self to such a golden opportunity",
  },
  {
    title: "Become culturally talented ",
    text: "You also become culturally suitable for different kind of culture that you will be experiencing while studying abroad which makes you culturally tolerating person .",
  },
  {
    title: "Financially Independent and Confortable",
    text: "You will also be exposed a lot of remote and onsite jobs that you can do while being not distracted from school",
  },
  {
    title: "Accessing  / Moving forward",
    text: "Once You started a journey studying there , You will be having a chance of being promoted and accessing a lot differnt programs based your current status",
  },
];

const WorkingFeature = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step Into The Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <EachFeature
          title={item.title}
          text={item.text}
          key={item.title + index}
        />
      ))}
    </div>
  </div>
);

export default WorkingFeature;
