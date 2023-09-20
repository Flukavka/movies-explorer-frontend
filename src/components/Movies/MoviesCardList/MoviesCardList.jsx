import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesShowButton from "../MoviesShowButton/MoviesShowButton";
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const location = useLocation();
  const movies = [
    {
      _id: 1,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая жертву",
      timing: 77,
      saved: true,
    },
    {
      _id: 2,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая жертву",
      timing: 95,
      saved: true,
    },
    {
      _id: 3,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая жертву",
      timing: 77,
      saved: true,
    },
    {
      _id: 4,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая белку",
      timing: 95,
      saved: false,
    },
    {
      _id: 5,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая крота",
      timing: 77,
      saved: false,
    },
    {
      _id: 6,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая палку",
      timing: 95,
      saved: false,
    },
    {
      _id: 7,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая камень",
      timing: 77,
      saved: false,
    },
    {
      _id: 8,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая бабку",
      timing: 95,
      saved: false,
    },
    {
      _id: 9,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая репку",
      timing: 95,
      saved: false,
    },
    {
      _id: 10,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be04222-0b0d-4fee-b0ec-0f7e2d8a6b37/1920x",
      title: "Изображая мышку",
      timing: 77,
      saved: false,
    },
  ];

  return (
    <section className="movies-cards">
      <ul className="movies-card-list">
        {(location.pathname === "/movies" &&
          movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))) ||
          (location.pathname === "/saved-movies" &&
            movies.map(
              (movie) =>
                movie.saved === true && (
                  <MoviesCard key={movie._id} movie={movie} />
                )
            ))}
      </ul>

      {location.pathname === "/movies" && <MoviesShowButton />}
    </section>
  );
}

export default MoviesCardList;
