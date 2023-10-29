import { MAX_SHORT_MOVIE_DURATION, MAX_MOVIE_DURATION } from "./constants";

// Функция проверки ответа сервера
export const handleCheckResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// Аргументы массив с всеми фильмами и строка поисковый запрос
// функция возвращает отфильтрованную выборку фильмов
export function filterMovies(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
    );
  });
  return moviesQuery;
}

// Длительность фильмов
export function filterDurationMovies(movies) {
  return movies.filter((movie) => movie.duration < MAX_SHORT_MOVIE_DURATION);
}

// Функция formatDurationMovies принимает значение длительности duration
// в минутах и конвертирует его в формат часы и минуты
export function formatDurationMovies(duration) {
  const hours = Math.floor(duration / MAX_MOVIE_DURATION);
  const minutes = duration % MAX_MOVIE_DURATION;
  return `${hours}ч${minutes}м`;
}
