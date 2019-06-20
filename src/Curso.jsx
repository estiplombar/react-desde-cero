import React from 'react'
import PropTypes from 'prop-types'


// const curso = {
//   "title":"React desde cero",
//   "image":"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
//   "price":"50usd"
// };



// const mayorDeEdad = edad => edad > 18;

const Curso = ({title,image,price,profesor}) => (
  <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        
        <img src={image} alt={title}/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
          {profesor}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price} USD`}</a>
        </div>
      </div>
    </article>
)

Curso.prototype = {
  title:PropTypes.string,
  image:PropTypes.string,
  price:PropTypes.number,
  profesor:PropTypes.string
}

Curso.defaultProps  = {
  title: "no se encontro titulo",
  image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
  price: "--",
  profesor:""
}

export default Curso;

//  podemos pasar directamente el objeto props y tomar las llaves que me interesan o 
// tambien podemos solicitar directametne solo las llaves que vamos a utilizar para no estar llamando al objeto completo
/* 
            mayorDeEdad(persona.edad) ? <h3 className="center">soy mayor</h3> : <p>soy menor</p>
           */
