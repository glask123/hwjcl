import React from "react";
import Teacher from "./teacher";
import Default from "../assets/default-person.png";

export default function Advisors() {
  return (
    <div className="component advisors">
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
      <h3 className="component-text">Faculty Advisors</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginBottom: "180px",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "70%",
            alignItems: "center",
          }}
        >
          <Teacher
            name="MERCEDES BARLETTA"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            img={Default}
            upper={false}
          />
          <Teacher
            name="DOUG FRALEIGH"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            img={Default}
            upper={false}
          />
          <h2 className="advisor-text advisor-left">
            LOWER
            <br />
            SCHOOL
          </h2>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "80%",
            alignItems: "center",
          }}
        >
          <h2 className="advisor-text">
            UPPER
            <br />
            SCHOOL
          </h2>
          <Teacher
            name="DEREK WILAIRAT"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            img={Default}
            upper={true}
          />
          <Teacher
            name="JOYCE WAGNER"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            img={Default}
            upper={true}
          />
          <Teacher
            name="BRAD HOLMES"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            img={Default}
            upper={true}
          />
        </div>
      </div>
    </div>
  );
}
