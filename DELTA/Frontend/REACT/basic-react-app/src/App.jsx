import "./App.css";
import { Title, Sum } from "./Title.jsx";

function Description() {
  return <h1>I am Description</h1>;
}

function App() {
  return (
    <div className="main-box">
      <Title />
      <Description />
      <Title />
      <Description />
      <Sum />
    </div>
  );
}

export default App
