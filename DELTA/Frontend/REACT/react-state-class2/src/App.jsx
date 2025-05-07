import './App.css'
import Comment from './components/Comment';
import CommentsForm from './components/CommentsForm';
import Counter from './components/Counter';
import Form from './components/Form';
import Joker from './components/Joker';

function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  return (
    <>
      <Joker />
    </>
  )
}

export default App
