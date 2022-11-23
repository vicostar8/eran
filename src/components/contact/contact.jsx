import React from "react";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";
import ContactMap from "./contactMap";

import "./css/contact.css";

const Contact = () => {
  return (
    <div className="row m-0 p-4 contact-mainDiv">
      <div className="col-lg-6 pos-c-sbc">
        <p className="contact-header mb-2 p-0">Lasă-ne un mesaj...</p>
        <ContactForm />
      </div>
      <div className="col-lg-6 contact-rightPanel pos-c-sbc">
        <p className="contact-header m-0 p-0">...sau ne găsești la...</p>
        <div className="">
          <ContactInfo
            icon="fa-location-dot"
            subtitle="Adresa"
            info={["N.D. Cocea 1-3 Brașov România"]}
          />
          <ContactInfo
            icon="fa-envelope-open-text"
            subtitle="Email"
            info={["office@eran.ro"]}
          />
          <ContactInfo
            icon="fa-phone-flip"
            subtitle="Telefon"
            info={["0268 310 161", "0735 532 194", "0723 254 205"]}
          />
        </div>
        <ContactMap />
      </div>
    </div>
  );
};

export default Contact;
