import React from "react";

export default function Events() {
  return (
    <div className="component events">
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
      <h3 className="component-text">Upcoming Events</h3>
    </div>
  );
}
