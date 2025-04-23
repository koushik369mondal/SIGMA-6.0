import "./App.css";
import { Title, Sum } from "./Title.jsx";

function Description() {
  return <h1>I am Description</h1>;
}

function App() {
  return (
    <>
      <Title />
      <Description />
      <Title />
      <Description />
      <Sum />
    </>
  );
}

export default App
