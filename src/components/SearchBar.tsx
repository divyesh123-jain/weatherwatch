import React, { useState, ChangeEvent } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import { searchCity, City } from '../api/weatherapi';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<City[]>([]);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      try {
        const response = await searchCity(value);
        setSuggestions(response);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city: City) => {
    setQuery(city.name);
    setSuggestions([]);
    onSearch(city.name);
  };

  return (
    <>
      <TextField
        fullWidth
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        variant="outlined"
        margin="normal"
      />
      {suggestions.length > 0 && (
        <List>
          {suggestions.map((city) => (
            <ListItem 
              button 
              key={city.id} 
              onClick={() => handleSuggestionClick(city)}
            >
              <ListItemText primary={`${city.name}, ${city.country}`} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default SearchBar;