import React from "react";

import "./css/imageToggled.css";

const ImageToggled = ({ image, reset }) => {
  return (
    <div className="usefulPages-imgToggled pos-c-cc">
      <i
        className="fa-solid fa-xmark usefulPages-imgToggled-icon"
        onClick={reset}
      ></i>
      <div className="usefulPages-imgToggled-imgDiv pos-c-cc">
        <img src={image} alt="" className="usefulPages-imgToggled-img" />
      </div>
    </div>
  );
};

export default ImageToggled;
