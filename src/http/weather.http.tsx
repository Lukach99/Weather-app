import axios from "axios";
import { WEATHER_API_BASE_URL, WEATHER_API_KEY, WEATHER_API_URL } from "../constants/weather.api.constats";
import HttpClient from "./generic.http";

export class WeatherHttp extends HttpClient {
    constructor(){
        super(WEATHER_API_URL, WEATHER_API_KEY)
    }

    public async getWeatherData(){
        const {data} = await axios.get(this.url(WEATHER_API_BASE_URL, "lat=35&lon=139"))
        return data
    }
}