import "./UnloggedNav.css";
import { NavLink } from "react-router-dom";

function UnloggedNav() {
  return (
    <nav>
      <ul className="unlogged-nav">
        <li>
          <NavLink
            to="/signup"
            className="unlogged-nav__link unlogged-nav__link_register"
          >
            Регистрация
          </NavLink>
        </li>

        <li>
          <NavLink to="/signin" className="unlogged-nav__link-signin">
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default UnloggedNav;
