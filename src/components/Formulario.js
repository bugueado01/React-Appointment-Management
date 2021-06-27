import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

     //Crear state de citas
     const [cita, setCita] = useState({
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: '',
     });

     const [error, setError] = useState(false)

     //Funcion que se ejecuta cada que el usuario escribe en un input
     const handleChange = e => {
          // console.log(e.target.name);
          // console.log(e.target.value);
          setCita({
               ...cita,
               [e.target.name]: e.target.value
          })
     }

     //Extraer los valores
     const { mascota, propietario, fecha, hora, sintomas } = cita

     // Cuando el usuario presionar agregar cita
     const submitCita = e => {
          // alert("Enviando...")
          e.preventDefault();

          // console.log("Enviando form");
          //Validar
          if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
               setError(true);
               return;      
          }

          //Eliminar el mensaje previo
          setError(false)
          //Asignar un ID
          cita.id = uuid();
          console.log(cita);
          // Crear la cita
          crearCita(cita);
          // Reiniciar el form
          setCita({
               mascota: '',
               propietario: '',
               fecha: '',
               hora: '',
               sintomas: '',
          })
     }


     return (
          <>
               <h2>Crear cita</h2>

               { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

               <form
                    onSubmit={submitCita}
               >
                    <label htmlFor="">Nombre Mascota</label>
                    <input 
                         type="text" 
                         name="mascota"
                         className="u-full-width"
                         placeholder="Nombre Mascota"
                         onChange={handleChange}
                         value={mascota}
                    />

                    <label htmlFor="">Nombre Dueño</label>
                    <input 
                         type="text" 
                         name="propietario"
                         className="u-full-width"
                         placeholder="Nombre Dueño de la mascota"
                         onChange={handleChange}
                         value={propietario}
                    />

                    <label htmlFor="">Fecha</label>
                    <input 
                         type="date" 
                         name="fecha"
                         className="u-full-width"
                         onChange={handleChange}
                         value={fecha}
                    />

                    <label htmlFor="">Hora</label>
                    <input 
                         type="time" 
                         name="hora"
                         className="u-full-width"
                         onChange={handleChange}
                         value={hora}
                    />

                    <label htmlFor="">Sintomas</label>
                    <textarea 
                         name="sintomas" 
                         id="" 
                         cols="30" 
                         rows="10"
                         className="u-full-width"
                         onChange={handleChange}
                         value={sintomas}
                    >
                    </textarea>

                    <button
                         type="submit"
                         className="u-full-width button-primary"
                    >
                         Agregar Cita
                    </button>
               </form>
          </>
     )
}

Formulario.propTypes = {
     crearCita: PropTypes.func.isRequired
}

export default Formulario;
