import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const CardComponent: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, width: 300, textAlign: 'center', p: 2, m: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" component="div" sx={{ mb: 2 }}>
          Explore global map of wind, weather, and oceans condition.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img 
            src="https://banner2.cleanpng.com/20180320/jae/kisspng-weather-forecasting-rain-clip-art-transparent-weather-cliparts-5ab19d70153355.6311024315215896160868.jpg" // replace with your image path
            alt="Weather Condition"
            style={{ borderRadius: 8, width: '100%', maxHeight: 150, objectFit: 'cover' }}
          />
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#c19bfa', color: '#fff', borderRadius: 8 }}>
          Get started
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
