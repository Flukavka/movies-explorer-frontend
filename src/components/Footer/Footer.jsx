import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>

        <hr className="footer__separator" />

        <div className="footer__nav">
          <p className="footer__copyright">&copy; 2023</p>

          <nav>
            <ul className="footer__nav-list">
              <li>
                <a
                  className="footer__nav-list-link"
                  href="https://practicum.yandex.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>

              <li>
                <a
                  className="footer__nav-list-link"
                  href="https://github.com/Flukavka"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
