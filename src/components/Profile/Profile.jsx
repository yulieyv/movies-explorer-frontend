import "./Profile.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [savedIn, setSavedIn] = useState(false);
  const [isAvailable, setIsAvailable] = useState("disabled");
  const [previosValue, setPreviosValue] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSaveClick() {
    setSavedIn(true);
    setIsAvailable();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({ name: values.name, email: values.email });
  }

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setPreviosValue(true);
    } else {
      setPreviosValue(false);
    }
  }, [values, currentUser]);

  return (
    <>
      <main className="profile">
        <section className="profile__section">
          <form className="profile__form" onSubmit={handleSubmit}>
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <div className="profile__item">
              <label className="profile__item-text">Имя</label>
              <input
                className="profile__input"
                value={values.name || ""}
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                onChange={handleChange}
                disabled={isAvailable}
                required
              ></input>
            </div>
            <div className="profile__item">
              <label className="profile__item-text">E-mail</label>
              <input
                className="profile__input"
                value={values.email || ""}
                pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                disabled={isAvailable}
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
                  {errors.name || errors.email}
                </span>
                <button
                  disabled={!isValid ? true : false}
                  className={`profile__submit-button ${
                    !isValid || previosValue
                      ? "profile__submit-button_disabled"
                      : ""
                  }`}
                  type="submit"
                >
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
