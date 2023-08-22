import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {


  return (
    <>
      <section className="profile">
        <form className="profile__form">
          <h3 className="profile__title">Привет, Виталий!</h3>
          <label className="profile__item">
            <p className="profile__item-text">Имя</p>
            <input
              className="profile__input"
              defaultValue="Виталий"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              required
            ></input>
          </label>
          <label className="profile__item">
            <p className="profile__item-text">Email</p>
            <input
              className="profile__input"
              defaultValue="pochta@yandex.ru"
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </label>
          <Link className="profile__sign-link">Редактировать</Link>
          <Link className="profile__sign-link profile__sign-link_exit" to="/">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;
