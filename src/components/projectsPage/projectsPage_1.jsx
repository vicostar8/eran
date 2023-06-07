import React from "react";

import projectsPage_0 from "../../images/projectsPage/projectsPage_0.png";
import projectsPage_1 from "../../images/projectsPage/projectsPage_1.png";
import projectsPage_2 from "../../images/projectsPage/projectsPage_2.png";
import projectsPage_3 from "../../images/projectsPage/projectsPage_3.png";
import projectsPage_5 from "../../images/projectsPage/projectsPage_5.png";
import logoWhite from "../../images/logo/logoWhite-PNG.png";

const ProjectsPage_1 = () => {
  return (
    <div className="row mx-0 my-3">
      {/* <img src={projectsPage_0} className="w-100 p-2" /> */}

      {/* SAU */}

      {/* COL-1 */}
      <div className="col-lg-4 projectsPage-firstCol p-2">
        <div className="row m-0">
          <div className="col-md-6 col-lg-12 projectsPage-firstCol-1">
            <h4 className="projectsPage-firstCol-text text-center">
              REZULTATE:
            </h4>
            <ul className="m-0 p-0">
              <li>
                <span>200 de tineri</span> participă la cursuri de calificare
                autorizate ANC
              </li>
              <li>
                <span>80 de tineri</span> beneficiază de certificarea
                competențelor deținute
              </li>
              <li>
                <span>72 de tineri</span> își dezvoltă competențele de
                comunicare în limba engleză pe care le pot certifica
                internațional
              </li>
              <li>
                <span>24 de tineri</span> dobândesc competențe antreprenoriale
              </li>
              <li>
                <span>4 tineri</span> primesc finanțare pentru ideea lor de
                afacere
              </li>
              <li>
                <span>376 de tineri</span> își schibă statusul socio-profesional
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-12 projectsPage-firstCol-2 pos-c-cc p-0">
            <img src={projectsPage_1} alt="" className="w-100" />
          </div>
        </div>
      </div>

      {/* COL-2 */}
      <div className="col-lg-4 projectsPage-secondCol p-2">
        <h4 className="projectsPage-secondCol-text text-center mb-3">
          ACTIVITĂȚI ȘI LOCALIZARE:
        </h4>
        <div className="projectsPage-secondCol-1 text-center mb-3">
          Prin activitățile propuse, proiectul urmărește îmbunătățirea situației
          tinerilor și facilitatea tranziției acestora către piața muncii prin
          participarea la cursuri de calificare, evaluarea competențelor
          profesionale dobândite anterior, dezvoltarea de competențe de
          comunicare în limba engleză, dezvoltarea de competențe
          antreprenoriale, în paralel cu actualizarea cunoștințelor referitoare
          la egalitatea de șanse și aplicarea principiilor de dezvoltarea
          durabilă, a competențelor digitale, a competențelor cognitive, sociale
          și civice.
        </div>

        <div className="projectsPage-secondCol-2 mb-3">
          <img src={projectsPage_2} alt="" className="w-100" />
        </div>
        <div className="projectsPage-secondCol-2 text-center mb-3">
          Activitățile se desfășoară pe durata a 24 de luni, în Brașov, dar
          cursurile de calificare și certificarea competențelor profesionale se
          pot susține în toate județele Regiunii Centru: Alba, Brașov, Covasna,
          Harghita, Mureș, Sibiu.
        </div>
        <div className="projectsPage-secondCol-3 text-center">
          <p className="fw-bold m-0">START SMART - POCU/909/2/4/150788</p>
          <p className="">
            Proiect cofinanțat din Fondul Social European prin Programul
            Operațional Capital Uman 2014-2020
          </p>
          <p className="fw-bold">ERAN C.A.T.T. S.R.L</p>
          <p className="fw-bold m-0">OCTOMBRIE 2021</p>
          <p className="m-0">
            Conținutul acestui material nu reprezintă în mod obligatoriu poziția
            oficială a Uniunii Europene sau a Guvernului României
          </p>
        </div>
      </div>

      {/* COL-3 */}
      <div className="col-lg-4 p-2">
        <div className="projectsPage-thirdCol-title text-center">
          <p className="m-0 p-0 projectsPage-thirdCol-title1">START</p>
          <p className="m-0 p-0 projectsPage-thirdCol-title2">SMART</p>
        </div>
        <div className="my-3 projectsPage-thirdCol-subTitle text-center">
          <p className="m-0 p-0 projectsPage-thirdCol-subTitle1">
            Începe-ți viața profesională A.I.C.I!
          </p>
          <p className="m-0 p-0 projectsPage-thirdCol-subTitle2">
            ACTIV | INFORMAT | CALIFICAT | INTELIGENT
          </p>
        </div>
        <div className="projectsPage-thirdCol-text p-4 text-center">
          Centrul de limbi străine <span>ERAN CATT</span> din Brașov, în
          parteneriat cu <span>Asociația EMA</span>, te invită să participi la
          activitățile proiectului <span>"START SMART"</span> contribuind astfel
          la dezvoltarea ta personală și profesională!
          <div className="pos-c-cc p-4">
            <img src={logoWhite} alt="" className="w-50 mt-3" />
          </div>
        </div>
        <img src={projectsPage_5} alt="" className="w-100" />
      </div>
    </div>
  );
};

export default ProjectsPage_1;
