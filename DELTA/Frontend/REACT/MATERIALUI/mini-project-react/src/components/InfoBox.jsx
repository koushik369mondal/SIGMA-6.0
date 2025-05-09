import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
    const INIT_URL =
        "https://images.unsplash.com/photo-1564932319746-a617dab0b940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let info = {
        feelsLike: 32.44,
        humidity: 83,
        temp: 27.95,
        tempMax: 27.95,
        tempMin: 27.95,
        weather: "mist",
    };
    return (
        <div>
            <h1>Weather Info - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
