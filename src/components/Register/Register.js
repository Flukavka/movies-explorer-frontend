import React from "react"
import Form from "../Form/Form"
import "../Form/Form.css"
import useForm from "../../hooks/useForm"
import { EMAIL_REGEX } from "../../utils/constants"

function Register({ isLoading, handleRegistration }) {
  // Хук useForm
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm()

  function setEditUserInfo(event) {
    event.preventDefault()
    handleRegistration({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    })
  }

  return (
    <Form
      link="/signin"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      formInformationText="Уже зарегистрированы?"
      linkText=" Войти"
      onSubmit={setEditUserInfo}
      isDisablBtn={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          className="form__input"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Ваше имя"
          type="text"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
          required
        />
        <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          name="email"
          placeholder="Ваш Email"
          type="email"
          onChange={handleChangeInput}
          pattern={EMAIL_REGEX}
          value={enteredValues.email || ""}
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          className="form__input"
          name="password"
          placeholder="Ваш пароль"
          type="password"
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

export default Register
