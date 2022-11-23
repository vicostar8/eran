import React from "react";
import "./css/heroSection.css";

import heroImg from "../../images/homePage/heroImg.png";

const HeroPage = () => {
  return (
    <div className="container-lg heroSection">
      <div className="row m-0 p-0">
        <div className="col-lg-6 heroLeft pos-c-cs">
          <h1 className="heroLeft-header">Află mai multe chiar acum!</h1>
          <p className="heroLeft-paragrapgh">
            Fie că dorești o traducere de calitate, fie că vrei să te
            perfecționezi în arta conversației în diferite limbi moderne, sau
            chiar să te pregătești pentru examene importante fiind sigur de
            succes, la ERAN găsești tot ce ai nevoie, și cum ai nevoie!
          </p>
          <button type="button" className="heroLeft-button">
            Descoperă
          </button>
        </div>
        <div className="col-lg-6 heroRight pos-c-cc">
          <img src={heroImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
