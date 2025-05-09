import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Guwahati",
        feelsLike: 32.44,
        humidity: 83,
        temp: 27.95,
        tempMax: 27.95,
        tempMin: 27.95,
        weather: "mist",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    );
}
