import "./FilterCheckbox.css";

function FilterCheckbox({ onMoviesFilter, isShortMovies }) {
  return (
    <>
      <div className="filter-checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          onChange={onMoviesFilter}
          checked={isShortMovies}
        ></input>
      </div>
    </>
  );
}

export default FilterCheckbox;
