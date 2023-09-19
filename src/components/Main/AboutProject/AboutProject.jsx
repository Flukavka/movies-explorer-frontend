import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="project-section" className="about-project">
      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__information">
        <ul className="about-project__list">
          <li className="about-project__list-item">
            <h3 className="about-project__list-item-title">
              Дипломный проект включал 5 этапов
            </h3>

            <p className="about-project__list-item-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>

          <li className="about-project__list-item">
            <h3 className="about-project__list-item-title">
              На выполнение диплома ушло 5 недель
            </h3>

            <p className="about-project__list-item-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className="about-project__infographics-list">
          <li className="about-project__infographics-list-item about-project__infographics-list-item_backend">
            <p className="about-project__infographics-list-item-title about-project__infographics-list-item-title_backend">
              1 неделя
            </p>

            <p className="about-project__infographics-list-item-description">
              Back-end
            </p>
          </li>

          <li className="about-project__infographics-list-item about-project__infographics-list-item_frontend">
            <p className="about-project__infographics-list-item-title about-project__infographics-list-item-title_frontend">
              4 недели
            </p>

            <p className="about-project__infographics-list-item-description">
              Front-end
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
