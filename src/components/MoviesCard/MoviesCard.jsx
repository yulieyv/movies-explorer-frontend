import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  card,
  isSavedMovies,
  onMovieSave,
  onMovieDelete,
  isSaved,
  savedMovies,
}) {
  const { pathname } = useLocation();

  function handleMovieSave() {
    if (isSaved) {
      onMovieDelete(
        savedMovies.find(
          (movie) => movie.movieId === card.id || movie.movieId === card.movieId
        )
      );
    } else {
      onMovieSave(card);
    }
  }

  function handleMovieDelete() {
    onMovieDelete(card);
  }

  function getDurationTime(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <li className="card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={
            isSavedMovies
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
          alt={card.nameRU}
          className="card__image"
        />
      </a>

      <div className="card__container">
        <div className="card__element">
          <h2 className="card__title">{card.nameRU || card.nameEN}</h2>
          <div className="card__buttons">
            {pathname === "/saved-movies" ? (
              <button
                type="button"
                className="card__saved-button card__saved-button_delete"
                onClick={handleMovieDelete}
              />
            ) : (
              <button
                type="button"
                className={`card__saved-button card__saved-button${
                  isSaved ? "_active" : "_inactive"
                }`}
                onClick={handleMovieSave}
              />
            )}
          </div>
        </div>
        <p className="card__duration">{getDurationTime(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
