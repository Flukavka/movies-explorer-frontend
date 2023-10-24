import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import {
  filterMovies,
  filterDurationMovies,
} from "../../utils/configFunctions";
import * as movies from "../../utils/MoviesApi";

function Movies({ loggedIn, savedMovies, handleLikeFilm, onDeleteCard }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialCardsMovies, setInitialCardsMovies] = useState([]);
  const [isShortMovies, setisShortMovies] = useState(false);
  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  // Функция для фильтрации фильмов
  function handleFilterMovie(movies, query, short) {
    const moviesFilmList = filterMovies(movies, query, short);
    setInitialCardsMovies(moviesFilmList);
    setFilteredMovies(
      short ? filterDurationMovies(moviesFilmList) : moviesFilmList
    );
    localStorage.setItem("movies", JSON.stringify(moviesFilmList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  // Функция поиска фильмов
  function setSearchQueryValue(query) {
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", isShortMovies);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMovie(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsSavedFilms) => {
          handleFilterMovie(cardsSavedFilms, query, isShortMovies);
          setisReqError(false);
        })
        .catch((error) => {
          setisReqError(true);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleToggleShortMovies() {
    setisShortMovies(!isShortMovies);
    if (!isShortMovies) {
      const filteredCardsMovies = filterDurationMovies(initialCardsMovies);
      setFilteredMovies(filteredCardsMovies);
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  // Получение фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDurationMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  // Получение короткометражек
  useEffect(() => {
    setisShortMovies(localStorage.getItem("shortMovies") === "true");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      setIsNotFound(filteredMovies.length === 0);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        isShortMovies={isShortMovies}
        setSearchQueryValue={setSearchQueryValue}
        onFilterMovies={handleToggleShortMovies}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        savedMovies={savedMovies}
        isSavedFilms={false}
        isReqError={isReqError}
        isNotFound={isNotFound}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  );
}

export default Movies;
