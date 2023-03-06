import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/homePage/homePage";
import NavigationBar from "./components/navigationBar/navigationBar";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import TranslationPage from "./components/translationPage/translationPage";
import ExamsPage from "./components/examsPage/examsPage";

import "./App.css";

function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [nrOfSlides, setNrOfSlides] = useState(1);

  // USE EFFECT used for taking the size of screen
  useEffect(() => {
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

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return (
    <div className="container-lg p-0 appDiv">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage nrOfSlides={nrOfSlides} />} />
        <Route path="despre-noi" element={<h1>Despre noi</h1>} />
        <Route path="pagini-utile" element={<h1>Pagini utile</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/traduceri"
          element={<TranslationPage screenWidth={dimensions.width} />}
        />
        <Route path="/examene" element={<ExamsPage />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
