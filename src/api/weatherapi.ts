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
        };
        current: {
          temp_c: number;
          condition: {
            text: string;
          };
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