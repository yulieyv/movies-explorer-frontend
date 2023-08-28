import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useForm from '../../hooks/useForm';

function Register(props) {
  const name = useForm('');
  const email = useForm('');
  const password = useForm('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(name.values, password.values, email.values);
  }

  return (
    <>
      <AuthForm
        onNameChange={name.handleChange}
        onEmailChange={email.handleChange}
        onPasswordChange={password.handleChange}
        onSubmit={handleSubmit}
        name={name.values}
        email={email.values}
        password={password.values}
        title="Добро пожаловать!"
        action="Зарегистрироваться"
        question="Уже зарегистрированы?"
        answer="Войти"
        path="/sign-in"
      />
    </>
  );
}

export default Register;
