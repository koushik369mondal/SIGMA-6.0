import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "92386185a97a841e8c25345a7b728ec3";

    let [city, setCity] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("City name: ", city);
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Seearch
                </Button>
            </form>
        </div>
    );
}
