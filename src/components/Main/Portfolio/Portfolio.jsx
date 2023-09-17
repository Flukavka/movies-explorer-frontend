import "./Portfolio.css";
import arrow from "../../../images/portfolio_arrow.svg";

function Portfolio() {
  return (
    <section>
      <article className="portfolio">
        <h4 className="portfolio-title">Портфолио</h4>

        <ul className="portfolio-list">
          <li className="portfolio-list-item">
            <a
              className="portfolio-list-item__link"
              href="https://flukavka.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-list-item__link-text">Статичный сайт</p>

              <img
                className="portfolio-list-item__link-icon"
                src={arrow}
                alt="Иконка стрелочка"
              />
            </a>
            <hr className="portfolio-list-item__separator" />
          </li>

          <li className="portfolio-list-item">
            <a
              className="portfolio-list-item__link"
              href="https://flukavka.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-list-item__link-text">Адаптивный сайт</p>

              <img
                className="portfolio-list-item__link-icon"
                src={arrow}
                alt="Иконка стрелочка"
              />
            </a>
            <hr className="portfolio-list-item__separator" />
          </li>

          <li className="portfolio-list-item">
            <a
              className="portfolio-list-item__link"
              href="https://flukavka.github.io/mesto/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-list-item__link-text">
                Одностраничное приложение
              </p>

              <img
                className="portfolio-list-item__link-icon"
                src={arrow}
                alt="Иконка стрелочка"
              />
            </a>
            <hr className="portfolio-list-item__separator" />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Portfolio;
