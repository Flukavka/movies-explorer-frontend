import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a className="navigation__list-item-link" href="#project-section">
            О проекте
          </a>
        </li>
        <li className="navigation__list-item">
          <a
            className="navigation__list-item-link"
            href="#technologies-section"
          >
            Технологии
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__list-item-link" href="#author-section">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
