import React from 'react';
// import React,{Fragment} from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./styles/styles.scss";
import Curso from './Curso';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => (
//   <Fragment>
//       <div className="saludo">
//         <h1>Hola mundo</h1>
//         <p>hola saludando desde mi componente</p>
//     </div>
//     <div>
//         <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png" alt="s" />
//     </div>
//   </Fragment>
  

// )
const App = () => (
  <>
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
  
  <div className="ed-grid m-grid-3">
     <Curso />
     <Curso />
     <Curso />
     <Curso />
     <Curso />
     <Curso />
     <Curso />
     <Curso />
     <Curso />
  </div>
  </>

)

export default App;

// reglas jsx

//  1: toda etiqueta debe cerrarse
//  2: los componentes deben devolver UN solo elemento padre
//  3: apoyarse de los Fragment cuando nesesito devolver 2 elementos
//  4: nomenclatura <Fragment> hijos </Fragment> o <>  hijos </> 
//  5: img siempre se cierran /
//  6: class="miclase" en jsx tiene que ser clasName="miclase"
//  7: el atributo for en jsx pasa a ser htmlFor


