import './App.css'
import ComponenteCristian from './componentes/compCristian'
import ComponenteDiego from './componentes/compDiego'
import ComponenteLeo from './componentes/compLeo'
import ComponenteLucia from './componentes/compLucia'

function App () {
  return (
    <div className='App'>
      <div className='contenedorPrincipal' />

      <h2>Somos Granados Rojas</h2>

      <ComponenteCristian />
      <ComponenteLucia />
      <ComponenteDiego />
      <ComponenteLeo />

    </div>
  )
}

export default App
