import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import savedMovies from '../../utils/savedMovies';

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList 
        cards={savedMovies} 
        buttonMore={false} />
      <MoviesCard />
    </div>
  );
};

export default SavedMovies;
