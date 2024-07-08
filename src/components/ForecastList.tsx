import React from 'react';
import { Typography, Grid } from '@mui/material';
import ForecastDay from './ForecastDay';
import { Forecast } from '../types/weather';

interface ForecastListProps {
  forecast: Forecast;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => (
  <>
    <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
      7-Day Forecast
    </Typography>
    <Grid container spacing={2}>
      {forecast.forecastday.map((day) => (
        <Grid item xs zeroMinWidth>
            
          <ForecastDay day={day} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ForecastList;