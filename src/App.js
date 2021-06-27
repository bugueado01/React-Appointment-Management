import React, { useState, useEffect } from 'react'
import Formulario from '../src/components/Formulario'
import Cita from '../src/components/CIta'

function App() {

  // Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    // console.log('Cambios con respecto al state citas');
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }

  }, [citas, citasIniciales])


  // Funcion que eliminar un cita por su ID
  const eliminarCita = id => {
    // console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
  }

  // Funcion que tome las citas y agregue la nueva
  const crearCita = cita => {
    // console.log(citas);
    setCitas([
      ...citas,
      cita
    ])
  }

  // Mensaje condicional
  // console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            { citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            )) }
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
