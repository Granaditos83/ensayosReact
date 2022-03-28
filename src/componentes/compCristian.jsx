import React from 'react'
import '../hojasDeEstilo/Comp2.css'

function ComponenteCristian () {
  return (
    <div className='componenteCristian'>
      <div className='contenedorTexto'>
        <img
          className='imagen2'
          src={require('../imagenes/grana2.jpg')}
          alt='fotoCristian'
        />
        <p className='nombrePersona'>💻Cristian Granados💻</p>
        <br />
        <p className='ocupacion'>Ingeniero de sistemas y telecomunicaciones</p>
        <br />
        <p className='textoTestimonio'>Me encanta el dinero, soy una persona con muchas ganas de aprender cosas nuevas dia a dia.</p>
      </div>

    </div>
  )
}

export default ComponenteCristian
