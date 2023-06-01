import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCardRender } from "./Weather-card-render";
import { Loader } from "../../loader/loader";

type WeatherProps = {
    id: number,
    name: string,
    lat: number,
    lon: number,
}

export const WeatherCard: React.FC <WeatherProps>= (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(null);
    const [weatherApi, setWeatherApi] = useState(null);
    const [load, setLoad] = useState(false);
    const {lon , lat } = props;


    // Get запрос API
    useEffect(() => {
        setLoad(true);
        const ApiKey  = 'f155171607c7d826d5d48a72ef31682f';
        const URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
        axios.get(URL_API).then((response) => {
          setWeatherApi(response.data);
          setLoad(false);
        })
        .catch(error => {
            setError(error);
          })
      }, [ setWeatherApi, lat, lon, setLoad]);
      if (!weatherApi) return null;

      // Деструктуризация данных
      const {name, weather, main, wind, sys, clouds} = weatherApi;
      const { feels_like, humidity, pressure, temp} = main;
      const { description} = weather[0];
      const { all } = clouds;
      const { country } = sys;
      const { speed, gust } = wind;

    return (
        <>
          {load? <Loader />: <WeatherCardRender feels_like={feels_like} temp={temp} name={name} country={country} speed={speed} description={description} humidity={humidity} gust={gust} pressure={pressure} all={all}/> }
        </>
    )
}