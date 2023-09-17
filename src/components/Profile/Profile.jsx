import "./Profile.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Profile({}) {
  const currentUser = useContext(CurrentUserContext);
  const [isInputReadOnly, setInputReadOnlyState] = useState(false);

  currentUser.email = "nosareva.vs@gmail.com";
  currentUser.name = "Виктория";
  const error = { message: "" };

  function handleChangeStatusInput() {
    setInputReadOnlyState(true);
  }

  return (
    <>
      <Header />
      <div className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <Form
          name="profile"
          buttonText="Сохранить"
          error={error.message}
          isVisibleButton={isInputReadOnly}
        >
          <label className="form__label-profile">
            Имя
            <input
              form="profile"
              className="form__input-profile"
              id="input-name"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder={currentUser.name}
              readOnly={isInputReadOnly ? false : true}
            />
          </label>

          <label className="form__label-profile">
            E-mail
            <input
              form="profile"
              className="form__input-profile"
              id="input-email"
              type="email"
              name="email"
              maxLength="30"
              placeholder={currentUser.email}
              readOnly={isInputReadOnly ? false : true}
            />
          </label>

          {error.message ? (
            <span className="profile__error">{error.message}</span>
          ) : (
            <></>
          )}
        </Form>

        <button
          type="button"
          className={`profile__button-change ${
            isInputReadOnly ? "profile__button-change_display_none" : ""
          }`}
          onClick={handleChangeStatusInput}
        >
          Редактировать
        </button>

        <NavLink
          className={`profile__signout ${
            isInputReadOnly ? "profile__signout_display_none" : ""
          }`}
          to="/signin"
        >
          Выйти из аккаунта
        </NavLink>
      </div>
    </>
  );
}

export default Profile;
