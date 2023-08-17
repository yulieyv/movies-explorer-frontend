import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <>
      <AuthForm
        title="Добро пожаловать!"
        action="Зарегистрироваться"
        question="Уже зарегистрированы?"
        answer="Войти"
        path="/sign-in"
        items={
          <>
            <label className="auth__item">
              <p className="auth__item-text">Имя</p>
              <input
                className="auth__input"
                placeholder="Имя"
                name="name"
                type="name"
                required
                autoComplete="off"
              ></input>
              <p className="auth__error">Что-то пошло не так...</p>
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

export default Register;
