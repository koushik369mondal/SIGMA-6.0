import "./App.css";
import Title from "./Title.jsx";

function Description() {
  return <h1>I am Description</h1>;
}

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Title />
      <Description />
    </div>
  );
}

export default App
