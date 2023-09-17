import "./MoviesCard.css";

function MoviesCard({ movie, handleMovieSave }) {
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
      <button className="card__button card__button-save">Сохранить</button>
      <button className="card__button card__button-saved card__button-saved_display_none"></button>
      <div className="card__description">
        <h2 className="card__title">{movie.title}</h2>
        <span className="card__timing">{timing}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
