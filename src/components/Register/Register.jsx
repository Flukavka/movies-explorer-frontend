import "./Register.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Clarification from "../Form/Clarification/Clarification";

function Register() {
  const error = { message: "" };

  return (
    <div className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form name="register" buttonText="Зарегистрироваться">
        <label className="form__label" for="input-name">
          Имя
          <input
            form="register"
            id="input-name"
            type="text"
            name="name"
            placeholder="Виктория"
            minLength="2"
            maxLength="30"
            className={`form__input ${
              error.message ? "form__input_error_style" : ""
            }`}
            required
          />
          <span className="form__input-error">{error.message || ""}</span>
        </label>

        <label className="form__label" for="input-email">
          E-mail
          <input
            form="register"
            id="input-email"
            type="email"
            name="email"
            placeholder="email@yandex.ru"
            maxLength="30"
            className={`form__input ${
              error.message ? "form__input_error_style" : ""
            }`}
            required
          />
          <span className="form__input-error">{error.message || ""}</span>
        </label>

        <label className="form__label" for="input-password">
          Пароль
          <input
            form="register"
            id="input-password"
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="8"
            maxLength="30"
            className={`form__input ${
              error.message ? "form__input_error_style" : ""
            }`}
            required
          />
          <span className="form__input-error">{error.message || ""}</span>
        </label>
      </Form>

      <Clarification
        clarificationText={"Уже зарегистрированы?"}
        linkText="Войти"
      />
    </div>
  );
}

export default Register;
