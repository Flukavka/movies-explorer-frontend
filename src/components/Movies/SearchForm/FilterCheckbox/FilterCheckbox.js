import React, { useEffect } from "react"
import "./FilterCheckbox.css"

function FilterCheckbox({ onFilterMovies, isShortMovies, query, setSearchQueryValue }) {

  // Перезаписывает в локал сторадже значение query
  useEffect(() => {
    if (query) {
      setSearchQueryValue(query);
      localStorage.setItem("movieSearch", query);
    }
  }, [isShortMovies]);

  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortMovies}
      ></input>
      <span className="filter__checkbox-title">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox
