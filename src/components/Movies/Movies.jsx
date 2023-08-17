import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const Movies = () => {
  return (
    <div className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </div>
  );
};

export default Movies;