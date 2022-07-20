import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <MainSection />
      <Footer />
    </React.Fragment>
  );
};

export default App;
