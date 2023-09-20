import "./Movies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <main>
        <section className="movies">
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
