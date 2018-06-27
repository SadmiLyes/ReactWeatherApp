// api.openweathermap.org/data/2.5/weather?APPID=5df24064b699c1d801e7cb35e3ed9b0f
import axios from 'axios';
const API_KEY = '5df24064b699c1d801e7cb35e3ed9b0f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);
    return {
        type : FETCH_WEATHER,
        payload: request
    }
};