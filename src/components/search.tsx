import React, { useState, ChangeEvent } from 'react';
import { City, fetchweather, searchCity, Weather } from '../api/weatherapi';

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [weather, setWeather] = useState<Weather | null>(null);
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value)
    if (value.length > 2) {
      try {
        const response = await searchCity(value)
        setSuggestions(response)
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSuggestions([])
      }
    } else {
      setSuggestions([])
    }
  }
  
  const handleSuggestionClick = async (city: City) => {
    setQuery(city.name)
    setSuggestions([])
    setLoading(true);
    setError(null);
    try {
      const response = await fetchweather(city.name)
      setWeather(response)
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Weather Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
      />
      <ul className="suggestions">
        {suggestions.map((city) => (
          <li key={city.id} onClick={() => handleSuggestionClick(city)}>
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && !loading && !error && (
        <div className="weather-info">
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
        </div>
      )}
    </div>
  )
}

export default Search