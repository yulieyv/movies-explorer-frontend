import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useForm from '../../hooks/useForm';

function Login(props) {
  const email = useForm('');
  const password = useForm('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(password.values, email.values);
  }

  return (
    <>
      <AuthForm
        onEmailChange={email.handleChange}
        onPasswordChange={password.handleChange}
        email={email.values}
        password={password.values}
        onSubmit={handleSubmit}
        title="Рады видеть!"
        action="Войти"
        question="Ещё не зарегистрированы?"
        answer="Регистрация"
        path="/sign-up"
      />
    </>
  );
}

export default Login;
