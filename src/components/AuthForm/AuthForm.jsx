import React from "react";
import "./AuthForm.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm(props) {
  const { pathname } = useLocation();

  return (
    <>
      <main className="auth">
        <section className="auth__section">
          <form className="auth__form" onSubmit={props.onSubmit}>
            <Link to="/" className="auth__form-logo">
              <img
                className="auth__logo"
                src={logo}
                alt="Иконка главной страницы"
              />
            </Link>
            <h1 className="auth__form-title">{props.title}</h1>
            {props.nameInput}
            <div className="auth__form-item">
              <label className="auth__form-item-text">E-mail</label>
              <input
                className="auth__input"
                onChange={props.onEmailChange}
                placeholder="Email"
                name="email"
                type="email"
                value={props.email || ""}
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
                value={props.password || ""}
                minLength={8}
                maxLength={64}
                required
                autoComplete="off"
              ></input>
              <span className="auth__error">{props.error}</span>
            </div>
            <button
              className={`auth__submit-button ${
                pathname === "/signin" && "auth__submit-button_signin"
              } ${props.isValid ? "" : "auth__submit-button_disabled"}`}
              type="submit"
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
        </section>
      </main>
    </>
  );
}

export default AuthForm;
