import React from "react";

import SectionsWrapper from "../wrapper/SectionsWrapper";

import oneDreamWebsite from "../../assets/web-section/one-dream.png";
import cryptoAPIWebsite from "../../assets/web-section/crypto-api.png";
import reactNewsWebsite from "../../assets/web-section/react-news.png";

const WEBSITE_ARRAY = [
  {
    websiteTitle: "Landing page for a talent agency",
    websiteDesc:
      "The goal is to create an interface design which showcases the company’s goal and vision.",
    websiteImg: oneDreamWebsite,
  },
  {
    websiteTitle: "Landing page for a talent agency",
    websiteDesc:
      "The goal is to create an interface design which showcases the company’s goal and vision.",
    websiteImg: cryptoAPIWebsite,
  },
  {
    websiteTitle: "Landing page for a talent agency",
    websiteDesc:
      "The goal is to create an interface design which showcases the company’s goal and vision.",
    websiteImg: reactNewsWebsite,
  },
];

const websitesSection = WEBSITE_ARRAY.map((content) => (
  <div>
    <img src={content.websiteImg} alt="Website Designs"></img>
    <h1>{content.websiteTitle}</h1>
    <p>{content.websiteDesc}</p>
    <button>View site</button>
  </div>
));

const WebsiteDesignSection = () => {
  return (
    <SectionsWrapper>
      <h1>website designs</h1>
      {websitesSection}
    </SectionsWrapper>
  );
};

export default WebsiteDesignSection;
