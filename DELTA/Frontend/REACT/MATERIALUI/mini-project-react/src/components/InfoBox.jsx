import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1564932319746-a617dab0b940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={INIT_URL} title="Weather image" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }} component="span">
                            <p>Temperature = {weatherInfo.temp}&deg;C</p>
                            <p>Humidity = {weatherInfo.humidity}%</p>
                            <p>Min Temp = {weatherInfo.tempMin}&deg;C</p>
                            <p>Max Temp = {weatherInfo.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{weatherInfo.weather}</i> and feels like = {weatherInfo.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
