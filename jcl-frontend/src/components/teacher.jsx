import React from "react";

export default function Person(props) {
  let borderColor;
  if (props.upper) {
    borderColor = "#D22030";
  } else {
    borderColor = "#FFC43A";
  }

  return (
    <div
      className="person-container teacher-container"
      style={{ borderColor: borderColor }}
    >
      <h3 className="person-name teacher-name">{props.name}</h3>
      <img
        className="person-image teacher-image"
        style={{ borderColor: borderColor }}
        src={props.img}
        alt="image"
      />
      <p className="person-desc">{props.desc}</p>
    </div>
  );
}
