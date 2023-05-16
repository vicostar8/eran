import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "./css/examProfilePage.css";

const ExamProfilePage = () => {
  const { shortTitle, title, description, benefits, linksArray } =
    useLocation().state;

  const navigate = useNavigate();

  return (
    <div className="examProfilePage-mainDiv p-4">
      <div className="row m-0">
        <div className="col-lg-5 examProfilePage-shortTitle pos-c-cc">
          {shortTitle}
        </div>
        <div className="col-lg-7 p-4">
          <div className="examProfilePage-title pos-c-cc mb-3 text-center">
            {title}
          </div>
          <div className="examProfilePage-description">{description}</div>
          {linksArray.length != 0 && (
            <p className="mt-3 examProfilePage-linkText">
              Link-uri utile:{" "}
              {linksArray.map((link, idx) => (
                <Link
                  key={`examLinks-${idx}`}
                  to={`${link.linkURL}`}
                  className="examProfilePage-links"
                >
                  {link.linkName}
                </Link>
              ))}
            </p>
          )}
        </div>
      </div>
      {/* -------- */}
      <div className="row m-0">
        <div className="col-lg-7 pos-c-sc p-4">
          <p className="examProfilePage-title">Avantaje</p>
          <ul className="examProfilePage-benefits">
            {benefits.map((benefit, idx) => (
              <li key={`examBenefit-${idx}`}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-5 examProfilePage-contact p-4 pos-c-sec text-center">
          Pentru a te înscrie la examenul {shortTitle} te invităm mai întâi să
          ne cunoaștem. Intră pe pagina de "Contact" si ia legătura cu noi în
          cel mai scurt timp posibil pentru a afla toate detaliile!
          <button
            type="button"
            className="examProfilePage-contact-button mt-4"
            onClick={() => navigate(`/contact`)}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamProfilePage;
