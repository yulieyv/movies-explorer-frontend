import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <>
      <AuthForm
        title="Рады видеть!"
        action="Войти"
        question="Ещё не зарегистрированы?"
        answer="Регистрация"
        path="/sign-up"
        items={
          <>
            <label className="auth__item">
              <p className="auth__item-text">E-mail</p>
              <input
                className="auth__input"
                placeholder="E-mail"
                name="email"
                type="email"
                required
                autoComplete="off"
              ></input>
              <p className="auth__error">Что-то пошло не так...</p>
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
              <p className="auth__error">Что-то пошло не так...</p>
            </label>
          </>
        }
      />
    </>
  );
}

export default Login;
