import React from "react";

const CoursePage_LeftPanel_Accordition = ({ wtD }) => {
  return (
    <div
      className="coursePage-leftDiv-courseAccordition"
      id="courseChapterContent"
    >
      {wtD.map((item, idx) => (
        <div
          key={`${item.name}Accordition`}
          className="coursePage-leftDiv-courseStructure my-2"
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button p-3 fs-4 fw-bold coursePage-leftDiv-courseContentChapter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${idx + 1}`}
              aria-expanded="true"
              aria-controls={`collapse${idx + 1}`}
            >
              {item.name}
            </button>
          </h2>
          <div
            id={`collapse${idx + 1}`}
            className=" collapse"
            data-bs-parent="#courseChapterContent"
          >
            <div className="coursePage-leftDiv-courseContent p-3">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursePage_LeftPanel_Accordition;
