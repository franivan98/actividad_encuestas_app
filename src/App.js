import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//componentes
import Encuestas from './components/Encuestas';
import Footer from './components/Footer';

function App() {
  const encuestas=[
    {id:1, pregunta: 'Cual es tu color favorito?', opciones:['Rojo','Azul','Verde']},
    {id:2, pregunta: 'Cual es tu comida favorita?',opciones:['Pizza','Hamburguesa','Sushi']},
    {id:3, pregunta: 'Cual es tu mascota favorita?',opciones:['Gato','Perro','Iguana','Ninguno']},
    {id:4, pregunta: 'Que puntuacion le colocas a esta pagina?',opciones:['Muy Buena','Buena','Regular','Mala','Muy Mala','No responde']},
  ];

  return(
    <div className='App'>
      <h1>Aplicacion de Encuestas</h1>
      {/*Contenido de las paginas*/ }
      <Encuestas encuestas={encuestas}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
