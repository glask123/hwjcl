import React from 'react';

export default function FullSection(props) {
  return (
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
      <div style={{flex: 6}}><div style={{height: 50, display: "flex", alignItems: "center", color: "white", fontWeight:"bold", fontSize: 18}}>{props.title}</div><div>{props.children}</div></div>
    </div>
  );
}

/*
<div style={{width: "100%", display: "flex", flexDirection: "row"}}>
      <div style={{flex: 1, backgroundColor: "green", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
        <div style={{height: 50, backgroundColor: "lightgreen", width: 40, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div style={{width: 2, backgroundColor: "white", flex: 1}}></div>
          <div style={{width: 8, height: 8, borderRadius: "50%",backgroundColor: "white"}}></div>
          <div style={{width: 2, backgroundColor: "white", flex: 1}}></div>
        </div>
        <div style={{backgroundColor: "yellow", width: 40, display: "flex", flexDirection: "row", justifyContent: "center", flex: 1}}>
          <div style={{backgroundColor: "white", width: 2, height: "100%"}}></div>
        </div>
      </div>
      <div style={{backgroundColor: "red", flex: 6}}><div style={{height: 50, backgroundColor: "lightcoral", display: "flex", alignItems: "center", color: "white", fontWeight:"bold", fontSize: 18}}>{props.title}</div><div>BODY</div></div>
    </div>
*/