import React from "react";
import AboutUs_Icon from "./aboutUs_Icon";
import "./css/aboutUs.css";

import aboutUs from "../../images/homePage/homePage_aboutUs.png";
import books1 from "../../images/homePage/books-1.png";

const HP_AboutUs = () => {
  return (
    <div className="aboutUs-mainDiv">
      <div className="row m-0 p-0">
        <div className="col-lg-9 homePage-aboutUs-Left m-0 p-0 pos-c-cc">
          <div className="homePage-aboutUs-Left-up">
            <h2 className="homePage-aboutUs-header">Despre noi</h2>
            <p className="homePage-aboutUs-paragraph">
              Centru autorizat si certificat de training, examinare si traduceri
              examene simulări cursuri traduceri proiecte. Centru autorizat si
              certificat de training, examinare si traduceri examene simulări
              cursuri traduceri proiecte
            </p>
            <button type="button" className="homePage-aboutUs-button">
              Află mai multe
            </button>
          </div>
          {/*  */}
          <div className="homePage-aboutUs-Left-down">
            <h2 className="homePage-aboutUs-header">Ce îți oferim</h2>
            <div className="row m-0 p-0">
              <AboutUs_Icon
                icon="fa-book-open-reader"
                text="cursuri de limbi străine"
              />
              <AboutUs_Icon
                icon="fa-earth-europe"
                text="pregătire pentru admitere în străinătate"
              />
              <AboutUs_Icon icon="fa-stamp" text="examene acreditate" />

              <AboutUs_Icon
                icon="fa-briefcase"
                text="programe speciale pentru companii"
              />
              <AboutUs_Icon
                icon="fa-language"
                text="servicii de traduceri și interpretariat"
              />
              <AboutUs_Icon icon="fa-user-tie" text="personal calificat" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 homePage-aboutUs-Right p-0">
          <img src={aboutUs} alt="" className="homePage-aboutUs-Right-img1" />
          <img src={books1} alt="" className="homePage-aboutUs-Right-img2" />
        </div>
      </div>
    </div>
  );
};

export default HP_AboutUs;
