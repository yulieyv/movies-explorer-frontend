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
import {
  UNAUTHORIZED_ERROR,
  BAG_REQUEST_ERROR,
  UNAUTHORIZED_LOGIN,
  BAG_REQUEST_LOGIN,
  CONFLICT_ERROR,
  OK_STATUS_PROFILE,
  OK_STATUS_REGISTER,
  CONFLICT_REGISTER,
  INTERNAL_SERVER,
  INTERNAL_SERVER_ERROR,
} from "../../utils/constants";

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
            //localStorage.removeItem("movies");
          } else {
            setLoggedIn(false);
          }
          navigate(path);
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
          console.log(`Ошибка: ${err}`);
        });
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);

  function handleRegisterSubmit({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then(() => {
        setIsOpenPopup(true);
        setStatus(OK_STATUS_REGISTER);
        handleLoginSubmit({ email, password });
      })
      .catch((err) => {
        setIsOpenPopup(true);
        err === BAG_REQUEST_ERROR && setStatus(UNAUTHORIZED_LOGIN);
        err === CONFLICT_ERROR && setStatus(CONFLICT_REGISTER);
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLoginSubmit({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setIsOpenPopup(true);
        err === UNAUTHORIZED_ERROR && setStatus(UNAUTHORIZED_LOGIN);
        err === BAG_REQUEST_ERROR && setStatus(BAG_REQUEST_LOGIN);
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setIsOpenPopup(true);
        setStatus(OK_STATUS_PROFILE);
      })
      .catch((err) => {
        setIsOpenPopup(true);
        err === INTERNAL_SERVER_ERROR && setStatus(INTERNAL_SERVER);
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleMovieLike(card) {
    mainApi
      .postSavedMovie(card)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleMovieDelete(card) {
    mainApi
      .deleteSavedMovie(card._id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleSignOutSubmit() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("moviesList");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("movies");
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
                loggedIn={loggedIn}
                onRegister={handleRegisterSubmit}
                onSignOut={setIsOpenPopup}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login onLogin={handleLoginSubmit} loggedIn={loggedIn} />}
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
