// import "./App.css"
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";

function App() {
  let handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div>
        <h1>Material UI Demo</h1>
        <Button variant="contained" onClick={handleClick}>
          Click Me
        </Button>

        <Button variant="contained" onClick={handleClick} color="success" size="small">
          Click Me2
        </Button>

        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Alert severity="success">This is a success Alert.</Alert>
      </div>
    </>
  );
}

export default App;
