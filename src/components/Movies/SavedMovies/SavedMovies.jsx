import "./SavedMovies.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header />
      <main className="movies movies-saved">
        <div className="movies__wrapper">
          <SearchForm />
          <MoviesCardList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
