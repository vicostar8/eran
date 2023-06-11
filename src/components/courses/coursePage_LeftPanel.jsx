import React, { useState } from "react";

import CoursePage_LeftPanel_Accordition from "./coursePage_LeftPanel_Accordition";

const CoursePage_LeftPanel = ({ name, courseMenu }) => {
  const [whatToDisplay, setWhatToDisplay] = useState(courseMenu[0].menuContent);

  return (
    <div className="col-lg-8">
      <div className="coursePage-leftDiv pos-c-cc">
        <p className="fs-1 fw-bold coursePage-leftDiv-title">Curs - {name}</p>
        {/* NAV */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid pos-c-cc">
            <button
              className="navbar-toggler my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#courseNavBar"
              aria-controls="courseNavBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="courseNavBar">
              <div className="navbar-nav">
                {courseMenu.map((course, idx) => (
                  <span
                    key={`${course.menuTitle}-${idx + 1}`}
                    className="nav-link fs-5 coursePage-leftDiv-courseMenu"
                    onClick={() => setWhatToDisplay(course.menuContent)}
                  >
                    {course.menuTitle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </nav>
        {/* CONTENT */}
        <div className="coursePage-leftDiv-content w-100">
          {Array.isArray(whatToDisplay) ? (
            <CoursePage_LeftPanel_Accordition wtD={whatToDisplay} />
          ) : (
            whatToDisplay
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage_LeftPanel;
