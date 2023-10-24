import React from "react"
import { Link } from "react-router-dom"
import "./Form.css"
import logo from "../../images/logo.svg"

function Form({
  title,
  children,
  linkText,
  link,
  formInformationText,
  buttonText,
  isLoading,
  isDisablBtn,
  onSubmit,
}) {
  return (
    <section className="form">
      <Link to="/" className="logo">
        <img src={logo} alt="Логотип приложения" />
      </Link>
      <h3 className="form__title">{title}</h3>
      <form className="forma" id="form" onSubmit={onSubmit} noValidate>
        {children}
        <button
          type="submit"
          className={
            isDisablBtn || isLoading
              ? "form__button-save form__button-save_inactive"
              : "form__button-save"
          }
          disabled={isDisablBtn ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <p className="form__text">
        {formInformationText}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </section>
  )
}

export default Form
