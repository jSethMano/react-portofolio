import React from "react";

import SectionsWrapper from "../wrapper/SectionsWrapper";

import beMyGenieLogo from "../../assets/content-section/be-my-genie.png";
import secretGardenLogo from "../../assets/content-section/secret-garden.png";
import virtualizeLogo from "../../assets/content-section/virtualize.png";
import thoughtWiserLogo from "../../assets/content-section/thought-wiser.png";
import quokkaLogo from "../../assets/content-section/quokka.png";
import sankiyapaLogo from "../../assets/content-section/sankiyapa.png";

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
  <div>
    <img src={content.logoImg} alt="Logo Design"></img>
  </div>
));

const LogoDesignSection = () => {
  return (
    <SectionsWrapper>
      <h1>logo designs</h1>
      {logoSectionContent}
    </SectionsWrapper>
  );
};

export default LogoDesignSection;
