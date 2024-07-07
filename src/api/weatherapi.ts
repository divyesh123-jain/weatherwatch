import axios from "axios";

const API_KEY = '37e58e744b044e668a0175333240407'
const BASE_URL = 'https://api.weatherapi.com/v1'

export interface City {
    id: number
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
    }

    export interface Weather {
        location: {
            name: string;
            country: string;
          };
          current: {
            temp_c: number;
            humidity: number;
            wind_kph: number;
            condition: {
              text: string;
              icon: string;
            };
          };
      }

      export interface ForecastDay {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
          daily_chance_of_rain: number;
        };
      }

      export interface WeatherForecast extends Weather {
        forecast: {
          forecastday: ForecastDay[];
        };
      }

      export const fetchweather = async (city: string): Promise<Weather> => {
        const { data } = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
        return data
      }

export const searchCity = async (query: string): Promise<City[]> => {
    const { data } = await axios.get(`${BASE_URL}/search.json?key=${API_KEY}&q=${query}`)
    return data
}

export const fetchWeatherForecast = async (city: string): Promise<WeatherForecast> => {
    const { data } = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`)
    return data;
  }