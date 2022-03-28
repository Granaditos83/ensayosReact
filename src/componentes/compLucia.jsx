import React from 'react'
import '../hojasDeEstilo/CompLucia.css'

function ComponenteLucia () {
  return (
    <div className='componenteLucia'>
      <div className='contenedorTexto'>
        <img
          className='imagen2'
          src={require('../imagenes/lucia.jpg')}
          alt='fotoLucia'
        />
        <p className='nombrePersona'>🐱Lucia Rojas🐱</p>
        <br />
        <p className='ocupacion'>Madre de tres bellezas</p>
        <br />
        <p className='textoTestimonio'>Me encantan los animales, cocinar, aprender</p>
      </div>

    </div>
  )
}

export default ComponenteLucia
