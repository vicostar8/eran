import React from "react";
import { useLocation } from "react-router-dom";

import CoursePage_RightPanel from "./coursePage_RightPanel";
import CoursePage_LeftPanel from "./coursePage_LeftPanel";

import "./css/coursePage.css";

const CoursePage = () => {
  const { name, price, duration, nrOfChapters, language, courseMenu } =
    useLocation().state;

  return (
    <div className="coursePage-mainDiv p-4">
      <div className="row m-0">
        {/* LEFT PANEL */}
        <CoursePage_LeftPanel name={name} courseMenu={courseMenu} />

        {/* RIGHT PANEL */}
        <CoursePage_RightPanel
          price={price}
          duration={duration}
          nrOfChapters={nrOfChapters}
          language={language}
        />
      </div>
    </div>
  );
};

export default CoursePage;
