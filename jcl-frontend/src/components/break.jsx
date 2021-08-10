import React from 'react';

export default function Break(props) {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "row", height: props.height}}>
      <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
        
        <div style={{width: 40, display: "flex", flexDirection: "row", justifyContent: "center", flex: 1}}>
          <div style={{backgroundColor: "white", width: 2, height: "100%"}}></div>
        </div>
      </div>
      <div style={{flex: 6,}}></div>
    </div>
  );
}