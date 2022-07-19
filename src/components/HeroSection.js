import React from "react";
import image from "../assets/hero-section/self-image.png";
import ButtonWrapper from "./wrapper/ButtonWrapper";

const HeroSection = () => {
  return (
    <main>
      <h1>ui/ux designer, front-end developer</h1>
      <img src={image} alt="Side facing men" width="100PX"></img>
      <ButtonWrapper>
        <span>@</span> Joshua Seth Maño
      </ButtonWrapper>
    </main>
  );
};

export default HeroSection;
