import "./Technologies.css";

function Technologies() {
  return (
    <section id="technologies-section" className="technologies">
      <h2 className="technologies__title">Технологии</h2>

      <hr className="technologies__separator" />

      <article className="technologies__information">
        <h3 className="technologies__information-title">7 технологий</h3>

        <p className="technologies__information-description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <ul className="technologies__information-list">
          <li className="technologies__information-list-item">HTML</li>

          <li className="technologies__information-list-item">CSS</li>

          <li className="technologies__information-list-item">JS</li>

          <li className="technologies__information-list-item">React</li>

          <li className="technologies__information-list-item">Git</li>

          <li className="technologies__information-list-item">Express.js</li>

          <li className="technologies__information-list-item">mongoDB</li>
        </ul>
      </article>
    </section>
  );
}

export default Technologies;
