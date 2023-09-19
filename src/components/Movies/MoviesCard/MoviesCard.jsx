import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, handleMovieSave }) {
  const location = useLocation();

  function math() {
    const hours = movie.timing / 60;
    const minuts = movie.timing % 60;
    return Math.trunc(hours) + "ч " + minuts + "м";
  }

  const timing = math(movie.timing);

  return (
    <li className="card">
      <img
        src={movie.image}
        alt={`Фильм ${movie.title}`}
        className="card__image"
      />
      <button
        type="button"
        className={`card__button card__button-save ${
          movie.saved === false ? "" : "card__button-save_display_none"
        }`}
      >
        Сохранить
      </button>

      {location.pathname === "/movies" && (
        <button
          type="button"
          className={`card__button card__button-saved ${
            movie.saved === true ? "" : "card__button-save_display_none"
          }`}
        ></button>
      )}

      {location.pathname === "/saved-movies" && (
        <button
          type="button"
          className={`card__button card__button-delete ${
            movie.saved === true ? "" : "card__button-delete_display_none"
          }`}
        ></button>
      )}

      <div className="card__description">
        <h2 className="card__title">{movie.title}</h2>
        <span className="card__timing">{timing}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
