import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavAuth from "../NavAuth/NavAuth";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? "header__auth" : ""}`}>
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип Movies Explorer"
        />
      </Link>
      {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
};

export default Header;
