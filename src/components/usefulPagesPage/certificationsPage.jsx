import React from "react";

import "./css/certificationsPage.css";

import cert_1 from "../../images/usefulPage/certifications/cert_1.png";
import cert_2 from "../../images/usefulPage/certifications/cert_2.png";
import cert_3 from "../../images/usefulPage/certifications/cert_3.png";
import cert_4 from "../../images/usefulPage/certifications/cert_4.png";
import cert_5 from "../../images/usefulPage/certifications/cert_5.png";
import cert_6 from "../../images/usefulPage/certifications/cert_6.png";
import cert_7 from "../../images/usefulPage/certifications/cert_7.png";
import cert_8 from "../../images/usefulPage/certifications/cert_8.png";
import cert_9 from "../../images/usefulPage/certifications/cert_9.png";
import cert_10 from "../../images/usefulPage/certifications/cert_10.png";
import cert_11 from "../../images/usefulPage/certifications/cert_11.png";

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
    <div className="row mx-0 m-0">
      <h1 className="my-3 text-center">CERTIFICĂRI ȘI AUTORIZĂRI</h1>

      {/* <img src={cert_1} alt="" /> */}

      {certs.map((c, idx) => (
        <div key={`cert_${idx}`} className="col-md-6 col-lg-3 p-4">
          <div className="h-100 usefulPages-certifications-card pos-c-cc">
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
