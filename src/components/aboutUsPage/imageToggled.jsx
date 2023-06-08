import React from "react";

import "./css/imageToggled.css";

const ImageToggled = ({ image, reset }) => {
  return (
    <div className="aboutUs-imgToggled pos-c-cc">
      <i
        className="fa-solid fa-xmark aboutUs-imgToggled-icon"
        onClick={reset}
      ></i>
      <div className="aboutUs-imgToggled-imgDiv pos-c-cc">
        <img src={image} alt="" className="aboutUs-imgToggled-img" />
      </div>
    </div>
  );
};

export default ImageToggled;
