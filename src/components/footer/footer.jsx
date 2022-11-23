import React from "react";

import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer-mainDiv pos-c-cc">
      <div className="footer-copyright">
        <i className="fa-regular fa-copyright me-2"></i>Copyright 2022 ERAN -
        Center
      </div>
      <div className="footer-confidentials d-lg-flex">
        <div className="m-3 text-center">CONDIȚII DE UTILIZARE</div>
        <div className="m-3 text-center">POLITICA DE CONFIDENŢIALITATE</div>
        <div className="m-3 text-center">SETĂRI DE CONFIDENȚIALITATE</div>
      </div>
      <div className="footer-socialMedia">
        <i className="fa-brands fa-facebook mx-3"></i>
        <i className="fa-brands fa-instagram mx-3"></i>
        <i className="fa-brands fa-tiktok mx-3"></i>
      </div>
    </div>
  );
};

export default Footer;
