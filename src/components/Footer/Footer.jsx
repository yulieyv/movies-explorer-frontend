import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ? (
        <footer className="footer">
          <div className="footer__page">
            <h3 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
            <div className="footer__container">
              <p className="footer__year">&copy; 2020</p>
              <nav className="footer__nav">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a
                      className="footer__link"
                      href="https://practicum.yandex.ru/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__link"
                      href="https://github.com/yulieyv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
