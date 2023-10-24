import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import SearchError from "../../SearchError/SearchError";
import {
  ERROR_TEXT_SERVER,
  ERROR_TEXT_NOT_FOUND,
  LIST_MOVIES_DESKTOP,
  LIST_MOVIES_TABLET,
  LIST_MOVIES_MOBIL,
} from "../../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  // Сохраненная карточка фильма из массива сохраненных
  function getSavedMovieFromList(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  // Количество отображаемых карточек с фильмами
  function handleShowFilmsDisplay() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(12);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  // Количество отображаемых карточек на экране, при клике на кнопку Ещё
  function handleShowMoviesClickBtn() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + LIST_MOVIES_DESKTOP);
    } else if (display > 767) {
      setShownMovies(shownMovies + LIST_MOVIES_TABLET);
    } else {
      setShownMovies(shownMovies + LIST_MOVIES_MOBIL);
    }
  }

  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleShowFilmsDisplay);
    }, 500);
  });

  // Эффект для обновления состояния выдачи карточек в том колличестве
  // в котором изначально заданы функцией handleShowFilmsDisplay
  useEffect(() => {
    handleShowFilmsDisplay();
  }, [cards]);

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={ERROR_TEXT_NOT_FOUND} />
      )}
      {isReqError && !isLoading && (
        <SearchError errorText={ERROR_TEXT_SERVER} />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    cards={cards}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    saved={getSavedMovieFromList(savedMovies, card)}
                    savedMovies={savedMovies}
                    isSavedFilms={isSavedFilms}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieFromList(savedMovies, card)}
                    cards={cards}
                    card={card}
                    isSavedFilms={isSavedFilms}
                    handleLikeFilm={handleLikeFilm}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button"
                    onClick={handleShowMoviesClickBtn}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
