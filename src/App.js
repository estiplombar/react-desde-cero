import React from 'react';
// import React,{Fragment} from 'react';
// import logo from './logo.svg';
// import './App.css';
import "./styles/styles.scss";
import Curso from './Curso';
import Banner from "./Banner"
import Formulario from "./Formulario"

// const cursos = [
//   {
//     "title":"React desde cero",
//     "image":"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
//     "price":30,
//     "pofesor":"Beto Quiroga",
//   },
//   {
//     "title":"Drupal desde cero",
//     "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
//     "price":50,
//     "pofesor":"Beto Quiroga",
//   },
//   {
//     "title":"Go desde cero",
//     "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
//     "price":40,
//     "pofesor":"Alexys Lozada",
//   },
//   {
//     "title":"HTML5 desde cero",
//     "image":"https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
//     "price":20,
//     "pofesor":"Alvaro Felipe",
//   }
// ]

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
  <Banner />
  <Formulario name="EDteam"/>
  </>

)
/* <div className="ed-grid m-grid-3">
  {
    cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.pofesor} /> )
  }     
</div> */

export default App;

// reglas jsx

//  1: toda etiqueta debe cerrarse
//  2: los componentes deben devolver UN solo elemento padre
//  3: apoyarse de los Fragment cuando nesesito devolver 2 elementos
//  4: nomenclatura <Fragment> hijos </Fragment> o <>  hijos </> 
//  5: img siempre se cierran /
//  6: class="miclase" en jsx tiene que ser clasName="miclase"
//  7: el atributo for en jsx pasa a ser htmlFor

