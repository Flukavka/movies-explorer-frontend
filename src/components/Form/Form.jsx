import "./Form.css";
import { useLocation } from "react-router-dom";

function Form({ name, buttonText, error, isVisibleButton, ...props }) {
  const location = useLocation();

  return (
    <form className={`form form__${name}`}>
      {props.children}

      <button
        type="submit"
        className={`form-submit form-submit__${name} ${
          error ? "form-submit__profile_button_disabled" : ""
        } ${
          location.pathname === "/profile" && isVisibleButton === false
            ? "form-submit__profile_display_none"
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
