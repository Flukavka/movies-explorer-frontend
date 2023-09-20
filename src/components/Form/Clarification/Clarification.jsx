import "./Clarification.css";
import { Link, useLocation } from "react-router-dom";

function Clarification({ clarificationText, linkText }) {
  const location = useLocation();
  return (
    <p className="clarification">
      {clarificationText}
      <Link
        to={location.pathname === "/signup" ? "/signin" : "/signup"}
        className="clarification-link"
      >
        {linkText}
      </Link>
    </p>
  );
}

export default Clarification;
