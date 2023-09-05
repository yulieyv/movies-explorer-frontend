import "./Movies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";

function Movies({ handleMovieLike, savedMovies, onMovieDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [foundedMovies, setFoundedMovies] = useState([]);

  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  function filterMovies(movies, searchName) {
    const result = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const search = searchName.toLowerCase().trim();
      return movieRu.indexOf(search) !== -1 || movieEn.indexOf(search) !== -1;
    });
    return result;
  }

  function filterMoviesDuration(movies) {
    return movies.filter((movie) => movie.duration <= 52);
  }

  function handleMoviesFilter(movies, searchName, isShort) {
    const moviesList = filterMovies(movies, searchName);
    setInitialMovies(moviesList);
    setFoundedMovies(isShort ? filterMoviesDuration(moviesList) : moviesList);
    localStorage.setItem("movies", JSON.stringify(moviesList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  function handleMoviesSearch(search) {
    localStorage.setItem("movieSearch", search);
    localStorage.setItem("shortMovies", isShortMovies);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleMoviesFilter(movies, search, isShortMovies);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((data) => {
          handleMoviesFilter(data, search, isShortMovies);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterMoviesDuration(initialMovies).length === 0) {
        setFoundedMovies(filterMoviesDuration(initialMovies));
      } else {
        setFoundedMovies(filterMoviesDuration(initialMovies));
      }
    } else {
      setFoundedMovies(initialMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFoundedMovies(filterMoviesDuration(movies));
      } else {
        setFoundedMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (foundedMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [foundedMovies]);

  return (
    <main className="movies">
      <SearchForm
        onMoviesSearch={handleMoviesSearch}
        onMoviesFilter={handleShortMovies}
        isShortMovies={isShortMovies}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        cards={foundedMovies}
        isSavedMovies={false}
        isLoading={isLoading}
        isError={isError}
        isNotFound={isNotFound}
        onMovieSave={handleMovieLike}
        onMovieDelete={onMovieDelete}
        buttonMore={true}
      />
    </main>
  );
}

export default Movies;
