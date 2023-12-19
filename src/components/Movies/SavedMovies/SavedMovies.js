import React, { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../../Footer/Footer";
import SearchForm from "../../Movies/SearchForm/SearchForm";
import Header from "../../Header/Header";
import {
  filterMovies,
  filterDurationMovies,
} from "../../../utils/configFunctions";

function SavedMovies({ loggedIn, onDeleteCard, savedMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setisShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const moviesFilmList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isShortMovies ? filterDurationMovies(moviesFilmList) : moviesFilmList
    );
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  function handleToggleShortMovies() {
    setisShortMovies(!isShortMovies);
  }

  function setSearchQueryValue(query) {
    setSearchQuery(query);
  }

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onFilterMovies={handleToggleShortMovies}
        setSearchQueryValue={setSearchQueryValue}
      />
      <MoviesCardList
        cards={filteredMovies}
        savedMovies={savedMovies}
        isSavedFilms={true}
        onDeleteCard={onDeleteCard}
        isNotFound={isNotFound}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
