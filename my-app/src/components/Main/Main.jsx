import React from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";

const Main = () => {
  return (
    <main className="all-section">
      <Home />
      <Services />
      <Projects />
      <Contact />
      <About />
    </main>
  );
};

export default Main;