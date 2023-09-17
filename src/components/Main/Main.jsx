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
    <main>
      <Header />
      <Promo />
      <Navigation />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
