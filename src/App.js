import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <MainSection />
    </React.Fragment>
  );
};

export default App;
