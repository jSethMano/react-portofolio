import React from "react";
import image from "../assets/hero-section/self-image.png";
import ButtonWrapper from "./wrapper/ButtonWrapper";

import styles from "./styles/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <main className={styles["hero-container"]}>
      <div className={styles["text-wrapper"]}>
        <h1>ui/ux designer, front-end developer</h1>
      </div>

      <div className={styles["image-wrapper"]}>
        <img src={image} alt="Side facing men" width="100PX"></img>
        <ButtonWrapper>
          <span>@</span> Joshua Seth Maño
        </ButtonWrapper>
      </div>
    </main>
  );
};

export default HeroSection;
