import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="checkbox" htmlFor="checkbox-input">
        <input
          className="checkbox__input"
          type="checkbox"
          id="checkbox-input"
        ></input>
        <span className="checkbox__inner"></span>
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
