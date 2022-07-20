import React from "react";
import SectionsWrapper from "../wrapper/SectionsWrapper";

import oneDreamUi from "../../assets/mockups/ui/one-dream/one-dream-ui.png";
import talentAgencyUi from "../../assets/mockups/ui/secret-garden/secret-garden-ui.png";
import creditScoreUi from "../../assets/mockups/ui/credit-score/credit-score-ui.png";

import styles from "../styles/UiDesignSection.module.scss";

const SECTION_INFO = [
  {
    image: oneDreamUi,
    title: "Landing page for a talent agency",
    desc: "The goal is to create an interface design which showcases the company’s goal and vision.",
    link: "https://onedreamentertainment.com/",
  },
  {
    image: talentAgencyUi,
    title: "Landing page for a talent agency",
    desc: "The goal is to create an interface design which showcases the company’s goal and vision.",
    link: "https://www.freelancer.ph/contest/graphic-design-for-moblie-app-logo-1923380",
  },
  {
    image: creditScoreUi,
    title: "Landing page for a talent agency",
    desc: "The goal is to create an interface design which showcases the company’s goal and vision.",
    link: "https://www.freelancer.ph/contest/create-app-wireframe-1929011",
  },
];

const sectionContent = SECTION_INFO.map((contentData) => (
  <div className={styles["content-container"]}>
    <img alt="UI Design" src={contentData.image}></img>
    <div className={styles["caption-container"]}>
      <h1>{contentData.title}</h1>
      <p>{contentData.desc}</p>
      <a href="#https://www.freelancer.ph/contest/graphic-design-for-moblie-app-logo-1923380">
        {contentData.link}
      </a>
    </div>
  </div>
));

const UiDesignSection = () => {
  return (
    <SectionsWrapper>
      <h1 className={styles["heading"]}>ui/ux designs</h1>
      {sectionContent}
    </SectionsWrapper>
  );
};

export default UiDesignSection;
