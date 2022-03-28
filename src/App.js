import './App.css'

import Componente2 from './componentes/comp2'
import ComponenteDiego from './componentes/compDiego'
import ComponenteLeo from './componentes/compLeo'
import ComponenteLucia from './componentes/compLucia'

function App () {
  return (
    <div className='App'>
      <div className='contenedorPrincipal' />

      <h2>Somos Granados Rojas</h2>

      <Componente2 />
      <ComponenteLucia />
      <ComponenteDiego />
      <ComponenteLeo />

    </div>
  )
}

export default App
