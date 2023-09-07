import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register(props) {
  const { pathname } = useLocation();
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values);
  }

  if (props.loggedIn) {
    return <Navigate to="/movies" replace />;
  }
  return (
    <>
      <AuthForm
        nameInput={
          <>
            <div
              className={`${
                pathname === "/signup"
                  ? "auth__form-item"
                  : "auth__form-item auth__form-item_invisible"
              }`}
            >
              <label className="auth__form-item-text">Имя</label>
              <input
                className="auth__input"
                onChange={handleChange}
                placeholder="Имя"
                name="name"
                type="text"
                value={values.name || ""}
                minLength={2}
                maxLength={30}
                required
                autoComplete="off"
                disabled={isValid ? true : false}
              ></input>
            </div>
          </>
        }
        loggedIn={props.loggedIn}
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        onSubmit={handleSubmit}
        email={values.email}
        password={values.password}
        error={errors.name || errors.email || errors.password}
        isValid={isValid}
        title="Добро пожаловать!"
        action="Зарегистрироваться"
        question="Уже зарегистрированы?"
        answer="Войти"
        path="/signin"
      />
    </>
  );
}

export default Register;
