import './MoviesCardList.css';
import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ cards, buttonMore }) => {
  const [isLoading, setLoading] = useState(false);

  const handlePreloaderChange = () => {
    setLoading(true);
  };

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        <div className="movies-cards__button-container">
          {buttonMore && (
            <button
              onClick={handlePreloaderChange}
              className="movies-cards__button"
              type="button"
              name="button-more"
            >
              Ещё
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;
