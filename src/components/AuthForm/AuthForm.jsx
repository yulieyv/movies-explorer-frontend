import React from 'react';
import './AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm(props) {
  const { pathname } = useLocation();

  return (
    <>
      <main className="auth">
        <form className="auth__form">
          <Link to="/" className="auth__form-logo">
            <img
              className="auth__logo"
              src={logo}
              alt="Иконка главной страницы"
            />
          </Link>
          <h1 className="auth__form-title">{props.title}</h1>
          <div
            className={`${
              pathname === '/signup' ? 'auth__form-item' : 'auth__form-item auth__form-item_invisible'
            }`}
          >
            <label className="auth__form-item-text">Имя</label>
            <input
              className="auth__input"
              onChange={props.onNameChange}
              placeholder="Имя"
              name="name"
              type="text"
              value={props.name || ''}
              minLength={2}
              maxLength={30}
              autoComplete="off"
            ></input>
          </div>
          <div className="auth__form-item">
            <label className="auth__form-item-text">E-mail</label>
            <input
              className="auth__input"
              onChange={props.onEmailChange}
              placeholder="Email"
              name="email"
              type="email"
              value={props.email || ''}
              required
              autoComplete="off"
            ></input>
          </div>
          <div className="auth__form-item">
            <label className="auth__form-item-text">Пароль</label>
            <input
              className="auth__input"
              onChange={props.onPasswordChange}
              placeholder="Пароль"
              name="password"
              type="password"
              value={props.password || ''}
              minLength={8}
              maxLength={64}
              required
              autoComplete="off"
            ></input>
            <span className="auth__error">Что-то пошло не так...</span>
          </div>
          <button
            className={`auth__submit-button ${
              pathname === '/signin' && 'auth__submit-button_signin'
            }`}
            type="submit"
            onSubmit={props.onSubmit}
            onClick={props.onClick}
          >
            {props.action}
          </button>

          <div className="auth__sign">
            <p className="auth__sign-title">
              {props.question}
              <Link className="auth__sign-link" to={props.path}>
                &nbsp; {props.answer}
              </Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default AuthForm;
