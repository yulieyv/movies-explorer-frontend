import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm(props) {
  return (
    <>
      <section className="auth">
        <form className="auth__form">
          <Link to="/">
            <img
              className="auth__logo"
              src={logo}
              alt="Логотип Movies Explorer"
            />
          </Link>
          <h2 className="auth__title">{props.title}</h2>
          {props.items}
          <button className="auth__submit-button" type="submit">
            {props.action}
          </button>
          <div className="auth__sign">
            <p className="auth__sign_title">
              {props.question}
              <Link className="auth__sign_link" to={props.path}>
                &nbsp; {props.answer}
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default AuthForm;
