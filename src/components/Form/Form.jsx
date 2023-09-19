import "./Form.css";
import { useLocation } from "react-router-dom";

function Form({ name, buttonText, error, isVisibleButton, ...props }) {
  const location = useLocation();

  return (
    <form className={`form form-${name}`}>
      {props.children}

      <button
        type="submit"
        className={`form__submit form__submit-${name} ${
          error ? "form__submit-profile_button_disabled" : ""
        } ${
          location.pathname === "/profile" && isVisibleButton === false
            ? "form__submit-profile_display_none"
            : ""
        }`}
        disabled={error ? true : false}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
