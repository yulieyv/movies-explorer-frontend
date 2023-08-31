import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="not-found">
      <section className="not-found__section">
        <div className="not-found__container">
          <h2 className="not-found__title">404</h2>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <Link to="/" className="not-found__link">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default PageNotFound;
