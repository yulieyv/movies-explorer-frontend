import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1, {replace: true});
  }

  return (
    <main className="not-found">
      <section className="not-found__section">
        <div className="not-found__container">
          <h2 className="not-found__title">404</h2>
          <p className="not-found__subtitle">Страница не найдена</p>
        </div>
        <button onClick={handleGoBack} className="not-found__link">
          Назад
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;
