import React, { Component } from "react";
import ExamCard from "./examCard";

import "./css/examsPage.css";

const ExamsPage = () => {
  const courses = [
    {
      shortTitle: "IELTS",
      title: "International English Language Testing System",
      description: `În 1992, statele membre ale Uniunii Europene, prin proiectul Lingua, au înfiinţat un CONSORŢIU cu sediul la Londra. Sarcina acestuia era crearea unui test lingvistic uniform pentru limbile statelor membre ale UE. Astfel, s-a dezvoltat sistemul internaţional de examinare ECL, menit să rezolve problema privind echivalarea şi recunoaşterea certificatelor în fiecare limbă, fără a fi necesar ca acestea să fie validate la nivel naţional. Centrul ERAN procesează înscrieri și organizează examene ECL încă din iunie 2006, când a devenit oficial Centru de Examinare ECL atestat pentru limbile engleză, franceză germană și spaniolă. Astfel, vă asigurăm de tot sprijinul nostru în obținerea unui certificat pentru fiecare dintre aceste limbi străine.`,
      benefits: [
        "Fără teste de gramatică sau traduceri - comunicare cotidiană pe subiecte practice",
        "Posibilitatea de examinare/reexaminare parțială",
        "Utilizarea dicționarului permisă la proba de compunere",
        "Util la efectuarea de studii sau la obţinerea de locuri de muncă în străinătate",
        "Examen profesional în domeniul MEDICINĂ",
        "Taxă de examinare accesibilă",
        "Admitere la liceu, echivalarea probei C la Bacalaureat din 5 limbi",
        "Valabilitate nelimitată",
      ],
      linksArray: [
        {
          linkName: "British - IELTS",
          linkURL: "https://www.britishcouncil.ro/examene/ielts",
        },
      ],
    },
    {
      shortTitle: "Cambridge",
      title: "Cambridge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [],
    },
    {
      shortTitle: "ECL",
      title:
        "European Consortium for the Certificate of Attainment if Modern Languages",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "ECL.ORG",
          linkURL: "https://ecl.org.ro/ro",
        },
      ],
    },
    {
      shortTitle: "APTIS",
      title: "APTIS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [],
    },
    {
      shortTitle: "TOEFL",
      title: "Test of English as a Foreign Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "ETS - TOEFL",
          linkURL: "https://www.ets.org/toefl.html",
        },
        {
          linkName: "Edmerica - TOEFL",
          linkURL: "https://edmerica.ro/admissions-tests/toefl/",
        },
      ],
    },
    {
      shortTitle: "SAT",
      title: "The Scholastic Aptitude Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "SatSuite - SAT",
          linkURL:
            "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests",
        },
        {
          linkName: "Edmerica - SAT",
          linkURL: "https://edmerica.ro/admissions-tests/sat/",
        },
      ],
    },
    {
      shortTitle: "ACT",
      title: "American College Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "ACT.ORG",
          linkURL:
            "https://www.act.org/content/act/en/products-and-services/the-act.html",
        },
      ],
    },
    {
      shortTitle: "GRE",
      title: "Graduate Record Examination",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "ETS.ORG - GRE",
          linkURL:
            "https://www.ets.org/gre/test-takers/general-test/about.html",
        },
        {
          linkName: "Edmerica - GRE",
          linkURL: "https://edmerica.ro/admissions-tests/gre/",
        },
      ],
    },
    {
      shortTitle: "GMAT",
      title: "Graduate Management Admission Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias exercitationem ipsa qui necessitatibus laborum eos doloribus obcaecati optio! Mollitia illum aliquid quod magni necessitatibus nihil itaque nemo rerum quibusdam?",
      benefits: [],
      linksArray: [
        {
          linkName: "MBA - GMAT",
          linkURL: "https://www.mba.com/exams/gmat-exam",
        },
        {
          linkName: "Edmerica - GMAT",
          linkURL: "https://edmerica.ro/admissions-tests/gmat/",
        },
      ],
    },
  ];

  return (
    <div className="exam-mainDiv">
      <p className="exam-mainDiv-Title p-0 text-center">
        Alege examenul care ți se potrivește
      </p>
      <div className="row m-0 p-2 pos-r-cs">
        {courses.map((course) => (
          <ExamCard key={course.shortTitle} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ExamsPage;
