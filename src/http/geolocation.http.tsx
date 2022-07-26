import axios from "axios";
import { GEOLOCATION_DIRECT_API_BASE_URL, WEATHER_API_BASE_URL, WEATHER_API_KEY, WEATHER_API_URL } from "../constants/weather.api.constats";
import HttpClient from "./generic.http";

export class GeolocationHttp extends HttpClient {
    constructor(){
        super(WEATHER_API_URL, WEATHER_API_KEY)
    }

    public async getCityGeolocation(query:string){
        const {data} = await axios.get(this.url(GEOLOCATION_DIRECT_API_BASE_URL, `q=${query}&limit=2`))
        return data
    }
}