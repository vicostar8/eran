import React from "react";
import ProjectsPage_1 from "./projectsPage_1";
import ProjectsPage_2 from "./projectsPage_2";

import "./css/projectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projectsPage-main">
      <ProjectsPage_1 />
      <ProjectsPage_2 />
    </div>
  );
};

export default ProjectsPage;
