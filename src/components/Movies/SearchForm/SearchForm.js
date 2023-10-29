import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox";
import { SEARCH_ERROR_TEXT } from "../../../utils/constants";
import "./SearchForm.css";

function SearchForm({
  setSearchQueryValue,
  onFilterMovies,
  isShortMovies,
}) {
  const location = useLocation();

  // Отслеживание ошибки при запросе
  const [isQueryError, setIsQueryError] = useState(false);

  // Хранение введенного запроса поиска фильмов
  const [query, setQuery] = useState("");

  // Получает значение поискового запроса из локал стораджа
  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  // При сабмите проверяет поисковой запрос, либо выдаёт ошибку,
  // либо запускает функцию поиска фильмов, передавая аргументом поисковой запрос
  // значение строк query
  function setEditUserInfo(event) {
    event.preventDefault();
    if (query.trim().length === 0) { // возвращает строку с вырезанными пробельными символами с её концов
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      setSearchQueryValue(query);
    }
  }

  // Устанавливает значение query, строка инпута поисковика
  function handleQueryInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <section className="search">
      <form className="search__forma" id="form" onSubmit={setEditUserInfo}>
        <input
          className="search__input"
          name="query"
          placeholder="Фильм"
          type="text"
          value={query || ""}
          onChange={handleQueryInputChange}
        ></input>
        <button className="search__button" type="submit">
          Найти
        </button>
        <FilterCheckbox
          isShortMovies={isShortMovies}
          onFilterMovies={onFilterMovies}
          query={query}
          setSearchQueryValue={setSearchQueryValue}
        />
        {isQueryError && (
          <span className="search__form-error">{SEARCH_ERROR_TEXT}</span>
        )}
      </form>
    </section>
  );
}

export default SearchForm;
