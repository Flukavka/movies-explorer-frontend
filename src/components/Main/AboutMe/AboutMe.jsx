import "./AboutMe.css";
import author from "../../../images/author.jpg";

function AboutMe() {
  return (
    <section id="author-section" className="about-me">
      <h2 className="about-me__title">Студент</h2>

      <hr className="about-me__separator" />

      <article className="about-me-info">
        <h3 className="about-me-info__name">Виктория</h3>

        <p className="about-me-info__profile">Фронтенд-разработчик, 33 года</p>

        <p className="about-me-info__bio">
          Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве, закончил факультет дизайна
          МИТУ-МАСИ. У&nbsp;меня есть муж и&nbsp;скоро будет маленькая дочь.
          Я&nbsp;люблю слушать музыку, рисовать, играть, а&nbsp;ещё увлекаюсь
          велосипедной ездой. Кодить начинала по&nbsp;чуть-чуть
          с&nbsp;2020&nbsp;года.
        </p>

        <a
          href="https://github.com/Flukavka"
          className="about-me-info__link-github"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <img
          src={author}
          alt="Фотография разработчика"
          className="about-me-info__photo"
        />
      </article>
    </section>
  );
}

export default AboutMe;
