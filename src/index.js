//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactDom from "react-dom";

const currentDate = new Date();
const hour = currentDate.getHours();

let greet = "";

const customStyle = {
  color: "",
};

if (hour >= 0 && hour <= 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (hour >= 12 && hour <= 18) {
  greet = "Good Afternoon";
  customStyle.color = "green";
} else {
  greet = "Good Night";
  customStyle.color = "blue";
}

reactDom.render(
  <div style={customStyle} className="heading">
    {greet}
  </div>,
  document.getElementById("root")
);
