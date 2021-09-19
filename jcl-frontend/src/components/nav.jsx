import React from "react";
import Logo from "../assets/piscehw.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Disc from '../assets/discord.png'

export default function Nav() {
  return (
    <div className="nav">
      <div className="logodiv">
        <a href="https://hw.com">
          <img src={Logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="nav-buttons">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbutton">HOME</span>
        </Link>

        <ScrollLink to="leaders" spy={true} smooth={true} offset={-40}>
          <span className="navbutton">LEADERS</span>
        </ScrollLink>

        <ScrollLink to="advisors" spy={true} smooth={true} offset={-40}>
          <span className="navbutton">ADVISORS</span>
        </ScrollLink>

        <span className="navbutton">EVENTS</span>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <span className="navbutton">GALLERY</span>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <span className="navbutton">CONTACT</span>
        </Link>
      </div>
      <a href="https://discord.gg/47q9SsyMYd" style={{width: 40, height: 40, marginLeft: 10, marginBottom: "5px"}}><img src={Disc} className="discord" style={{width: 40, height: 40}}/></a>
      
    </div>
  );
}
