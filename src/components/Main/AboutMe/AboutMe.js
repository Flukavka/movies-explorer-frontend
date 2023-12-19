import React from "react";
import avatar from "../../../images/author.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__paragraph-block">
          <h3 className="about-me__name">Виктория</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 33 года</h4>
          <p className="about-me__paragraph">
            Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, закончил факультет
            дизайна МИТУ-МАСИ. У&nbsp;меня есть муж и&nbsp;скоро будет маленькая
            дочь. Я&nbsp;люблю слушать музыку, рисовать, играть, а&nbsp;ещё
            увлекаюсь велосипедной ездой. Кодить начинала по&nbsp;чуть-чуть
            с&nbsp;2020&nbsp;года.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Flukavka"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="Мое фото" className="about-me__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
