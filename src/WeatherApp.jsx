import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherBox from "./WeatherBox"

export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState({
        city : "Wonderland",
        temp : 25.80,
        max_temp : 25.80,
        min_temp : 25.80,
        feelslike : 24.84,
        humidity : 47,
        weather : "haze",
    });
    let updateInfo = (NewInfo)=>{
        setweatherInfo(NewInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherBox info={weatherInfo}/>
        </div>
    );
}