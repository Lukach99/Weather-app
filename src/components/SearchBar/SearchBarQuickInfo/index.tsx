import "./index.scss"
import { useState, useMemo, useEffect } from "react"
import { WeatherHttp } from "../../../http/weather.http"

const SearchBarQuickInfo = ({location}: Props) => { 
    const [weatherInfo, setWeather] = useState<any>({})

  const weatherHttp = useMemo(() => new WeatherHttp() , [])
  
  const fetchData = async() => {
    const data = await weatherHttp.getWeatherData(location[0], location[1])
    setWeather(data)
  }
  console.log(weatherInfo)
 

  useEffect(() => {

    fetchData()
    
  }, [location])
  

    return <div className="quick-info">
        <div className="quick-info__weather">
            <h3>{`${weatherInfo.name}, ${weatherInfo.sys?.country}`}</h3>
            <h2>{weatherInfo.main?.temp} °C</h2>
        </div>
        <div className="quick-info__description">
            <img src={`http://openweathermap.org/img/wn/${Object.keys(weatherInfo).length !== 0 ? weatherInfo.weather[0].icon : "10d"}.png`} alt=""  />
            <p>{Object.keys(weatherInfo).length !== 0 ? weatherInfo.weather[0].description : "undefined"}</p>
        </div>
            
        </div>
        
 }


type Props = {
    location: any
}

export default SearchBarQuickInfo