import React from 'react'
import { WeatherForecast } from '../api/weatherapi'
import { Card, CardContent, Typography, Box } from '@mui/material';

interface CurrentWeatherProps {
    weather: WeatherForecast 
    }
const CurrentWeather: React.FC<CurrentWeatherProps> = ({weather}) => {
  return (
    <Card sx={{ mt: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {weather.location.name}, {weather.location.country}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <img 
          src={weather.current.condition.icon} 
          alt={weather.current.condition.text} 
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Typography variant="h6">
          {weather.current.temp_c}°C
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {weather.current.condition.text}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Humidity: {weather.current.humidity}%
      </Typography>
      <Typography variant="body2">
        Wind Speed: {weather.current.wind_kph} km/h
      </Typography>
    </CardContent>
  </Card>
  )
}

export default CurrentWeather
