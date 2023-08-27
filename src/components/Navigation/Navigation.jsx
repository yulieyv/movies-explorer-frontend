import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  const { pathname } = useLocation();
  const [isOpenNavMenu, setIsOpenNavMenu] = React.useState(false);
  function togglePopupMenu() {
    setIsOpenNavMenu(!isOpenNavMenu);
  }

  return (
    <nav className="navigation">
      <div className="navigation__movies">
        <Link
          to="/movies"
          className={`navigation__link ${
            pathname === '/movies' ||
            pathname === '/saved-movies' ||
            pathname === '/profile'
              ? 'navigation__movies_active'
              : ''
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`navigation__link ${
            pathname === '/movies' ||
            pathname === '/saved-movies' ||
            pathname === '/profile'
              ? 'navigation__movies_active'
              : ''
          }`}
        >
          Сохранённые фильмы
        </Link>
        {isOpenNavMenu ? (
          <button
            type="button"
            aria-label="Открыть меню"
            className={`${
              !isOpenNavMenu
                ? 'navigation__burger'
                : `navigation__burger navigation__close-button`
            } ${
              pathname === '/'
                ? 'navigation__burger'
                : `navigation__burger navigation__close-button`
            }`}
            onClick={togglePopupMenu}
          ></button>
        ) : (
          <BurgerMenu loggedIn={false} />
        )}
      </div>

      <Link
        to="/profile"
        className="navigation__link navigation__link_type_profile"
      >
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;
