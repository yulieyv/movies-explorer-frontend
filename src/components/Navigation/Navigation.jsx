import React from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  const location = useLocation();
  const [isOpenNavMenu, setIsOpenNavMenu] = React.useState(false);

  function togglePopupMenu() {
    setIsOpenNavMenu(!isOpenNavMenu);
  }

  return (
    <nav className="navigation">
      <div className="navigation__movies">
        <NavLink
          to="/movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
        >
          Сохраненные фильмы
        </NavLink>
        {isOpenNavMenu ? (
          <button
            type="button"
            aria-label="Открыть меню"
            className={`${
              !isOpenNavMenu
                ? 'navigation__btn-burger'
                : `navigation__btn-burger navigation__btn-close`
            } ${
              location.pathname === '/'
                ? `navigation__btn-burger`
                : `navigation__btn-burger navigation__btn-burger_dark`
            }`}
            onClick={togglePopupMenu}
          ></button>
        ) : (
          <BurgerMenu loggedIn={false} />
        )}
      </div>

      <NavLink
        to="/profile"
        className="navigation__link navigation__link_type_profile"
        activeClassName="navigation__link_active"
      >
        Аккаунт
      </NavLink>
    </nav>
  );
}

export default Navigation;
