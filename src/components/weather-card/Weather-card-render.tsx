import weatherConvert from "../../utils/weather_converter";
import { getDay, getMonth } from "../../utils/date";

type WeatherCardProps = {
    feels_like: number;
    temp: number;
    name: string;
    country: string;
    speed: number;
    description: string;
    humidity: number;
    gust: number;
    pressure: number;
    all: number;

}

export const WeatherCardRender: React.FC <WeatherCardProps>= (props) => {
    const {feels_like, temp, name, country, speed, description, humidity, gust, pressure, all} = props;

    // Преобразование данных
     const date = new Date();
     const feelsLike = weatherConvert(feels_like);
     const degrees = weatherConvert(temp);
     const tempMax = weatherConvert(temp);
     const day = getDay(date);
     const month = getMonth(date);

    return (
        <div className="weather_card">
            <div className="date">{day} {month}</div>
            <div className="city">{name}, {country}</div>
            <div className="card_container">
                <div className="degrees">{degrees} &deg;C</div> 
            </div>
            <div className="feels">Feels like {feelsLike}°C, {description}.</div>
            <div className="discriptions">
                <div className="left_block">
                    <div className="card_container">
                        <i className='bx bxs-navigation'></i>
                        <div className="wind">{speed} m/s</div>
                    </div>
                <div className="humidity">Humidity: {humidity}%</div>
                <div className="dew_point">Gust: {gust}</div>
            </div>
            <div className="right_block">
                <div className="card_container">
                    <i className='bx bxs-thermometer'></i>
                    <div className="pressure">{pressure} hPa</div> 
                </div>
                <div className="uv">Clouds: {all}%</div>
                    <div className="visibility">T-max: {tempMax} °C</div>
                </div>
            </div>
        </div>
    )
}