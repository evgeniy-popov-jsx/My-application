import { useState, useEffect } from "react";
import axios from "axios";
import weatherConvert from "../../utils/weather_converter";
import { getDay, getMonth } from "../../utils/date";

type city = {
    id: number,
    name: string,
    lat: number,
    lon: number,
}

export const WeatherCard: React.FC <city>= (props) => {
    const [weatherApi, setWeatherApi] = useState(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(null);
    const date = new Date();
    const {lon , lat } = props;


    // Get запрос API
    useEffect(() => {
        const ApiKey  = 'f155171607c7d826d5d48a72ef31682f';
        const URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
        axios.get(URL_API).then((response) => {
          return setWeatherApi(response.data)
        }).catch(error => {
            setError(error);
          });
      }, [setWeatherApi, lat, lon]);
      if (!weatherApi) return null;

      // Деструктуризация данных
      const {name, weather, main, wind, sys, clouds} = weatherApi;
      const { feels_like, humidity, pressure, temp_max, temp} = main;
      const { description} = weather[0];
      const { all } = clouds;
      const { country } = sys;
      const { speed, gust } = wind;

      // Преобразование данных
      const feelsLike = weatherConvert(feels_like);
      const degrees = weatherConvert(temp);
      const tempMax = weatherConvert(temp_max);
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