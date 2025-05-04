import './App.css'
import Form from './components/Form';

function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  return (
    <>
    <Form/>
    </>
  )
}

export default App
