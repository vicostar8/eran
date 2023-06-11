import React from "react";
import { Link } from "react-router-dom";

const CoursePage_RightPanel = ({ price, duration, nrOfChapters, language }) => {
  return (
    <div className="col-lg-4">
      <div className="coursePage-rightDiv pos-c-cc">
        <ul className="m-0 p-0 w-100 p-2">
          <li className="pos-r-sc my-3">
            <i className="fa-solid fa-dollar-sign fs-4 mx-3"></i>
            <p className="m-0 fs-5">Preț: {price} lei</p>
          </li>
          <li className="pos-r-sc my-3">
            <i className="fa-solid fa-clock mx-3"></i>
            <p className="m-0 fs-5">Durată: {duration} ore</p>
          </li>
          <li className="pos-r-sc my-3">
            <i className="fa-solid fa-book mx-3"></i>
            <p className="m-0 fs-5">Structură: {nrOfChapters} capitole</p>
          </li>
          <li className="pos-r-sc my-3">
            <i className="fa-solid fa-language mx-3"></i>
            <p className="m-0 fs-5">Limba: {language}</p>
          </li>
          <li className="pos-r-cc my-3 p-2">
            <Link to="/contact">
              <button type="button" className="coursePage-rightDiv-button">
                Înscrie-te acum!
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePage_RightPanel;
