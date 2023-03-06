import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-mainDiv pos-c-cc">
      <div className="footer-copyright">
        <i className="fa-regular fa-copyright me-2"></i>Copyright {year} ERAN -
        Center
      </div>
      <div className="footer-confidentials d-lg-flex">
        <div className="m-3 text-center">CONDIȚII DE UTILIZARE</div>
        <div className="m-3 text-center">POLITICA DE CONFIDENŢIALITATE</div>
        <div className="m-3 text-center">SETĂRI DE CONFIDENȚIALITATE</div>
      </div>
      <div className="footer-socialMedia">
        <Link to={`https://www.facebook.com/ERANCentreBrasov`} target="_blank">
          <i className="fa-brands fa-facebook mx-3"></i>
        </Link>
        <Link to={`https://www.instagram.com/erancentre`} target="_blank">
          <i className="fa-brands fa-instagram mx-3"></i>
        </Link>
        <Link to={`https://www.facebook.com/ERANCentreBrasov`} target="_blank">
          <i className="fa-brands fa-tiktok mx-3"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
