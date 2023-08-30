import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  const { pathname } = useLocation();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
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
              ? 'navigation__link_active'
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
              ? 'navigation__link_active'
              : ''
          }`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <Link
        to="/profile"
        className="navigation__link navigation__link_type_profile"
      >
        Аккаунт
      </Link>
      <button
        type="button"
        aria-label="Открыть меню"
        className={`navigation__menu-button ${
          pathname === '/' 
            && 'navigation__menu-button_light'
        }`}
        onClick={handleOpenMenu}
      >
      </button>
      {isOpenMenu && <BurgerMenu handleCloseMenu={handleCloseMenu} />}
    </nav>
  );
}

export default Navigation;
