import React, { useState, useEffect } from "react";
import NavigationBar from "../navigationBar/navigationBar";
import HeroPage from "./heroSection";
import ProjectSection from "./projectSection";
import HP_AboutUs from "./aboutUs";
import Team_And_Testimonials from "./team_and_testimonials";
import Footer from "../footer/footer";

import "./css/homePage.css";

const HomePage = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [nrOfSlides, setNrOfSlides] = useState(1);

  // USE EFFECT used for taking the size of screen
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // USE EFFECT used for changing the state of nr of slides
  useEffect(() => {
    if (dimensions.width < 400) {
      setNrOfSlides(1);
    }
    if (dimensions.width >= 400) {
      setNrOfSlides(1.75);
    }
    if (dimensions.width >= 576) {
      setNrOfSlides(3);
    }
    if (dimensions.width >= 768) {
      setNrOfSlides(3);
    }
    if (dimensions.width >= 992) {
      setNrOfSlides(5);
    }
    if (dimensions.width >= 1200) {
      setNrOfSlides(5);
    }
    if (dimensions.width >= 1400) {
      setNrOfSlides(5);
    }
  }, [dimensions]);

  return (
    <div className="container-lg p-0 homePageContainer">
      <section className="one">
        <NavigationBar />
        <HeroPage />
      </section>
      <section className="two">{<ProjectSection />}</section>
      <section className="three">{<HP_AboutUs />}</section>
      <section className="four">
        <Team_And_Testimonials slides={nrOfSlides} />
      </section>
      <section className="four">{<Footer />}</section>
    </div>
  );
};

export default HomePage;
