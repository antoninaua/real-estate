import React from "react";
import Companies from "../Components/Companies/Companies";
import Contact from "../Components/Contact/Contact";
import HeroSection from "../Components/HeroSection/HeroSection";
import Slider from "../Components/Slider/Slider";
import Value from "../Components/Value/Value";
import "../App.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Companies />
      <Slider />
      <Value />
      <Contact />
    </>
  );
};

export default Home;
