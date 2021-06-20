import React from "react";

export default function About() {
  return (
    <div className="component about">
      <div
        style={{
          paddingLeft: "100px",
          marginRight: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="circle" />
        <div className="line" />
      </div>
      <h3 className="component-text">About HWJCL</h3>
    </div>
  );
}
