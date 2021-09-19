import React from "react";
import Person from "./person";
import Default from "../assets/default-person.png";
import Lena from '../assets/lena.JPEG';
import Melody from '../assets/melody.JPEG';
import Avery from '../assets/avery.jpg';
import Section from './fullsection'

export default function Leaders() {
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: 40}}>
      <Person
          name="Avery Konwiser"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Avery}
        />
        <Person
          name="Melody Tang"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Melody}
        />
        <Person
          name="Lena Bagley"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Lena}
        />
    </div>
    
  );
}

/*

        <Person
          name="ELI FRIEDMAN"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Default}
        />
        <Person
          name="NICOLE AUSTEN"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Default}
        />
        <Person
          name="AUSTIN LEE"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          img={Default}
        />
*/

/*
<div className="component leaders">
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
      <h3 className="component-text">Student Leaders</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "80%",
          marginBottom: "180px",
        }}
      >
        
      </div>
    </div>
*/