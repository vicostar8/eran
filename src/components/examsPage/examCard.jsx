import React from "react";
import "./css/examCard.css";

const ExamCard = ({ shortTitle }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 examCardDiv">
      <div className="examCard pos-c-cc">
        <p className="examCard-ShortTitle m-0 p-0">{shortTitle}</p>
        <i className="fa-solid fa-hand examCard-icon"></i>
      </div>
    </div>
  );
};

export default ExamCard;
