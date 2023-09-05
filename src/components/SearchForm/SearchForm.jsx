import "./SearchForm.css";
import React from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchLogo from "../../images/search-logo.svg";

function SearchForm({ onMoviesSearch, onMoviesFilter, isShortMovies }) {
  const { pathname } = useLocation();
  const [searchName, setSearchName] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (pathname === "/movies" && localStorage.getItem("movieSearch")) {
      setSearchName(localStorage.getItem("movieSearch"));
    }
  }, [pathname]);

  React.useEffect(() => {
    setIsError("");
  }, [searchName]);

  function handleChange(evt) {
    setSearchName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchName.trim().length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      onMoviesSearch(searchName);
    }
  }

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          name="movie"
          id="movie"
          value={searchName || ""}
          onChange={handleChange}
          required
        />
        <button type="submit" className="search-form__button">
          <img
            className="search-form__logo"
            src={searchLogo}
            alt="Логотип поиска: лупа"
          />
        </button>
      </form>
      {isError && (
        <span className="search-form__error">Нужно ввести ключевое слово</span>
      )}

      <form className="search-form__toggle">
        <FilterCheckbox
          onMoviesFilter={onMoviesFilter}
          isShortMovies={isShortMovies}
        />
        <p className="search-form__short-films">Короткометражки</p>
      </form>
    </section>
  );
}

export default SearchForm;
