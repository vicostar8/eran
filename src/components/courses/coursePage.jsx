import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import "./css/coursePage.css";

const CoursePage = () => {
  const {
    description,
    duration,
    language,
    name,
    price,
    curricullum,
    structure,
  } = useLocation().state;

  const [whatToDisplay, setWhatToDisplay] = useState(1);

  return (
    <div className="coursePage-mainDiv p-4">
      <div className="row m-0">
        <div className="col-lg-8 bg-warning">
          <div className="coursePage-leftDiv p-2 pos-c-cc">
            <p className="fs-1 fw-bold coursePage-leftDiv-title">
              Curs - {name}
            </p>
            {/* NAV */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
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
                    <span
                      className="nav-link"
                      onClick={() => setWhatToDisplay(1)}
                    >
                      Descriere
                    </span>
                    <span
                      className="nav-link"
                      onClick={() => setWhatToDisplay(2)}
                    >
                      Curricullum
                    </span>
                    <span
                      className="nav-link"
                      onClick={() => setWhatToDisplay(3)}
                    >
                      Structură
                    </span>
                  </div>
                </div>
              </div>
            </nav>
            {/* CONTENT */}
            <div className="coursePage-leftDiv-content bg-secondary w-100 p-3">
              {description}
            </div>
          </div>
        </div>
        {/* RIGHT PANEL */}
        <div className="col-lg-4">
          <div className="coursePage-rightDiv pos-c-cc">
            <ul className="m-0 p-0 w-100">
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
                <p className="m-0 fs-5">
                  Structură: {structure.nrOfChapters} capitole
                </p>
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
      </div>
    </div>
  );
};

export default CoursePage;
