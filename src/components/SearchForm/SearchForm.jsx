import './SearchForm.css';
import searchLogo from "../../images/search-logo.svg"

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
            alt="Логотип Movies Explorer"
          />
        </button>
      </div>
      <div className="search-form__toggle">
        <p className="search-form__short-films">Короткометражки</p>
        <label className="search-form__tumbler">
          <input type="checkbox" className="search-form__checkbox" />
          <span className="search-form__slider" />
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
