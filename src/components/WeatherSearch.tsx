import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { fetchWeatherForecast } from '../api/weatherapi';
import { WeatherForecast } from '../types/weather';
import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';
import TemperatureChart from './TemperatureChart';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
const WeatherSearch: React.FC = () => {
    const [weather, setWeather] = useState<WeatherForecast | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (city: string) => {
        setLoading(true);
        setError(null);
        setWeather(null);
    
        try {
          const response = await fetchWeatherForecast(city);
          setWeather(response);
        } catch (err) {
          console.error("Error fetching weather:", err);
          
          if (axios.isAxiosError(err)) {
            if (err.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              if (err.response.status === 400) {
                setError("Invalid city name. Please check your spelling and try again.");
              } else if (err.response.status === 401) {
                setError("Authentication error. Please check your API key.");
              } else if (err.response.status === 403) {
                setError("Access to the weather data is forbidden. Please check your API permissions.");
              } else if (err.response.status === 404) {
                setError("City not found. Please try a different city name.");
              } else if (err.response.status >= 500) {
                setError("Server error. Please try again later.");
              } else {
                setError("An unexpected error occurred. Please try again.");
              }
            } else if (err.request) {
              // The request was made but no response was received
              setError("Unable to connect to the weather service. Please check your internet connection and try again.");
            } else {
              // Something happened in setting up the request that triggered an Error
              setError("An unexpected error occurred. Please try again.");
            }
          } else {
            setError("An unexpected error occurred. Please try again.");
          }
        } finally {
          setLoading(false);
        }
      };
    return (
        <>

<div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black'>
  <div className='flex-1 bg-black px-4 pb-4 md:p-4'>
    </div>
    <div className='bg-[#c9c5b6] rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>

    <div className="grow">
   
      <main className='p-1 h-full md:max-h-[86vh] md:overflow-hidden grow flex flex-col md:flex-row gap-3 '>
        <div className='flex flex-col p-2 pb-0 md:overflow-hidden h-full gap-3 md:w-[50%] '>
          <div className='grid grid-cols-2 px-2  gap-6 h-[50%]  grid-rows-2'>
            <div className='w-full h-full font-[600]'>
            <SearchBar onSearch={handleSearch} />
              <h2 className='text-3xl text-black capitalize'>Hi, </h2>
              <h2 className='text-3xl text-black'>Check your</h2>
              <h2 className='text-3xl text-black'>Health!
             
              </h2>

             
            
            </div>
           
            <div className='relative lilBox h-full'>
           
            
            </div>
            <div className='lilBox flex items-center justify-between h-full'>
              wrewrw
              {/* <BloodPressure /> */}
            
            </div>
          </div>
          <div className='w-full md:h-[50%] p-2 pb-0'>
          <div className='grow  p-3'>
            <div className='h-full w-full rounded-xl p-4'>
            {weather && !loading && !error && (
            <>
            <ForecastList forecast={weather.forecast} />
            </>
            )}
            </div>
          </div>
         
          {/* {weather && !loading && !error && (
            <>
         <TemperatureChart forecast={weather.forecast} />
            </>
            )} */}
          </div>
        </div>

        <div className='w-auto h-auto flex flex-col gap-3 md:w-[50%]'>
   
          <div className='grow  p-3'>
          {weather && !loading && !error && (
            <>
            <CurrentWeather weather={weather} />
          
            
            </>
            )}
          </div>
          {weather && !loading && !error && (
            <>
         <TemperatureChart forecast={weather.forecast} />
            </>
            )}
        </div>
      </main >
    </div >

                     
                      
                    </div>
    </div>
        {/* <section>
        <div >
         <SearchBar onSearch={handleSearch} />
         {error && <ErrorMessage message={error} />}
         {weather && !loading && !error && (
            <>
            <CurrentWeather weather={weather} />
            <ForecastList forecast={weather.forecast} />
            <TemperatureChart forecast={weather.forecast} />
            </>
            )}
            </div>
            </section> */}
        </>
    )
}
export default WeatherSearch;