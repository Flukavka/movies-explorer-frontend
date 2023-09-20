import Promo from "./Promo/Promo";
import Navigation from "./Navigation/Navigation";
import AboutProject from "./AboutProject/AboutProject";
import Technologies from "./Technologies/Technologies";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Navigation />
        <AboutProject />
        <Technologies />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
