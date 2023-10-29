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
  const [isShortMovies, setisShortMovies] = useState(false);
  const [isReqError, setisReqError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  // Функция для фильтрации фильмов, аргументы- массив с фильмами, строка поискового
  // запроса, булевое значение короткометражка или нет
  function handleFilterMovie(movies, query, short) {
    const moviesFilmList = filterMovies(movies, query, short);

    // Если короткометражка (чекбокс true), то запускает функцию фильтрации
    // длительности фильмов
    setFilteredMovies(
      short ? filterDurationMovies(moviesFilmList) : moviesFilmList
    );

    // Сохраняем в локал сторадже массив с всеми фильмами и массив
    // с отфильрованными фильмами
    localStorage.setItem("movies", JSON.stringify(moviesFilmList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  // Функция поиска фильмов, аргумент из SearchForm
  function setSearchQueryValue(query) {

    //сохраняет в сторадже строку поискового запроса
    localStorage.setItem("movieSearch", query);
    //сохраняет в сторадже строку - булевое значение чекбокса
    localStorage.setItem("shortMovies", isShortMovies);


    if (localStorage.getItem("allMovies")) {

      // массив со всеми фильмами
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
    const query = localStorage.getItem("movieSearch"); // поисковый запрос
    const movies = localStorage.getItem("allMovies"); // все фильмы
    if (movies && query) handleFilterMovie(JSON.parse(movies), query, !isShortMovies);
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  // Получение фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
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

  // Получение отфильтрованного массива фильмов
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