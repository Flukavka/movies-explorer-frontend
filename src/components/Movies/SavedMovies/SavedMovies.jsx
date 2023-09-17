import "./SavedMovies.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header />
      <section className="movies">
        <div className="movies__wrapper">
          <SearchForm />
          <hr className="movies__separator" />
          <MoviesCardList />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
