import React from 'react';
import './AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm(props) {
  const { pathname } = useLocation();
  return (
    <>
      <section className="auth">
        <form className="auth__form">
          <Link to="/">
            <img
              className="auth__logo"
              src={logo}
              alt="Логотип Movies Explorer"
            />
          </Link>
          <h2 className="auth__title">{props.title}</h2>
          <label
            className={`${
              pathname === '/sign-up' ? 'auth__item' : 'auth__item_invisible'
            }`}
          >
            <p className="auth__item-text">Имя</p>
            <input
              className="auth__input"
              placeholder="Имя"
              name="name"
              type="name"
              required
              minLength={2}
              maxLength={30}
              autoComplete="off"
            ></input>
          </label>
          <label className="auth__item">
            <p className="auth__item-text">E-mail</p>
            <input
              className="auth__input"
              placeholder="Email"
              name="email"
              type="email"
              required
              autoComplete="off"
            ></input>
          </label>
          <label className="auth__item">
            <p className="auth__item-text">Пароль</p>
            <input
              className="auth__input"
              placeholder="Пароль"
              name="password"
              type="password"
              required
              autoComplete="off"
            ></input>
            <p className="auth__error">Что-то пошло не так ...</p>
          </label>

          <button
            className={`auth__submit-button ${
              pathname === '/sign-in' && 'auth__submit-button_signin'
            }`}
            type="submit"
          >
            {props.action}
          </button>
          <div className="auth__sign">
            <p className="auth__sign_title">
              {props.question}
              <Link className="auth__sign_link" to={props.path}>
                &nbsp; {props.answer}
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default AuthForm;
