import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {

  return (
    <>
      <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[4, 3, 5, 7, 8, 9]} />
    </>
  )
}

export default App
