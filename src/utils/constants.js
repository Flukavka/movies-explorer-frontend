const ERROR_TEXT_SERVER =
  "Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
const ERROR_TEXT_NOT_FOUND = "Ничего не найдено";
const SEARCH_ERROR_TEXT = "Нужно ввести ключевое слово";

// Регулярное выражение для проверки email
const EMAIL_REGEX = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}";

// Константы для отображения фильмов на странице,
// по клику на кнопку 'Eще'
const LIST_MOVIES_DESKTOP = 3;
const LIST_MOVIES_TABLET = 2;
const LIST_MOVIES_MOBIL = 2;

const MAX_SHORT_MOVIE_DURATION = 40;
const MAX_MOVIE_DURATION = 60;

export {
  ERROR_TEXT_SERVER,
  ERROR_TEXT_NOT_FOUND,
  SEARCH_ERROR_TEXT,
  LIST_MOVIES_DESKTOP,
  LIST_MOVIES_TABLET,
  LIST_MOVIES_MOBIL,
  EMAIL_REGEX,
  MAX_SHORT_MOVIE_DURATION,
  MAX_MOVIE_DURATION
};