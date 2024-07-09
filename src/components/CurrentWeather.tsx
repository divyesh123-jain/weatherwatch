import React from 'react';
import { WeatherForecast } from '../types/weather';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface CurrentWeatherProps {
  weather: WeatherForecast 
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({weather}) => {
  return (
    <Card sx={{ mt: 2, borderRadius: 4, boxShadow: 3, backgroundColor: '#282c34', color: 'white', }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            {weather.location.name}, {weather.location.country}
          </Typography>
          <IconButton sx={{ color: 'white' }}>
         
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <img 
            src={weather.current.condition.icon} 
            alt={weather.current.condition.text} 
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <Typography variant="h3">
            {weather.current.temp_c}°C
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {weather.current.condition.text}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Humidity: {weather.current.humidity}%
        </Typography>
        <Typography variant="body1">
          Wind Speed: {weather.current.wind_kph} km/h
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            {weather.location.region}, {weather.location.country}
          </Typography>
          <Typography variant="body2">
            {new Date(weather.location.localtime).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
            })}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather;
