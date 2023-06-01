import { useState } from "react";
import { WeatherCard } from "./weather-card/Weather-card"
import { CITY } from "../../mocks/city";

type City = {
        id: number,
        name: string,
        lat: number,
        lon: number,
}

export const Weather: React.FC = () => {
    const [ city, setCity ] = useState<City>(CITY[0]);
    
    return (
        <>
            <WeatherCard 
                id={city.id} 
                name={city.name} 
                lat={city.lat} 
                lon={city.lon} />
                <ul className="city-btn">
                    {CITY.map(city => (
                        <button className='button' key={city.id} onClick={()=>setCity(city)}>
                            {city.name}
                        </button>
                    ))}
                </ul>
        </>
    )
}