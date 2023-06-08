import React from "react";

import "./css/certificationsPage.css";

import cert_1 from "../../images/aboutUsPage/certifications/cert_1.png";
import cert_2 from "../../images/aboutUsPage/certifications/cert_2.png";
import cert_3 from "../../images/aboutUsPage/certifications/cert_3.png";
import cert_4 from "../../images/aboutUsPage/certifications/cert_4.png";
import cert_5 from "../../images/aboutUsPage/certifications/cert_5.png";
import cert_6 from "../../images/aboutUsPage/certifications/cert_6.png";
import cert_7 from "../../images/aboutUsPage/certifications/cert_7.png";
import cert_8 from "../../images/aboutUsPage/certifications/cert_8.png";
import cert_9 from "../../images/aboutUsPage/certifications/cert_9.png";
import cert_10 from "../../images/aboutUsPage/certifications/cert_10.png";
import cert_11 from "../../images/aboutUsPage/certifications/cert_11.png";

const certs = [
  cert_1,
  cert_2,
  cert_3,
  cert_4,
  cert_5,
  cert_6,
  cert_7,
  cert_8,
  cert_9,
  cert_10,
  cert_11,
];

const CertificationsPage = ({ toggleImageZoom }) => {
  return (
    <div className="row mx-0 my-5 aboutUs-certifications-mainDiv">
      <h1 className="aboutUs-certifications-title my-3 text-center">
        CERTIFICĂRI ȘI AUTORIZĂRI
      </h1>
      <p className="aboutUs-certifications-text text-center my-4 fs-5">
        Centrul nostru a obținut o serie de certificări importante, întregul
        proces de traducere desfășurându-se în conformitate cu acestea:{" "}
        <b>
          SR EN ISO 14001:2015, SR EN ISO 9001:2015, SR ISO 17100:2015, NATO
          AQAP 2131
        </b>
      </p>

      {certs.map((c, idx) => (
        <div key={`cert_${idx}`} className="col-md-6 col-lg-3 p-4">
          <div className="h-100 aboutUs-certifications-card pos-c-cc">
            <img
              src={c}
              alt=""
              className="h-100 w-100"
              onClick={() => toggleImageZoom(c)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsPage;
