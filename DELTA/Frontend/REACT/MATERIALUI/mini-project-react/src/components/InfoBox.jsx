import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ weatherInfo }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1564932319746-a617dab0b940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL =
        "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL =
        "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL =
        "https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            weatherInfo.humidity > 80
                                ? RAIN_URL
                                : weatherInfo.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="Weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}
                            {
                                weatherInfo.temp > 15 ? (
                                    <SunnyIcon />
                                ) : weatherInfo.humidity > 80 ? (
                                    <ThunderstormIcon />
                                ) : (
                                    <AcUnitIcon />
                                )
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            component="span"
                        >
                            <p>Temperature = {weatherInfo.temp}&deg;C</p>
                            <p>Humidity = {weatherInfo.humidity}%</p>
                            <p>Min Temp = {weatherInfo.tempMin}&deg;C</p>
                            <p>Max Temp = {weatherInfo.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{weatherInfo.weather}</i> and
                                feels like = {weatherInfo.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
