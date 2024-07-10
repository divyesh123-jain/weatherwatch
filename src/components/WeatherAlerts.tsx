import React from 'react';

interface WeatherAlertProps {
  alerts: string[];
}

const WeatherAlert: React.FC<WeatherAlertProps> = ({ alerts }) => {
  return (
    <div>
      <h2>Weather Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherAlert;
