import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#about-project">
            О проекте
          </Link>
        </li>

        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#tech">
            Технологии
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link className="nav-tab__link" to="#about-me">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
