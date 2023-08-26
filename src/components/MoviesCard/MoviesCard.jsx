import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const [saved, setSaved] = React.useState(false);

  function handleSavedToogle() {
    setSaved(!saved);
  }

  const { pathname } = useLocation();

  return (
    <li className="card">
      <img src={card.image} alt={card.title} className="card__image" />
      <div className="card__container">
        <div className="card__element">
          <p className="card__title">{card.title}</p>
          <div className="card__button">
            {pathname === '/saved-movies' ? (
              <button
                type="button"
                className="card__saved-button card__saved-button_delete"
              />
            ) : (
              <button
                type="button"
                className={`card__saved-button card__button${
                  saved ? '_active' : '_inactive'
                }`}
                onClick={handleSavedToogle}
              />
            )}
          </div>
        </div>
        <p className="card__duration">{card.duration}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
