import './BurgerMenu.css';
import { Link, NavLink } from 'react-router-dom';

function BurgerMenu({ handleCloseMenu }) {
  return (
    <div className="burger-menu">
      <div className="burger-menu__container">
        <button
          className="burger-menu__close-button"
          type="button"
          onClick={handleCloseMenu}
        ></button>
        <ul className="burger-menu__list">
          <li className="burger-menu__item burger-menu__item_type_main">
            <Link to="/" className="burger-menu__link">
              Главная
            </Link>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/movies"
              className={`burger-menu__link ${({ isActive }) =>
                isActive && 'active'}`}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/saved-movies"
              className={`burger-menu__link ${({ isActive }) =>
                isActive && 'active'}`}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink
        to="/profile"
        className="burger-menu__link burger-menu__link_type_profile"
      >
        Аккаунт
      </NavLink>
    </div>
  );
}

export default BurgerMenu;
