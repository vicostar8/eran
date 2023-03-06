import React from "react";
import HeroPage from "./heroSection";
import ProjectSection from "./projectSection";
import HP_AboutUs from "./aboutUs";
import Team_And_Testimonials from "./team_and_testimonials";

import "./css/homePage.css";

const HomePage = ({ nrOfSlides }) => {
  return (
    <div className="">
      <section className="one">
        <HeroPage />
      </section>
      <section className="two">{<ProjectSection />}</section>
      <section className="three">{<HP_AboutUs />}</section>
      <section className="four">
        <Team_And_Testimonials slides={nrOfSlides} />
      </section>
    </div>
  );
};

export default HomePage;
