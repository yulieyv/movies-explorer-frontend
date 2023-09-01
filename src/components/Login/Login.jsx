import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import useForm from "../../hooks/useForm";

function Login(props) {
  const name = useForm("");
  const email = useForm("");
  const password = useForm("");

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister();
  }

  return (
    <>
      <AuthForm
        onNameChange={name.handleChange}
        onEmailChange={email.handleChange}
        onPasswordChange={password.handleChange}
        onSubmit={handleSubmit}
        email={email.values}
        password={password.values}
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
