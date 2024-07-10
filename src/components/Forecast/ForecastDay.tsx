import React from 'react'
import { ForecastDay as ForecastDayType } from '../../types/weather';
import { Card, CardContent, Typography, Box } from '@mui/material';
interface ForecastDayProps {
    day: ForecastDayType;
}
const ForecastDay:React.FC<ForecastDayProps> = ({day}) => {
  return (
   <>
   <Card sx={{ 
     mt: 2, 
     borderRadius: 4, 
     boxShadow: 3, 
     backgroundColor: '#282c34', 
     color: 'white', 
     height: { xs: 'auto', sm: 180 }, // Responsive height
     minHeight: 180, // Ensure a minimum height
   }}>
    <CardContent>
      <Typography variant="subtitle1">
        {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img 
          src={day.day.condition.icon} 
          alt={day.day.condition.text} 
          style={{ width: 40, height: 40 }}
        />
        <Typography variant="body2">
          {day.day.avgtemp_c}°C
        </Typography>
      </Box>
      <Typography variant="body2">
        {day.day.condition.text}
      </Typography>
      <Typography variant="body2">
        Rain: {day.day.daily_chance_of_rain}%
      </Typography>
    </CardContent>
  </Card>
   </>
  )
}

export default ForecastDay
