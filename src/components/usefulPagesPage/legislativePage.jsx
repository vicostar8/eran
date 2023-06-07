import React from "react";
import { Link } from "react-router-dom";

const LegislativePage = () => {
  return (
    <div className="row mx-0 mb-3">
      <h1 className="my-3 text-center">LEGISLAȚIE</h1>
      <div className="col-md-12 col-lg-4 p-3">
        <div className="h-100 usefulPages-legislative-card pos-c-sbc p-4">
          <p className="usefulPages-legislative-title">Legea Traducătorului</p>
          <p className="usefulPages-legislative-text">
            LEGE nr. 178 din 4 noiembrie 1997 pentru autorizarea și plata
            interpreților și traducătorilor folosiți de Consiliul Superior al
            Magistraturii, de Ministerul Justiției, Parchetul de pe lângă Înalta
            Curte de Casație și Justiție, Direcția Națională Anticorupție, de
            organele de urmărire penală, de instanțele judecătorești, de
            birourile notarilor publici, de avocați și de executori
            judecătorești
          </p>
          <Link
            to="https://legislatie.just.ro/Public/DetaliiDocument/11944"
            target="_blank"
          >
            <button type="button" className="usefulPages-legislative-button">
              Mai mult
            </button>
          </Link>
        </div>
      </div>
      {/* LEGISLATIVE-MIDDLE */}
      <div className="col-md-12 col-lg-4 p-3">
        <div className="h-100 usefulPages-legislative-card pos-c-sbc p-4">
          <p className="usefulPages-legislative-title">
            Noul Regulament General de Protecția Datelor
          </p>
          <p className="usefulPages-legislative-text">
            În data de 4 mai 2016 au fost publicate în Jurnalul Oficial al
            Uniunii Europene cele două acte normative care compun pachetul
            legislativ privind protecţia datelor la nivelul Uniunii Europene.
          </p>
          <Link
            to="https://www.dataprotection.ro/?page=noua%20_pagina_regulamentul_GDPR"
            target="_blank"
          >
            <button type="button" className="usefulPages-legislative-button">
              Mai mult
            </button>
          </Link>
        </div>
      </div>
      {/* LEGISLATIVE-RIGHT */}
      <div className="col-md-12 col-lg-4 p-3">
        <div className="h-100 usefulPages-legislative-card pos-c-sbc p-4">
          <p className="usefulPages-legislative-title">
            ORDIN nr. 4.341/27 mai 2020
          </p>
          <p className="usefulPages-legislative-text">
            Privind aprobarea Metodologiei pentru echivalarea/recunoaşterea
            nivelurilor de competenţă din cadrul probelor de evaluare a
            competenţelor lingvistice şi digitale - examenul de bacalaureat
            naţional 2020.
          </p>
          <Link
            to="https://www.edu.ro/sites/default/files/_fi%C8%99iere/Legislatie/2020/ordin%20nr.%204341_27.05.2020%20metodologie%20echivalare%20recunoastere%20niveluri%20competenta%20probe%20evaluare%20competente%20lingvistice%20si%20digitale.pdf"
            target="_blank"
          >
            <button type="button" className="usefulPages-legislative-button">
              Mai mult
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegislativePage;
