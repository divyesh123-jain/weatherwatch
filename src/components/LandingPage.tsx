import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherSearch from './WeatherSearch';

const LandingPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleSearch = (city: string) => {
    setSelectedCity(city);
  };

  if (selectedCity) {
    return <WeatherSearch initialCity={selectedCity} />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-[#c9c5b6] rounded-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Weather Forecast</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default LandingPage;