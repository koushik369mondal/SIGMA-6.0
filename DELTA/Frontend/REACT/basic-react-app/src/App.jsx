import "./App.css";

function Title() {
  return <h1>I am Title</h1>;
}
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
