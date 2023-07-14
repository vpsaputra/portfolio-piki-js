import React from "react";

const ProjectCard = ({ year }) => {
  return (
    <div className="card-container flex flex-col justify-between text-center p-1 rounded-sm w-full min-h-[70vh] outline outline-1 max-w-[45%] md:max-w-[24%] mx-1">
      <div className="relative">
        <img src="vite.svg" alt="Card Thumbnail" height={300} />
        <div className=" tag year-tag absolute top-1 right-1 z-10">{year}</div>
      </div>
      <h2>Project Name</h2>
      <p className=" text-center line text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <button>Details</button>
    </div>
  );
};

export default ProjectCard;
