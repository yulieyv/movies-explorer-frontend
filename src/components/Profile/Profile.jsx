import "./Profile.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  const [savedIn, setSavedIn] = useState(false);

  function handleSaveClick() {
    setSavedIn(true);
  }

  return (
    <>
      <main className="profile">
        <section className="profile__section">
          <form className="profile__form">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <div className="profile__item">
              <label className="profile__item-text">Имя</label>
              <input
                className="profile__input"
                defaultValue="Виталий"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                required
              ></input>
            </div>
            <div className="profile__item">
              <label className="profile__item-text">E-mail</label>
              <input
                className="profile__input"
                defaultValue="pochta@yandex.ru"
                type="email"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            {!savedIn ? (
              <div className="profile__container">
                <Link
                  to="/profile"
                  className="profile__sign-link"
                  onClick={handleSaveClick}
                >
                  Редактировать
                </Link>
                <Link
                  className="profile__sign-link profile__sign-link_exit"
                  to="/"
                  onClick={props.onSignOut}
                >
                  Выйти из аккаунта
                </Link>
              </div>
            ) : (
              <div className="profile__container">
                <span className="profile__error">
                  При обновлении профиля произошла ошибка.
                </span>
                <button className="profile__submit-button" type="submit">
                  Сохранить
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
