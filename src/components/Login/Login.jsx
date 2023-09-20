import "./Login.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Clarification from "../Form/Clarification/Clarification";

function Login() {
  const error = { message: "" };

  return (
    <main className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <Form name="login" buttonText="Войти">
        <label className="form__label" htmlFor="input-email">
          E-mail
          <input
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

        <label className="form__label" htmlFor="input-password">
          Пароль
          <input
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
        clarificationText={"Ещё не зарегистрированы?"}
        linkText="Регистрация"
      />
    </main>
  );
}

export default Login;
