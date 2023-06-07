import React from "react";
import { useLocation } from "react-router-dom";

import "./css/coursePage.css";

const CoursePage = () => {
  const {
    description,
    duration,
    image,
    instructor,
    language,
    name,
    price,
    structure,
  } = useLocation().state;

  return (
    <div className="coursePage-mainDiv bg-secondary p-4">
      <div className="row m-0">
        <div className="col-8 bg-warning">
          <div className="coursePage-leftDiv">a</div>
        </div>
        <div className="col-4 bg-primary">
          <div className="coursePage-rightDiv">a</div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
