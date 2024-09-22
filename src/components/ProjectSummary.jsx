import React from "react";

const ProjectSummary = ({
  title = "-",
  category = "-",
  type = "-",
  stack = "-",
  thumbnail = "-",
}) => {
  const prefix = "../ProjectImage/";

  return (
    <>
      <div className="thumb">
        <img
          className="thumbnail max-sm:max-w-sm top-0 right-0 absolute"
          src={prefix + thumbnail}
          alt="Thumbnail"
        />
      </div>
      <div className="flex w-1/2 flex-col">
        <span className="title">Project Name : {title}</span>
        <span className="">Category : {category}</span>
        <span className="">Project Type : {type ? type : "-"}</span>
        <span className="">Project Stack : {stack ? stack : "-"}</span>
      </div>
      {/* {project} */}
    </>
  );
};

export default ProjectSummary;
