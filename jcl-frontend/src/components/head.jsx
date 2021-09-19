import React from "react";

export default function Head() {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
      <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
        <div style={{height: "100%", width: 40, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div style={{width: 2, backgroundColor: "transparent", flex: 1}}></div>
          <div style={{width: 10, height: 10, backgroundColor: "white"}}></div>
          <div style={{width: 2, backgroundColor: "white", flex: 1}}></div>
        </div>
      </div>
      <div style={{flex: 6}}><h1 style={{minHeight: 50, display: "flex", alignItems: "center", color: "white"}}>Harvard-Westlake<br />Junior Classical League</h1></div>
    </div>
  );
}
