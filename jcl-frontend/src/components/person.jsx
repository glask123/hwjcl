import React from "react";

export default function Person(props) {
  return (
    <div className="person-container" style={{width: 200, margin: 10, color: "white", borderWidth: 3, borderRadius: 8}}>
      <div style={{height: 38, backgroundColor: "#191919",fontWeight: "bold", display: "flex", justifyContent: "center", fontSize: 18, alignItems: "center", borderRadius: 8}}>{props.name}</div>
      <img src={props.img} alt={props.name} style={{width: "100%", height: 250, objectFit: "cover", marginTop: 6, borderRadius: 8}}/>
    </div>
  );
}


/*
<div className="person-container">
      <h3 className="person-name">{props.name}</h3>
      <img className="person-image" src={props.img} alt="image" />
      <p className="person-desc">{props.desc}</p>
    </div>
*/