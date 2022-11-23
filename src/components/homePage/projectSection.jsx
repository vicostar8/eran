import React from "react";

import "./css/projectSection.css";

import eranProject from "../../images/homePage/proiectStartSmart.jpg";

const ProjectSection = () => {
  return (
    <div className="projectSection-mainDiv">
      <div className="row m-0 p-0">
        <div className="col-lg-6 homePage-projectSection-Left pos-c-cc">
          <img src={eranProject} alt="" />
        </div>
        <div className="col-lg-6 homePage-projectSection-Right pos-c-cc">
          <div className="homePage-projectSection-header">PROIECTUL</div>
          <div className="homePage-projectSection-header">„Start Smart”</div>
          <div className="homePage-projectSection-subHeader text-center">
            CURSURI GRATUITE! Proiectul START SMART are ca obiectiv cresterea si
            imbunatatirea nivelului de cunostinte, aptitudini si competente
            pentru 376 de tineri NEET (16-29 de ani) din regiunea Centru
          </div>
          <button type="button" className="homePage-projectSection-button">
            Informează-te
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
