import React from "react";
import Slider from "./Slider/Slider";
import Fun from "./Fun/Fun";
import Faq from "./Faq/Faq";
import Istory from "./Istory/Istory";
import backImage from "../../Assets/overlay.png";

const About = () => {
  return (
    <>
      <Slider
        backImg={backImage}
        currentPage={"About Us"}
        currentLink={"about"}
      />
      <Fun />
      <Istory />
      <Faq />
    </>
  );
};

export default About;
