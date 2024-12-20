import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setcity] = useState("");
    let [error , setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = import.meta.env.VITE_API_KEY;

    let getwetherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jasonresponse = await response.json();

            let result = {
                city: city,
                temp : jasonresponse.main.temp,
                max_temp : jasonresponse.main.temp_max,
                min_temp : jasonresponse.main.temp_min,
                feelslike : jasonresponse.main.feels_like,
                humidity : jasonresponse.main.humidity,
                Weather : jasonresponse.weather[0].description,
            }; 
            return result;
        }catch(err){
            throw err;
        }
    };

    let handlechange = (evt)=>{
        setcity(evt.target.value);
    };

    let handlesubmit = async (evt)=>{
        try{
            evt.preventDefault();
            setError(false);
            let newInfo = await getwetherInfo();  
            updateInfo(newInfo);
            
            setcity("");
        }catch(err){
            setError(true);
        }
        
    };

    return(
        <div className="SearchBox">
          <h1>Search for the whether</h1>
          <form onSubmit={handlesubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city} onChange={handlechange}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>search</Button>
        {error && <p style={{color:"red"}}>No data available for this place!</p>}
          </form>
        </div>
    );
}
    