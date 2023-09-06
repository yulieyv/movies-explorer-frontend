import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchLogo from "../../images/search-logo.svg";

function SearchForm({ onMoviesSearch, onMoviesFilter, isShortMovies }) {
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (pathname === "/movies") {
      setSearch(localStorage.getItem("movieSearch"));
    }
  }, [pathname]);

  function handleInputChange(evt) {
    setSearch(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (search !== "") {
      onMoviesSearch(search);
      setIsError(false);
      setErrorText("");
    } else {
      onMoviesSearch(search);
      setIsError(true);
      setErrorText("Запрос не может быть пустым");
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
          value={search || ""}
          onChange={handleInputChange}
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
      {isError && <span className="search-form__error">{errorText}</span>}

      <div className="search-form__toggle">
        <FilterCheckbox
          onMoviesFilter={onMoviesFilter}
          isShortMovies={isShortMovies}
        />
        <p className="search-form__short-films">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
