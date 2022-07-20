import React from "react";

import SectionsWrapper from "../wrapper/SectionsWrapper";

import beMyGenieLogo from "../../assets/content-section/be-my-genie.png";
import secretGardenLogo from "../../assets/content-section/secret-garden.png";
import virtualizeLogo from "../../assets/content-section/virtualize.png";
import thoughtWiserLogo from "../../assets/content-section/thought-wiser.png";
import quokkaLogo from "../../assets/content-section/quokka.png";
import sankiyapaLogo from "../../assets/content-section/sankiyapa.png";

import styles from "../styles/LogoDesignSection.module.scss";

const LOGO_ARRAY = [
  {
    logoName: "beMyGenie",
    logoImg: beMyGenieLogo,
  },
  {
    logoName: "secretGarden",
    logoImg: secretGardenLogo,
  },
  {
    logoName: "virtualize",
    logoImg: virtualizeLogo,
  },
  {
    logoName: "thoughtWiser",
    logoImg: thoughtWiserLogo,
  },
  {
    logoName: "quokka",
    logoImg: quokkaLogo,
  },
  {
    logoName: "sankiyapa",
    logoImg: sankiyapaLogo,
  },
];

const logoSectionContent = LOGO_ARRAY.map((content) => (
  <div className={styles["img-container"]}>
    <img src={content.logoImg} alt="Logo Design"></img>
  </div>
));

const LogoDesignSection = () => {
  return (
    <SectionsWrapper>
      <h1 className={styles["heading"]}>logo designs</h1>
      <div className={styles["logo-container"]}>{logoSectionContent}</div>
    </SectionsWrapper>
  );
};

export default LogoDesignSection;
