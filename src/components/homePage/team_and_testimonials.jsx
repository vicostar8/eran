import React from "react";
import Team_Member from "./teamMember";
import HomePage_Testimonial from "./testimonial";

// FOR CAROUSEL
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// END FOR CAROUSEL

import "./css/team_and_testimonials.css";

const Team_And_Testimonials = ({ slides }) => {
  return (
    <div className="team-mainDiv">
      <h1 className="text-center team-header">Echipa noastră</h1>
      <div className="container-lg position-relative overflow-hidden">
        <div className="team-background-abs"></div>
        <Carousel
          plugins={[
            "infinite",
            "centered",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: slides,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 5000,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <i className="fa-solid fa-chevron-left carouselIcon"></i>
                ),
                arrowLeftDisabled: (
                  <i className="fa-solid fa-chevron-left carouselIcon"></i>
                ),
                arrowRight: (
                  <i className="fa-solid fa-chevron-right carouselIcon"></i>
                ),
                arrowRightDisabled: (
                  <i className="fa-solid fa-chevron-right carouselIcon"></i>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
          draggable={false}
        >
          <Team_Member
            lastName="Acsinia"
            firstName="Codruța"
            title="Director"
            imgURL="https://randomuser.me/api/portraits/women/65.jpg"
          />
          <Team_Member
            lastName="Untea"
            firstName="Cristina"
            title="Secretară"
            imgURL="https://randomuser.me/api/portraits/women/88.jpg"
          />
          {/* <Team_Member
            lastName="Grigore"
            firstName="Vasile"
            title="Asistent Director"
            imgURL="https://randomuser.me/api/portraits/men/33.jpg"
          /> */}
          <Team_Member
            lastName="Ursinschi"
            firstName="Lidia"
            title="Asistent Director"
            imgURL="https://randomuser.me/api/portraits/women/33.jpg"
          />
          <Team_Member
            lastName="Chircă"
            firstName="Vlad"
            title="Test test"
            imgURL="https://randomuser.me/api/portraits/men/88.jpg"
          />
          <Team_Member
            lastName="Chircă"
            firstName="Andreea"
            title="Test 123"
            imgURL="https://randomuser.me/api/portraits/women/12.jpg"
          />
        </Carousel>
      </div>
      <h1 className="text-center team-header">Ce zic alții despre noi</h1>
      <div className="container-lg">
        <div className="row m-0 p-0">
          <HomePage_Testimonial
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quis
          dolores! Aliquam molestias quo a natus mollitia amet necessitatibus
          consequatur autem quisquam dolorum veritatis ducimus in, similique
          earum quas. Impedit!"
            signer="Gigi Becali"
          />
          <HomePage_Testimonial
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quis
          dolores! Aliquam molestias quo a natus mollitia amet necessitatibus
          consequatur autem quisquam dolorum veritatis ducimus in, similique
          earum quas. Impedit!"
            signer="Giovanni"
          />
          <HomePage_Testimonial
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quis
          dolores! Aliquam molestias quo a natus mollitia amet necessitatibus
          consequatur autem quisquam dolorum veritatis ducimus in, similique
          earum quas. Impedit!"
            signer="Mircea din Plescăuți"
          />
        </div>
      </div>
    </div>
  );
};

export default Team_And_Testimonials;
