import React from "react";

export default function Head() {
  return (
    <div className="component head">
      <div
        style={{
          paddingLeft: "100px",
          marginRight: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "38px",
        }}
      >
        <div className="box" />
        <div className="line" />
      </div>
      <h1>
        Harvard-Westlake
        <br />
        Junior Classical League
      </h1>
    </div>
  );
}
