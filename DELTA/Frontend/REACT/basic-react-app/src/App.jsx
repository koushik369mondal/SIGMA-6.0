import "./App.css";

function Title() {
  return <h1>I am Title</h1>;
}

function App() {
  return (
    <div>
      <h1>This is App</h1>
      <p>This is paragraph</p>
      <Title />
    </div>
  );
}

export default App
