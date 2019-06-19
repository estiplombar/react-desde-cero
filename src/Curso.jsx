import React from 'react'

const Curso = () => (
  <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png" alt="img" />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">
          Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg" alt="img" />
              </div>
            </div>
            <span className="small">Alexys Lozada</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="index.html">$ 20USD</a>
        </div>
      </div>
    </article>
)

export default Curso;