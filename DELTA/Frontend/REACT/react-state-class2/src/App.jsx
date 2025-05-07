import './App.css'
import Comment from './components/Comment';
import CommentsForm from './components/CommentsForm';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  return (
    <>
      <Counter />
    </>
  )
}

export default App
