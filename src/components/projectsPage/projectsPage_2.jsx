import React from "react";

// import projectsPage_1 from "../../images/projectsPage/projectsPage_1.png";
// import projectsPage_2 from "../../images/projectsPage/projectsPage_2.png";
// import projectsPage_3 from "../../images/projectsPage/projectsPage_3.png";
import students_classroom from "../../images/projectsPage/students_classroom.png";

const ProjectsPage_2 = () => {
  return (
    <div className="row mx-0 my-3 projectsPage2 p-1">
      <div className="col-lg-4 projectsPage2-firstCol p-3">
        <h4 className="projectsPage2-firstCol-text text-center">
          CONDIȚII DE ACCES
        </h4>
        <ul className="m-0 p-0">
          <li>
            Dacă ai între <span>16 și 29 de ani</span>
          </li>
          <li>NU studiezi (liceu, profesională, facultate etc.)</li>
          <li>NU lucrezi cu contract de muncă</li>
          <li>Nu urmezi un curs de formare profesională</li>
          <li>
            poți beneficia de serviciile oferite <b>GRATUIT</b> prin proiectul{" "}
            <b>START SMART</b>
          </li>
        </ul>
      </div>
      {/* COL2 */}
      <div className="col-lg-4 p-3">
        <h4 className="projectsPage2-secondCol-text text-center">
          OFERTA DE SERVICII
        </h4>
        <ul className="m-0">
          <li>cursuri autorizate de calificare în meseria aleasă de tine</li>
          <li>
            certificarea acreditată a competențelor profesionale pe care le-ai
            dobândit anterior (in familie, practică etc.)
          </li>
          <li>cursuri autorizate pentru Comunicarea în limba engleză</li>
          <li>
            cursuri autorizate pentru dezvoltarea de Competențe antreprenoriale
          </li>
          <li>microgrant (25.000 euro) pentru demararea afacerii tale!</li>
        </ul>
      </div>
      {/* COL3 */}
      <div className="col-lg-4 projectsPage2-thirdCol-text text-center p-3">
        "Educația estea cea mai puternică armă pe care voi o puteți folosi
        pentru a schimba lumea„
        <div className="text-end projectsPage2-thirdCol-name mt-2">
          Nelson Mandela
        </div>
      </div>
      <img
        src={students_classroom}
        alt=""
        className="projectsPage2-img w-100"
      />
    </div>
  );
};

export default ProjectsPage_2;
