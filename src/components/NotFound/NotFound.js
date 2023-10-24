import React from "react"
import { useNavigate } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate();

  function goToPath() {
    navigate(-2);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={goToPath} className="not-found__button">
        Назад
      </button>
    </section>
  )
}

export default NotFound
