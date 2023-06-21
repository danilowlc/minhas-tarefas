import BarraLateral from './containers/BarraLAteral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlocal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlocal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
