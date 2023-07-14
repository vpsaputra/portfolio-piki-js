import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="project-section" id="project">
      <h1>Project</h1>
      <div className=" flex flex-wrap flex-row w-full gap-1">
        <ProjectCard year={2016}></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default Project;
