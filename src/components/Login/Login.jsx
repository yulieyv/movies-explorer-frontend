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

      />
    </>
  );
}

export default Login;
