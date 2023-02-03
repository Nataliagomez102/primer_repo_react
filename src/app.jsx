import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css';
import foto from './assets/img/foto.jpeg'



export function App() {

  return (
    <>
      <div className='contenedor'>
        <div className='datos'>
        <h1> Natalia Gomez </h1>
        estudiante de Ingenieria de sofware
                        profesional 2 para telefonica 
        </div>
        <div className='foto'>
          <img src={foto} alt="imagen de perfil" width="250px" height ="250px"></img>
                  </div>
        <div className='articulo'>
        <p>
           Estudiante de ultimo semestre de ingenieria de sofware en la universidad UniHorizonte 
          con un tegnologo en informatica de la universidad Unigermana, 
           tambien un tenico en bases de datos en el instituto incap, 
           Gracias a mi trabajo tengo conocimientos en bases de datos como :oracle,
           plsql,teradata,Azure,mysql.
          </p>

        </div>
        

      </div>
      <p class="read-the-docs">
        
      </p>
    </>
  )
}
