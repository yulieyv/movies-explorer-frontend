import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile' ? (
        <header
          className={`header ${
            !loggedIn || pathname === '/' ? 'header-blue' : 'header-light'
          }`}
        >
          <Link to="/" className="header__link">
            <img
              className="header__logo"
              src={logo}
              alt="Иконка главной страницы"
            />
          </Link>
          {loggedIn ? <Navigation /> : <NavAuth />}
        </header>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
