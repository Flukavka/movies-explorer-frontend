import React from "react";
import AboutMe from "../Main/AboutMe/AboutMe";
import AboutProject from "../Main/AboutProject/AboutProject";
import Promo from "../Main/Promo/Promo";
import Portfolio from "./Portfolio/Portfolio";
import Technologies from "./Technologies/Technologies";

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
