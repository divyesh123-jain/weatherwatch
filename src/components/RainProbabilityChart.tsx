import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Forecast } from '../types/weather';
import { Box, Typography } from '@mui/material';

interface RainProbabilityChartProps {
  forecast: Forecast;
}

const RainProbabilityChart: React.FC<RainProbabilityChartProps> = ({ forecast }) => {
  const data = forecast.forecastday.map(day => ({
    name: new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' }),
    rain: day.day.daily_chance_of_rain,
  }));

  return (
    <Box  sx={{ mt: 4  }}>
      <Typography variant="h6" gutterBottom>
        Rain Probability
      </Typography>
      <ResponsiveContainer  height={250}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="rain" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rain" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RainProbabilityChart;
