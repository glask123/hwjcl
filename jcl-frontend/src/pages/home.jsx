import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import About from "../components/about";
import Leaders from "../components/leaders";
import Advisors from "../components/advisors";
import Events from "../components/events";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home-body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | HWJCL</title>
      </Helmet>
      <Nav />
      <div className="component-body">
        <Head />
        <About />
        <Leaders />
        <Advisors />
        <Events />
      </div>
      <div className="bg" />
    </div>
  );
}
