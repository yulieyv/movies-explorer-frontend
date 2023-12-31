import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/movies-cards';

const Movies = () => {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} buttonMore={true} />
    </main>
  );
};

export default Movies;
