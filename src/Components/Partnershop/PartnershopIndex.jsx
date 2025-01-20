import React from "react";
import Partners from "../Home/Partners/Partners";
import Management from "../Home/Management/Management";
import Priority from "../Home/Priority/Priority";
import Partnershop from "./Partnershop";
import Slider from "../About/Slider/Slider";
import partnershopSlider from "../../Assets/partnershopSlider.png";

const PartnershopIndex = () => {
  return (
    <>
      <Slider
        backImg={partnershopSlider}
        currentPage={"Partnership"}
        currentLink={"partnershop"}
      />
      <Partnershop />
      <Priority />
      <Partners />
      <Management />
    </>
  );
};

export default PartnershopIndex;
