import "./MoviesCardList.css";
import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {
  CARDS_SIZES_DESKTOP,
  CARDS_SIZES_TABLET,
  CARDS_SIZES_MOBILE,
} from "../../utils/constants";

const MoviesCardList = ({
  cards,
  buttonMore,
  onMovieSave,
  onMovieDelete,
  savedMovies,
  isLoading,
  isSavedMovies,
  isError,
  isNotFound,
}) => {
  const [shownMovies, setShownMovies] = useState(0);

  useEffect(() => {
    const handleResizeDesktop = () => {
      if (window.innerWidth >= 1280) {
        setShownMovies(16);
      } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
        setShownMovies(12);
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setShownMovies(8);
      } else {
        setShownMovies(5);
      }
    };
    handleResizeDesktop();
  }, []);

  function handleShowMoreCards() {
    if (window.innerWidth >= 1280) {
      setShownMovies(shownMovies + CARDS_SIZES_DESKTOP);
    } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
      setShownMovies(shownMovies + CARDS_SIZES_TABLET);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      setShownMovies(shownMovies + CARDS_SIZES_MOBILE);
    } else {
      setShownMovies(shownMovies + CARDS_SIZES_MOBILE);
    }
  }

  function handleSavedStatus(savedMovies, card) {
    return savedMovies.find(
      (savedMovies) => savedMovies.movieId === (card.id || card.movieId)
    );
  }

  return (
    <section className="movies-cards">
      {isLoading && cards.length === 0 && <Preloader />}
      {!isLoading && isNotFound && (
        <p className="movies-cards__search-error">Ничего не найдено.</p>
      )}
      {!isLoading && isError && (
        <p className="movies-cards__search-error">
          Во&nbsp;время запроса произошла ошибка. Возможно, проблема
          с&nbsp;соединением или сервер недоступен. Подождите немного
          и&nbsp;попробуйте ещё раз.
        </p>
      )}
      {!isLoading && !isError && !isNotFound && (
        <>
          <ul className="movies-cards__list">
            {cards.slice(0, shownMovies).map((card) => (
              <MoviesCard
                key={card.id || card.movieId}
                isSaved={handleSavedStatus(savedMovies, card)}
                card={card}
                cards={cards}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
                isSavedMovies={isSavedMovies}
                savedMovies={savedMovies}
              />
            ))}
          </ul>
          {cards.length > shownMovies && (
            <div className="movies-cards__button-container">
              {buttonMore && (
                <button
                  onClick={handleShowMoreCards}
                  className="movies-cards__button"
                  type="button"
                  name="button-more"
                >
                  Ещё
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
