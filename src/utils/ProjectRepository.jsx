import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import data from "@utils/data.json";

const ProjectRepository = () => {
  const [selectedProject, setSelectedProject] = useState(data[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; //jumlah project yang ditampilkan/halaman

  useEffect(() => {
    setSelectedProject(data[0]);
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
    <div className="project-showcase">
      <div className="project-detail">
        <h1>Project Details</h1>
        {selectedProject ? (
          <ReactMarkdown>{selectedProject.content}</ReactMarkdown>
        ) : (
          <p>No projects available in this category.</p>
        )}
      </div>
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
  );
};

export default ProjectRepository;
