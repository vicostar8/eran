import React from "react";

import "./css/clientsPage.css";

import client_1 from "../../images/aboutUsPage/clients/mcdonalds.png";
import client_2 from "../../images/aboutUsPage/clients/airbus.png";
import client_3 from "../../images/aboutUsPage/clients/kfc.png";
import client_4 from "../../images/aboutUsPage/clients/mcdonalds.png";
import client_5 from "../../images/aboutUsPage/clients/airbus.png";
import client_6 from "../../images/aboutUsPage/clients/kfc.png";
import client_7 from "../../images/aboutUsPage/clients/mcdonalds.png";
import client_8 from "../../images/aboutUsPage/clients/airbus.png";
import client_9 from "../../images/aboutUsPage/clients/kfc.png";
import client_10 from "../../images/aboutUsPage/clients/mcdonalds.png";
import client_11 from "../../images/aboutUsPage/clients/kfc.png";
import client_12 from "../../images/aboutUsPage/clients/airbus.png";

const clients = [
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
  client_8,
  client_9,
  client_10,
  client_11,
  client_12,
];

const ClientsPage = () => {
  return (
    <div className="row mx-0 my-5 aboutUs-clients-mainDiv">
      <h1 className="my-3 aboutUs-clients-title text-center">
        CLIENȚI / PARTENERII NOȘTRI
      </h1>
      <p className="aboutUs-clients-text text-center my-4 fs-5">
        De-a lungul anilor am avut oportunitatea de a colabora cu persoane
        fizice, numeroase companii, agenți comerciali și instituții publice.
      </p>
      {clients.map((c, idx) => (
        <div key={`client_${idx}`} className="col-md-4 col-lg-2 p-4">
          <div className="h-100 pos-c-cc">
            <img src={c} alt="" className="w-50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsPage;
