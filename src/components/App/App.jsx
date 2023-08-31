import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const navigate = useNavigate();

  function handleRegisterSubmit() {
    navigate("/signin");
  }

  function handleLoginSubmit() {
    setLoggedIn(true);
    navigate("/");
  }

  function handleSignOutSubmit() {
    setLoggedIn(false);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route
          path="/signup"
          element={<Register onRegister={handleRegisterSubmit} />}
        ></Route>
        <Route
          path="/signin"
          element={<Login onSubmit={handleLoginSubmit} />}
          onClick={handleLoginSubmit}
        ></Route>
        <Route path="/profile" element={<Profile onSignOut={handleSignOutSubmit}/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
