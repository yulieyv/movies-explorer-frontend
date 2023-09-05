import "./App.css";
import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([]);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            localStorage.removeItem("movies");
            navigate(path, { replace: true });
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleRegisterSubmit(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        setIsOpenPopup(true);
        setStatus("Вы успешно зарегистрировались!");
        handleLoginSubmit(email, password);
      })
      .catch(() => {
        setIsOpenPopup(true);
        setStatus("Что-то пошло не так! Попробуйте ещё раз.");
        console.log("Некорректно заполнено одно из полей");
      });
  }

  function handleLoginSubmit(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setIsOpenPopup(true);
        setStatus("Что-то пошло не так! Попробуйте ещё раз.");
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
        console.log("401 - пользователь с email не найден", `Ошибка: ${err}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setIsOpenPopup(true);
        setStatus("Данные успешно изменены!");
      })
      .catch((err) => {
        setIsOpenPopup(true);
        setStatus(`Что-то пошло не так! ${err}`);
      });
  }

  function handleMovieLike(card) {
    mainApi
      .postSavedMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        console.log(card);
      });
  }

  function handleMovieDelete(card) {
    mainApi
      .deleteSavedMovie(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOutSubmit() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    setLoggedIn(false);
    navigate("/");
  }

  function closePopup() {
    setIsOpenPopup(false);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onMovieDelete={handleMovieDelete}
                handleMovieLike={handleMovieLike}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onMovieDelete={handleMovieDelete}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegisterSubmit}
                onSignOut={setIsOpenPopup}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login onLogin={handleLoginSubmit} />}
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onOpenPopup={setIsOpenPopup}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOutSubmit}
              />
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
        <Popup text={status} isOpen={isOpenPopup} onClose={closePopup} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
