import React from "react";

export default function Person(props) {
  return (
    <div className="person-container">
      <h3 className="person-name">{props.name}</h3>
      <img className="person-image" src={props.img} alt="image" />
      <p className="person-desc">{props.desc}</p>
    </div>
  );
}
