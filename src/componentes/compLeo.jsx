import React from 'react'
import '../hojasDeEstilo/compLeo.css'

function ComponenteLeo () {
  return (
    <div className='componenteLeo'>
      <div className='contenedorTexto'>
        <img
          className='imgLeo'
          src={require('../imagenes/leo.jpg')}
          alt='fotoLeo'
        />
        <p className='nombrePersona'>🏎Leonardo Granados🏎</p>
        <p className='ocupacion'>Ingeniero de sistemas</p>
        <p className='testimonio'>Apasionado por la vida y con muchos deseos de aprender a desarrollar sofware</p>

      </div>

    </div>

  )
}
export default ComponenteLeo
