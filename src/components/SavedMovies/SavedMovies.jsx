import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";

function SavedMovies({ savedMovies, onMovieDelete }) {
  const [isSearch, setIsSearch] = useState("");
  const [foundedMovies, setFoundedMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  function handleShortMovies() {
    setIsShortMovies(true);
  }
  function handleMoviesSearch(search) {
    setIsSearch(search);
  }

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

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, isSearch);
    setFoundedMovies(
      isShortMovies ? filterMoviesDuration(moviesList) : moviesList
    );
  }, [savedMovies, isShortMovies, isSearch]);

  useEffect(() => {
    if (foundedMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [foundedMovies]);

  return (
    <main className="saved-movies">
      <SearchForm
        onMoviesSearch={handleMoviesSearch}
        onMoviesFilter={handleShortMovies}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        cards={foundedMovies}
        isSavedMovies={true}
        isNotFound={isNotFound}
        onMovieDelete={onMovieDelete}
        buttonMore={true}
      />
    </main>
  );
}

export default SavedMovies;
