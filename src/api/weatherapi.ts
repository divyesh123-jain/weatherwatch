import axios from "axios";
import { City, WeatherForecast , Weather } from '../types/weather';
const API_KEY = '37e58e744b044e668a0175333240407'
const BASE_URL = 'https://api.weatherapi.com/v1'



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