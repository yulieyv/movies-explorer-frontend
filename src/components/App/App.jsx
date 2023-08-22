import './App.css';
import { Route, Routes } from 'react-router-dom';
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
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={true}/>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header loggedIn={true}/>
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header loggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>
        <Route path='/sign-up' element={<Register />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
        <Route
          path='/profile'
          element={
            <>
              <Header loggedIn={true} />
              <Profile />
            </>
          }
        ></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
