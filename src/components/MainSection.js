import React, { Fragment, useState } from "react";

import Navigation from "./Navigation";

import AboutSection from "./main_section/AboutSection";
import UiDesignSection from "./main_section/UiDesignSection";
import LogoDesignSection from "./main_section/LogoDesignSection";
import WebsiteDesignSection from "./main_section/WebsiteDesignSection";

const MainSection = () => {
  const [shownSection, setShownSection] = useState(<AboutSection />);

  const selectedMenuHandler = (menuValue) => {
    console.log("menuValue is:" + menuValue);
    if (menuValue === "ui") {
      setShownSection(<UiDesignSection />);
    } else if (menuValue === "logo") {
      setShownSection(<LogoDesignSection />);
    } else if (menuValue === "website") {
      setShownSection(<WebsiteDesignSection />);
    } else if (menuValue === "about") {
      setShownSection(<AboutSection />);
    }
  };

  return (
    <Fragment>
      <Navigation selectedMenu={selectedMenuHandler} />
      {shownSection}
    </Fragment>
  );
};

export default MainSection;
