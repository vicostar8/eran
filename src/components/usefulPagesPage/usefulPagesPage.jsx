import React, { useEffect, useState } from "react";
import LegislativePage from "./legislativePage";
import CertificationsPage from "./certificationsPage";
import ImageToggled from "./imageToggled";

import "./css/usefulPagesPage.css";

const UsefulPagesPage = () => {
  const [imageZoomed, setImageZoomed] = useState(false);
  const [imgToDisplay, setImgToDisplay] = useState("");

  const toggleImageZoom = (imgPressed) => {
    setImageZoomed((prevImageZoomed) => !prevImageZoomed);
    setImgToDisplay(imgPressed);
  };

  const reset = () => {
    setImageZoomed(false);
    setImgToDisplay("");
  };

  // useEffect(() => {}, [imageZoomed]);

  return (
    <div className="usefulPages-mainDiv">
      {imageZoomed && <ImageToggled image={imgToDisplay} reset={reset} />}
      <LegislativePage />
      <CertificationsPage toggleImageZoom={toggleImageZoom} />
    </div>
  );
};

export default UsefulPagesPage;
