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
  },
  {
    image: talentAgencyUi,
    title: "Landing page for a talent agency",
    desc: "The goal is to create an interface design which showcases the company’s goal and vision.",
  },
  {
    image: creditScoreUi,
    title: "Landing page for a talent agency",
    desc: "The goal is to create an interface design which showcases the company’s goal and vision.",
  },
];

const sectionContent = SECTION_INFO.map((contentData) => (
  <div className={styles["content-container"]}>
    <img alt="UI Design" src={contentData.image}></img>
    <div className={styles["caption-container"]}>
      <h1>{contentData.title}</h1>
      <p>{contentData.desc}</p>
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
