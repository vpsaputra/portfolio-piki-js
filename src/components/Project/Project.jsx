import React from "react";
import ProjectCard from "../ProjectCard";
import data from "@utils/data.json";

const Project = () => {
  return (
    <div className="section " id="project">
      <span className="section-title">Recent Project</span>
      <div className=" flex flex-wrap flex-row w-full gap-y-6 gap-x-2 justify-center pt-8">
        {data.map(({ id, thumbnail, dateCreated, title, url, repoUrl }) => (
          <ProjectCard
            key={id}
            id={id}
            thumbnail={thumbnail ? `../ProjectImage/${thumbnail}` : "vite.svg"}
            year={dateCreated}
            project_name={title}
            url={url}
            repoUrl={repoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
