import React from "react";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Project from "../components/Project/Project";
import Marquee from "../components/Marquee";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <div className="">
        <Home />
        <Header />
        <Experience />
        <Project />
        <Contact />
        <Nav />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
