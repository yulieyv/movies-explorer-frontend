import "./MoviesCard.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, onMovieSave, onMovieDelete, saved, savedMovies }) {
  const { pathname } = useLocation();
  const [savedStatus, setSavedStatus] = useState(false);

  function handleMovieSave() {
    if (saved) {
      onMovieDelete(
        savedMovies.filter((movie) => movie.movieId === card.id)[0]
      );
    } else {
      onMovieSave(card);
      setSavedStatus(true);
    }
  }

  function handleMovieDelete() {
    onMovieDelete(card);
  }

  function getDurationTime(duration) {
    const hour = Math.floor(duration / 60);
    const min = duration % 60;
    return `${hour}ч ${min}м`;
  }

  return (
    <li className="card">
      <img
        src={
          saved ? card.image : `https://api.nomoreparties.co/${card.image.url}`
        }
        alt={card.title}
        className="card__image"
      />
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
                  savedStatus ? "_active" : "_inactive"
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
