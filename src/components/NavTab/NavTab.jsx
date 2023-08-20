import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <div className="nav-tab__list">
        <Link className="nav-tab__link" href="#about-project">
          О проекте
        </Link>
        <Link className="nav-tab__link" href="#technologies">
          Технологии
        </Link>
        <Link className="nav-tab__link" href="#student">
          Студент
        </Link>
      </div>
    </nav>
  );
}

export default NavTab;
