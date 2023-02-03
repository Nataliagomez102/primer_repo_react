import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css';
import foto from './assets/img/foto.jpeg'




export function App() {
  const [nombre,setNombre]= useState ()
  console.log("este es el nombre",nombre);
  setNombre("natalia")
  console.log("este es el nombre",nombre);
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
           <span>Estudiante de ultimo semestre de ingenieria de sofware en la universidad UniHorizonte </span>
           con un tegnologo en informatica de la universidad Unigermana, 
           tambien un tenico en bases de datos en el instituto <br /> incap, 
           Gracias a mi trabajo tengo conocimientos en bases de datos como :oracle,
           <span>plsql,teradata,Azure,mysql. </span>
          </p>

        </div>

        <section >
          <form onSubmit={(e)=> {e.preventDefault();}}>
            <label>
              Nombre :
              <input type="text" name="name" placeholder='ingrese su nombre' value={()=> {}} onChange={()=> {}}> </input>

            </label>
            <input type="submit" value="submit"></input>


          </form>
        </section>


        

      </div>
      <p class="read-the-docs">
        
      </p>
    </>
  )
}
