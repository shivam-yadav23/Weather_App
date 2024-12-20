import './WeatherBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function WeatherBox({info}){
    let hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url = "https://www.foodstoragemoms.com/wp-content/uploads/2013/12/How-To-Be-Prepared-For-Extreme-Cold-Weather1.jpg";
    let rainy_url = "https://images.unsplash.com/photo-1572455857811-045fb4255b5d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
    return(
        <div className="container">
            <h2>Weather info</h2>
            <Card sx={{width: 300 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 90? rainy_url : info.temp > 15 ? hot_url : cold_url}
                    title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city.toUpperCase()} {info.humidity > 90? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"} >
                <p>Temp = {info.temp}&deg;C</p>
                <p>Max Temp = {info.max_temp}&deg;C</p>
                <p>Min Temp = {info.min_temp}&deg;C</p>
                <p>FeelsLike = {info.feelslike}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>The Weather can be described as <b>{info.Weather}</b></p>
                </Typography>
                    
                </CardContent>
                
            </Card>
            
        </div>
    );
}