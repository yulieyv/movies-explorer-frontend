import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values);
  }
  return (
    <>
      <AuthForm
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        onSubmit={handleSubmit}
        email={values.email}
        password={values.password}
        error={errors.email || errors.password}
        isValid={isValid}
        title="Рады видеть!"
        action="Войти"
        question="Ещё не зарегистрированы?"
        answer="Регистрация"
        path="/signup"
      />
    </>
  );
}

export default Login;
