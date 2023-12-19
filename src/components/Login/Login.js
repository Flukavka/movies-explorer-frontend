import React from "react"
import Form from "../Form/Form"
import "../Form/Form.css"
import { EMAIL_REGEX } from "../../utils/constants"
import useForm from "../../hooks/useForm"

function Login({ onAuthorization, isLoading }) {
  // Хук useForm
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm()

  function setEditUserInfo(event) {
    event.preventDefault()
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    })
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      linkText=" Регистрация"
      formInformationText="Еще не зарегистрированы?"
      link="/signup"
      isDisablBtn={!isFormValid}
      isLoading={isLoading}
      onSubmit={setEditUserInfo}
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          placeholder="Ваш Email"
          pattern={EMAIL_REGEX}
          onChange={handleChangeInput}
          value={enteredValues.email || ""}
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          placeholder="Ваш пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          minLength="6"
          maxLength="12"
          required
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  )
}

export default Login
