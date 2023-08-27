import './SearchForm.css';
import searchLogo from '../../images/search-logo.svg';

function SearchForm() {
  return (
    <form className="search-form">
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
        <label className="search-form__tumbler">
          <input type="checkbox" className="search-form__checkbox"></input>
        </label>
        <p className="search-form__short-films">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
