import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchLogo from '../../images/search-logo.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button type="submit" className="search-form__button">
          <img
            className="search-form__logo"
            src={searchLogo}
            alt="Логотип поиска: лупа"
          />
        </button>
      </div>
      <div className="search-form__toggle">
        <FilterCheckbox />
        <p className="search-form__short-films">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
