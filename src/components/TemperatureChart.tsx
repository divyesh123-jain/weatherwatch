import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Forecast } from '../types/weather';

interface TemperatureChartProps {
  forecast: Forecast;
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ forecast }) => (
  <>
    <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
      Temperature Trend
    </Typography>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={forecast.forecastday}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
        />
        <YAxis />
        <Tooltip  />
        <Line type="monotone" dataKey="day.avgtemp_c" stroke="#8884d8" name="Avg Temp (°C)"  />
        <Line type="monotone" dataKey="day.maxtemp_c" stroke="#82ca9d" name="Max Temp (°C)" />
        <Line type="monotone" dataKey="day.mintemp_c" stroke="#ffc658" name="Min Temp (°C)" />
      </LineChart>
    </ResponsiveContainer>
  </>
);

export default TemperatureChart;