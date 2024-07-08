import React from 'react';
import { Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import ForecastDay from './ForecastDay';
import { Forecast } from '../types/weather';

interface ForecastListProps {
  forecast: Forecast;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        7-Day Forecast
      </Typography>
      <Grid 
        container 
        spacing={2} 
        direction={isMobile ? 'row' : 'column'}
        wrap={isMobile ? 'nowrap' : 'wrap'}
        sx={{ overflowX: isMobile ? 'auto' : 'visible' }}
      >
        {forecast.forecastday.map((day) => (
          <Grid item xs zeroMinWidth key={day.date}>
            <ForecastDay day={day} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ForecastList;
