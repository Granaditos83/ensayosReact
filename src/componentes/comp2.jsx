import React from 'react'
import '../hojasDeEstilo/Comp2.css'

function Componente2 () {
  return (
    <div className='componente2'>
      <div className='contenedorTexto'>
        <img
          className='imagen2'
          src={require('../imagenes/grana2.jpg')}
          alt='fotoCristian'
        />
        <p className='nombrePersona'>Cristian Granados</p>
        <p className='ocupacion'>Ingeniero de sistemas y telecomunicaciones</p>
        <p className='textoTestimonio'>Me encanta el dinero,soy una persona con muchas ganas de aprender cosas nuevas dia a dia.</p>
      </div>

    </div>
  )
}

export default Componente2
