// Функция проверки ответа сервера
export const handleCheckResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// Короткометражки
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
  return movies.filter((movie) => movie.duration < 40);
}

// Функция formatDurationMovies принимает значение длительности duration
// в минутах и конвертирует его в формат часы и минуты
export function formatDurationMovies(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч${minutes}м`;
}
