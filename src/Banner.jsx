import React from "react"

const Banner = () => (

  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://cdn-images-1.medium.com/max/2400/1*vOrfclMVms7S4608zxC-ig.jpeg" alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">subcribete</a>
        </div>
      </div>
    </div>
  </div>

)


export default Banner