import { useState } from "react";
import "./LoggedNav.css";
import { useLocation, NavLink } from "react-router-dom";
import Overlay from "../../Overlay/Overlay";

function LoggedNav({ currentUser }) {
  const [isBurgerMenuOpen, burgerMenuState] = useState(false);
  const location = useLocation();
  currentUser.email = "Аккаунт";

  function handleOpenBurgerMenu() {
    burgerMenuState(true);
  }

  function handleCloseBurgerMenu() {
    burgerMenuState(false);
  }

  return (
    <>
      <Overlay isBurgerMenuOpen={isBurgerMenuOpen} />
      <div>
        <button
          type="button"
          className="logged-nav-burger"
          onClick={handleOpenBurgerMenu}
        ></button>
        <nav
          className={`logged-nav logged-nav_display_none ${
            isBurgerMenuOpen ? "logged-nav_display_flex" : ""
          }`}
        >
          <ul className="logged-nav__list">
            {/* кнопка закрытия бургерного меню */}
            <li className="logged-nav__list-item logged-nav__list-item_align">
              <button
                type="button"
                className={`logged-nav__button-close ${
                  isBurgerMenuOpen
                    ? "logged-nav__button-close_display_flex"
                    : ""
                }`}
                onClick={handleCloseBurgerMenu}
              ></button>
            </li>

            {isBurgerMenuOpen ? (
              /* ссылка на главную страницу */
              <li className="logged-nav__list-item">
                <NavLink
                  to="/"
                  className={`logged-nav__link ${
                    location.pathname === "/" ? "logged-nav__link_active" : ""
                  }`}
                >
                  Главная
                </NavLink>
              </li>
            ) : (
              <></>
            )}

            {/* ссылка на страницу со всеми фильмами */}
            <li className="logged-nav__list-item">
              <NavLink
                to="/movies"
                className={`logged-nav__link logged-nav__link_movies logged-nav__link_all-movies ${
                  location.pathname === "/movies"
                    ? "logged-nav__link_active"
                    : ""
                }`}
              >
                Фильмы
              </NavLink>
            </li>

            {/* ссылка на сохраненные пользователем фильмы */}
            <li className="logged-nav__list-item">
              <NavLink
                to="/saved-movies"
                className={`logged-nav__link logged-nav__link_movies ${
                  location.pathname === "/saved-movies"
                    ? "logged-nav__link_active"
                    : ""
                }`}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <ul className="logged-nav__list">
            <li className="logged-nav__profile">
              <a
                className="logged-nav__profile-email"
                href={`mailto:${currentUser.email}`}
              >
                {currentUser.email}
              </a>

              <NavLink
                to="/profile"
                className={`logged-nav__link-profile ${
                  isBurgerMenuOpen || location.pathname !== "/"
                    ? "logged-nav__link-profile_color_gray"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                >
                  <path
                    className={`logged-nav__profile-icon ${
                      location.pathname === "/" && !isBurgerMenuOpen
                        ? "logged-nav__profile-icon_fill_pink"
                        : ""
                    }`}
                    fill="#000"
                    fillRule="evenodd"
                    d="M7.43 7.967a3.751 3.751 0 1 0-2.86 0A8.614 8.614 0 0 0 .809 9.58L2.19 11.42A6.317 6.317 0 0 1 6 10.149c1.431 0 2.749.473 3.81 1.27l1.382-1.839A8.614 8.614 0 0 0 7.43 7.967Z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default LoggedNav;
