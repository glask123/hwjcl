import React, { useState } from "react";
import X from "../assets/x.png";
import { Helmet } from "react-helmet";
import Expand from "../assets/expand.png";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import Email from "../assets/email.png";
import Piscetas from "../assets/piscetas.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <React.Fragment>
      <div className="contact-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | HWJCL</title>
        </Helmet>
        <div className="form-container">
          <form className="contact" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label">
              NAME
            </label>
            <input
              type="text"
              id="name"
              className="input"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email" className="label">
              EMAIL
            </label>
            <input
              type="text"
              id="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="subject" className="label">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
            />
            <label htmlFor="message" className="label">
              MESSAGE
            </label>
            <textarea
              id="message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            />
            <input type="submit" value="SUBMIT" className="submit" />
          </form>
        </div>
        <Link to="/">
          <img src={X} alt="x" className="x" />
        </Link>

        <Scroll.Link
          to="contactinfo"
          spy={true}
          smooth={true}
          className="expand"
        >
          <img src={Expand} alt="expand" className="expand-button" />
        </Scroll.Link>
      </div>
      <div name="contactinfo" className="contactinfo">
        <div className="emails-container">
          <h2 style={{ margin: "10px" }}>Find us on Instagram</h2>
          <a
            style={{
              height: "100px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://www.instagram.com/piscetas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Piscetas} alt="piscetas" className="piscetas" />
          </a>
          <a style={{ fontStyle: "italic", fontSize: "14px" }}>@piscetas</a>
        </div>
        <div className="emails-container">
          <h2
            style={{
              margin: "10px",
            }}
          >
            Email the Leaders
          </h2>
          <div className="email-container">
            <img src={Email} alt="email" className="img" />
            <a className="email-text" href="mailto:efriedman1@hwemail.com">
              Eli Friedman: efriedman1@hwemail.com
            </a>
          </div>

          <div className="email-container">
            <img src={Email} alt="email" className="img" />
            <a className="email-text" href="mailto:nausten1@hwemail.com">
              Nicole Austen: nausten1@hwemail.com
            </a>
          </div>
          <div className="email-container">
            <img src={Email} alt="email" className="img" />
            <a className="email-text" href="mailto:alee3@hwemail.com">
              Austin Lee: alee3@hwemail.com
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
