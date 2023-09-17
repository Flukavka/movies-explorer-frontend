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
          <button className="unlogged-nav__button unlogged-nav__button_signin">
            <NavLink to="/signin" className="unlogged-nav__button-link">
              Войти
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default UnloggedNav;
