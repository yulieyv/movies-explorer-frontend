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
      />
    </>
  );
}

export default Register;
