import "./App.css";
import { Title, Sum } from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description() {
  return <h1>I am Description</h1>;
}

function App() {
  return (
    <>
      <MsgBox userName={"Kauhsik"} textColor={"Orange"}/>
      <MsgBox userName={"apnacollage"} textColor={"blue"}/>
      <ProductTab />
    </>
  );
}

export default App
