import React from "react"
import NavTab from "../NavTab/NavTab"
import "./Promo.css"

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrappers">
        <div className="promo__wrapper">
          <div className="promo__text-wrapper">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
          </div>
        </div>
      </div>
      <NavTab />
    </section>
  )
}

export default Promo
