import React from "react";

const AboutUs_Icon = ({ icon, text }) => {
  return (
    <div className="col-12 col-sm-6 m-0 p-0 d-flex">
      <div className="col-1 homePage-aboutUs-iconDiv pos-c-cc">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <div className="col-11 homePage-aboutUs-paragraph px-2 pos-r-sc">
        {text}
      </div>
    </div>
  );
};

export default AboutUs_Icon;
