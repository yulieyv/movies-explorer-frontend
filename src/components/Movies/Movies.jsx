import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/movies-cards';

const Movies = () => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} buttonMore={true} />
    </div>
  );
};

export default Movies;
