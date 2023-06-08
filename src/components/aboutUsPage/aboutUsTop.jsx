import React from "react";
import { Link } from "react-router-dom";

import "./css/aboutUsTop.css";

import aboutImg_1 from "../../images/aboutUsPage/aboutUs_1.png";
import aboutImg_2 from "../../images/aboutUsPage/aboutUs_2.png";
import aboutImg_3 from "../../images/aboutUsPage/aboutUs_3.png";

const AboutUsTop = ({ screenWidth }) => {
  return (
    <div className="row aboutUs-top-firstRow m-0">
      <div className="col-lg-6 p-0">
        <div className="pos-c-cc aboutUs-top-img">
          {screenWidth >= 992 ? (
            <img src={aboutImg_2} alt="" className="w-100 h-100" />
          ) : (
            <img src={aboutImg_3} alt="" className="w-100 h-100" />
          )}
        </div>
      </div>
      <div className="col-lg-6 pos-c-cc aboutUs-top-topRightPanel">
        <p className="aboutUs-top-title m-0 p-0">Despre noi</p>
        <div className="aboutUs-top-coverDiv1"></div>
        <div className="aboutUs-top-coverDiv2 pos-c-sbc">
          <p className="aboutUs-top-text">
            ERAN a luat fiinta in mai 2006, prima sa actiune fiind crearea
            primului centru de examinare ECL din Judetul Brasov. Ulterior, ERAN
            si-a devoltat palmaresul adaugand serviciilor sale si examenele LCCI
            si Cambridge. Traducerile reprezinta si ele o componenta importanta
            a Centrului, acoperind peste 28 de limbi, si varii domenii.{" "}
          </p>
          <p className="aboutUs-top-text">
            ERAN a luat fiinta in mai 2006, prima sa actiune fiind crearea
            primului centru de examinare ECL din Judetul Brasov. Ulterior, ERAN
            si-a devoltat palmaresul adaugand serviciilor sale si examenele LCCI
            si Cambridge. Traducerile reprezinta si ele o componenta importanta
            a Centrului, acoperind peste 28 de limbi, si varii domenii.
          </p>
          <button type="button" className="aboutUs-top-button">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTop;
