import React from "react";

import "./css/coursesMainPage.css";

import english_Flag from "../../images/courses/english_Flag.png";
import french_Flag from "../../images/courses/french_Flag.png";
import german_Flag from "../../images/courses/german_Flag.png";
import italian_Flag from "../../images/courses/italian_Flag.png";

const courses = [
  {
    name: "Limba Engleză",
    price: 500,
    image: "aaa",
    duration: 30,
    structure: 47,
    language: "English",
    instructor: "Codruța Acsinia",
    description: "",
  },
  {
    name: "Limba Franceză",
    price: 450,
    image: "aaa",
    duration: 25,
    structure: 40,
    language: "French",
    instructor: "Omlette Baguette",
    description: "",
  },
  {
    name: "Limba Germană",
    price: 400,
    image: "aaa",
    duration: 32,
    structure: 50,
    language: "German",
    instructor: "Bastian Schweinsteiger",
    description: "",
  },
  {
    name: "Limba Italiană",
    price: 300,
    image: "aaa",
    duration: 22,
    structure: 31,
    language: "Italian",
    instructor: "Francesco Totti",
    description: "",
  },
];

const CoursesMainPage = () => {
  const flags = [english_Flag, french_Flag, german_Flag, italian_Flag];

  return (
    <div className="p-5 coursesMainPage-mainDiv">
      <div className="row m-0">
        {courses.map((course, idx) => (
          <div
            key={`${course.name}`}
            className="col-4 p-4 coursesMainPage-courseBox"
          >
            {/* <div className="coursesMainPage-courseBoxBg p-4"> */}
            <div className="coursesMainPage-course">
              <div className="m-0 p-0">
                <img src={flags[idx]} alt="" />
              </div>
              <p className="text-center my-2">{course.name}</p>
              <div className="pos-r-sbc p-3">
                <div className="coursesMainPage-price">{course.price} lei</div>
                <i class="fa-solid fa-circle-chevron-right coursesMainPage-goto"></i>
              </div>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesMainPage;
