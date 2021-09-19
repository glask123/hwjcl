import React from "react";

export default function About() {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
        <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <div style={{height: 50, width: 40, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{width: 2, backgroundColor: "white", flex: 1}}></div>
            <div style={{width: 8, height: 8, borderRadius: "50%",backgroundColor: "white"}}></div>
            <div style={{width: 2, backgroundColor: "white", flex: 1}}></div>
          </div>
          <div style={{width: 40, display: "flex", flexDirection: "row", justifyContent: "center", flex: 1}}>
            <div style={{backgroundColor: "white", width: 2, height: "100%"}}></div>
          </div>
        </div>
        <div style={{flex: 6, color: "white", height: 50}}><div style={{height: 50, display: "flex", alignItems: "center", color: "white", fontWeight:"bold", fontSize: 18}}>About HWJCL</div></div>
      </div>
      <div className="about-container" style={{width: "85%", border: "3px solid white", borderRadius: 5, height: 100}}></div>
    </div>
   
  );
}
