import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { WeatherForecast , fetchWeatherForecast } from '../api/weatherapi';
const WeatherSearch: React.FC = () => {
    const [weather, setWeather] = useState<WeatherForecast | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (city: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchWeatherForecast(city);
            setWeather(response)
        } catch (err) {
            console.error("Error fetching weather:", err);
            setError("Failed to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
         <SearchBar onSearch={handleSearch} />
        </>
    )
}
export default WeatherSearch;