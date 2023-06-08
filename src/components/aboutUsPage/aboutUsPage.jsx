import React, { useEffect, useState } from "react";

import AboutUsTop from "./aboutUsTop";
import CertificationsPage from "./certificationsPage";
import ClientsPage from "./clientsPage";
import ImageToggled from "./imageToggled";

const AboutUsPage = ({ screenWidth }) => {
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
    <div className="aboutUs-mainDiv p-4">
      {imageZoomed && <ImageToggled image={imgToDisplay} reset={reset} />}
      <AboutUsTop screenWidth={screenWidth} />
      {/*  */}
      <CertificationsPage toggleImageZoom={toggleImageZoom} />
      {/*  */}
      <ClientsPage />
      {/*  */}
    </div>
  );
};

export default AboutUsPage;
