import React from "react";
import { useNavigate } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  id,
  thumbnail = "vite.svg",
  year,
  project_name = "Project Name",
  url = null,
  repoUrl = null,
}) => {
  const navigate = useNavigate();
  const handleProjectClick = () => navigate(`/projects/${id}`);

  return (
    <div className="card-container flex flex-col justify-between text-center p-1 rounded-sm w-full min-h-[10vh] outline outline-1 max-w-[45%] lg:max-w-[30%] mx-1">
      <div className="relative">
        <img src={thumbnail} alt="Card Thumbnail" height={40} />
        <div className=" tag year-tag absolute top-1 right-1 z-10">{year}</div>
      </div>
      <h3 className=" my-2">{project_name}</h3>
      <div className="flex button-group content-stretch gap-1 mt">
        <button
          className=" text-black grow"
          onClick={handleProjectClick}
          title="View Project Detail"
        >
          Details
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title="View Repository on Github"
          className="custom-button"
        >
          <TbWorldWww />
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View Repository on Github"
          className="custom-button btn-disabled "
        >
          <FaGithub className="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
