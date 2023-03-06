import React from "react";
import ExamCard from "./examCard";

import "./css/examsPage.css";

const ExamsPage = () => {
  const courses = [
    {
      shortTitle: "IELTS",
      title: "International English Language Testing System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "Cambridge",
      title: "Cambridge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "ECL",
      title:
        "European Consortium for the Certificate of Attainment if Modern Languages",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "APTIS",
      title: "APTIS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "TOEFL",
      title: "Test of English as a Foreign Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "SAT",
      title: "The Scholastic Aptitude Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "ACT",
      title: "American College Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "GRE",
      title: "Graduate Record Examination",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
    {
      shortTitle: "GMAT",
      title: "Graduate Management Admission Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
    },
  ];

  return (
    <div className="exam-mainDiv">
      <p className="exam-mainDiv-Title p-0 text-center">
        Alege examenul care ți se potrivește
      </p>
      <div className="row m-0 p-2 pos-r-cs">
        {courses.map((course) => (
          <ExamCard key={course.shortTitle} shortTitle={course.shortTitle} />
        ))}
      </div>
    </div>
  );
};

export default ExamsPage;
