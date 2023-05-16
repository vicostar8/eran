import React from "react";
import { useNavigate } from "react-router-dom";

import "./css/examCard.css";

const ExamCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 examCardDiv">
      <div
        className="examCard pos-c-cc"
        onClick={() =>
          navigate(`/examene/${course.shortTitle.toLowerCase()}`, {
            state: { ...course },
          })
        }
      >
        <p className="examCard-ShortTitle m-0 p-0">{course.shortTitle}</p>
        <i className="fa-solid fa-hand examCard-icon"></i>
      </div>
    </div>
  );
};

export default ExamCard;
