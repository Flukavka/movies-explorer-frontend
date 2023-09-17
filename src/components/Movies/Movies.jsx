import "./Movies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <hr className="movies__separator" />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
