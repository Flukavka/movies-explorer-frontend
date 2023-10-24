import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../../images/logo.svg"
import account from "../../images/account-btn.svg"
import Navigation from "../Navigation/Navigation"
import menu from "../../images/menu-button.png"
import "./Header.css"

function Header({ loggedIn }) {
  // Функция смены цвета активной ссылки
  const setActiveColorLink = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button"

  const [isOpened, setIsOpened] = React.useState(false)

  function handleOpen() {
    setIsOpened(true)
  }

  function handleClose() {
    setIsOpened(false)
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-wrapper">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-black">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header header_white">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-wrapper-items">
            <NavLink className={setActiveColorLink} to="/movies">
              Фильмы
            </NavLink>
            <NavLink className={setActiveColorLink} to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-wrapper">
            <Link to="/profile" className="header__account-button">
              <img
                className="header__account-image"
                src={account}
                alt="аккаунт"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="меню" />
            </button>
          </div>
          {isOpened ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  )
}

export default Header
