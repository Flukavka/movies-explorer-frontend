import "./SearchForm.css";
import "./FilterCheckbox/FilterCheckbox";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form name="search" className="search-form__form">
        <input
          className="search-form__input search-form__input_icon"
          type="text"
          required
          placeholder="Фильм"
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>

        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
