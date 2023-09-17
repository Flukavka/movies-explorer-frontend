import "./Header.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import UnloggedNav from "./UnloggedNav/UnloggedNav";
import LoggedNav from "./LoggedNav/LoggedNav";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({ loggedIn }) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  loggedIn = true;

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header_color_pink" : ""
      }`}
    >
      <div className="header__wrapper">
        <Logo />

        {loggedIn ? <LoggedNav currentUser={currentUser} /> : <UnloggedNav />}
      </div>
    </header>
  );
}

export default Header;
