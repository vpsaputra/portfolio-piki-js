import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import data from "@utils/data.json";
import "./ProjectShowcase.css";
import { useParams } from "react-router-dom";
import ProjectSummary from "../components/ProjectSummary";

const ProjectShowcase = () => {
  const { id } = useParams();

  const [selectedProject, setSelectedProject] = useState(data[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; //jumlah project yang ditampilkan/halaman

  useEffect(() => {
    setSelectedProject(data[id | 0]); // 0 : tampilkan project terbaru, id: project terpilih
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const filteredProjects = data.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const uniqueCategories = [
    "All",
    ...new Set(data.map((project) => project.category)),
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container flex justify-center">
        <div className="section-title block items-center text-center justify-center mt-4">
          Project Details
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex main-content w-full">
          <div className=" section project-detail items-start">
            <div className="project-summary flex flex-col relative w-full min-h-[240px]">
              <ProjectSummary {...selectedProject}></ProjectSummary>
            </div>
            <div class="w-full border-t border-gray-300 my-4"></div>
            {selectedProject ? (
              <div className="markdown-content">
                <ReactMarkdown>
                  {selectedProject.content || `# ppp #`}
                </ReactMarkdown>
              </div>
            ) : (
              <p>No projects available in this category.</p>
            )}
          </div>
          {/* end page content */}
        </div>
        <div className="flex page-navigation px-3 md:px-auto ">
          <div className="recent-projects">
            <h2>Recent Projects</h2>
            <div className="category-filter">
              <label htmlFor="category">Filter by Category: </label>
              <select id="category" onChange={handleCategoryChange}>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <h3>{project.title}</h3>
                <h3>{project.category}</h3>
                <p>{new Date(project.dateCreated).toLocaleDateString()}</p>
              </div>
            ))}
            <div className="pagination">
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  onClick={() => paginate(page + 1)}
                  className={currentPage === page + 1 ? "active" : ""}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
