import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import About from "../components/about";
import Leaders from "../components/leaders";
import Advisors from "../components/advisors";
import Events from "../components/events";
import { Helmet } from "react-helmet";
import Break from '../components/break'
import Section from '../components/fullsection';
import Disc from '../assets/discord.png'

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
        <Break height={40} />
        <About />
        <Break height={100}/>
        <Section title="Student Leaders"><Leaders /></Section>
        <Break height={100}/>
        <Advisors />
        <Break height={100}/>
        <Events />
      </div>
      <div className="bg" />
    </div>
  );
}
