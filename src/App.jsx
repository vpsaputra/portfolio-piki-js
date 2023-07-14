import React from "react";

import About from "./components/ABOUT.JSX";
import Contact from "./components/Contact";
import Experience from "./components/experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import PageNumber from "./components/PageNumber";
import Marquee from "./components/Marquee";

const contents = [Header, About, Experience, Project, Contact];

// const generatePages = (props) => {
//   return
// };
const App = () => {
  return (
    <div className="bg-dark-primary font-poppins">
      {/* generatePages({contents}) */}
      <Header />
      {/* <PageNumber /> */}
      <About />
      <Experience />
      <Project />
      <Contact />
      <Nav />
      <Footer />
      <Marquee></Marquee>
    </div>
  );
};

export default App;
