import React from "react";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project/Project";
import PageNumber from "./components/PageNumber";
import Marquee from "./components/Marquee";
import Home from "./components/Home";
import HomePage from "./Pages/HomePage";
import { createRoot } from "react-dom/client";
import ProjectShowcase from "./Pages/ProjectShowcase";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>

        <Route exact path="/projects" Component={ProjectShowcase}></Route>
        <Route
          path="projects/:id"
          element={<ProjectShowcase />}
          title="Projects"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
