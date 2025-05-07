import './App.css'
import CommentsForm from './components/CommentsForm';
import Form from './components/Form';

function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  return (
    <>
      <CommentsForm />
    </>
  )
}

export default App
