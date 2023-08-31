import "./NavAuth.css";
import { Link } from "react-router-dom";

function NavAuth() {
  return (
    <nav className="nav-auth">
      <div className="nav-auth-list">
        <Link className="nav-auth__link nav-auth__link_signup" to="/signup">
          Регистрация
        </Link>
        <Link className="nav-auth__link nav-auth__link_signin" to="/signin">
          Войти
        </Link>
      </div>
    </nav>
  );
}

export default NavAuth;
