import React from 'react'
import '../hojasDeEstilo/CompDiego.css'

function ComponenteDiego () {
  return (
    <div className='componenteDiego'>
      <div className='contenedorTexto'>
        <img
          className='imgDiego'
          src={require('../imagenes/diego.jpg')}
          alt='fotoDiego'
        />
        <p className='nombrePersona'>🚲Diego Granados🚲</p>
        <p className='ocupacion'>Servidor publico</p>
        <p className='testimonio'>Soy profesor en una escuela que amo demasiado</p>

      </div>

    </div>

  )
}
export default ComponenteDiego
