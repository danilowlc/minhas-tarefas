import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLAteral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlocal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlocal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
