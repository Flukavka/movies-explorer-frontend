import React from "react"
import arrowUp from "../../../images/arrow.svg"
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__items">
        <a
          className="portfolio__link portfolio__link-line"
          href="https://flukavka.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__paragraph">Статичный сайт</p>
          <img
            className="portfolio__image-arrow"
            src={arrowUp}
            alt="Стрелка для ссылки"
          />
        </a>
        <a
          className="portfolio__link portfolio__link-line"
          href="https://flukavka.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__paragraph">Адаптивный сайт</p>
          <img
            className="portfolio__image-arrow"
            src={arrowUp}
            alt="Стрелка для ссылки"
          />
        </a>
        <a
          className="portfolio__link"
          href="https://flukavka.github.io/mesto/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__paragraph">Одностраничное приложение</p>
          <img
            className="portfolio__image-arrow"
            src={arrowUp}
            alt="Стрелка для ссылки"
          />
        </a>
      </nav>
    </section>
  )
}

export default Portfolio
