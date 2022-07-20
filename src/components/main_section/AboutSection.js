import React from "react";
import SectionsWrapper from "../wrapper/SectionsWrapper";

import htmlLogo from "../../assets/main-section/skills-logo/html-logo.png";
import cssLogo from "../../assets/main-section/skills-logo/css-logo.png";
import jsLogo from "../../assets/main-section/skills-logo/js-logo.png";
import reactLogo from "../../assets/main-section/skills-logo/react-logo.png";
import figmaLogo from "../../assets/main-section/skills-logo/figma-logo.png";
import xdLogo from "../../assets/main-section/skills-logo/xd-logo.png";
import aiLogo from "../../assets/main-section/skills-logo/ai-logo.png";
import psLogo from "../../assets/main-section/skills-logo/ps-logo.png";

import styles from "../styles/AboutSection.module.scss";

const AboutSection = () => {
  return (
    <SectionsWrapper>
      <div className={styles["about-section-container"]}>
        <div className={styles["text-container"]}>
          <h1>about me</h1>
          <p>
            Self taught individual who has a skill on creating visual designs
            and will help you create your dream website
          </p>
        </div>

        <div className={styles["logo-container"]}>
          <img src={htmlLogo} alt="HTML Icon"></img>
          <img src={cssLogo} alt="CSS Icon"></img>
          <img src={jsLogo} alt="Javascript Icon"></img>
          <img src={reactLogo} alt="React JS Icon"></img>
          <img src={figmaLogo} alt="Figma Icon"></img>
          <img src={xdLogo} alt="Adobe XD Icon"></img>
          <img src={aiLogo} alt="Adobe Illustrator Icon"></img>
          <img src={psLogo} alt="Adobe Photoshop Icon"></img>
        </div>
      </div>
    </SectionsWrapper>
  );
};

export default AboutSection;
