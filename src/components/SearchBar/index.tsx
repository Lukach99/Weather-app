import "./index.scss"
import { useCallback, useEffect, useMemo, useState } from "react"
import { GeolocationHttp } from "../../http/geolocation.http"
import { WeatherHttp } from "../../http/weather.http"
import SearchBarQuickInfo from "./SearchBarQuickInfo"

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const [queryResults, setqueryResults] = useState<any>([])
    const [weatherSearchResult, setWeatherSearchResult] = useState<any>({})

    const weatherHttp = useMemo(() => new WeatherHttp() , [])
    const geolocationHttp = useMemo(() => new GeolocationHttp() , [])

    const debounce = (cb: any, delay = 500) => {
        let timer: any
        return (...args: any) => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                cb(...args)
            },delay)
        }
    }
  
    const updateDebounce = useCallback(debounce((text:any) => { setQuery(text) }), [] ) 

    const fetchGeolocationData = async() => {
      const data = await geolocationHttp.getCityGeolocation(query)
      
     /*  const fetchWeatherData = async (lat:any, lon:any) => {
        const data = await weatherHttp.getWeatherData(lat, lon)
        return await data
      }
      const searchWeatherData = [...data].map((item) => { fetchWeatherData(item.lat, item.lon)  })
      console.log(searchWeatherData)
         */
      console.log(data)
      setqueryResults(data)
      
    }

    console.log("search render")

    useEffect(() => {
      
        if(query){
            fetchGeolocationData()
        }
        
    
      
    }, [query])
    
    console.log("results" , queryResults.length)

    return <div className="search-box">
        <input type="text" placeholder="Enter city" onChange={(event) => { updateDebounce(event.target.value) }}/>
        {queryResults.length > 0 && <div className="search-dropdown">
            
                {queryResults.map((item:any, index:number) => <SearchBarQuickInfo key={index} location={[item.lat, item.lon]}></SearchBarQuickInfo>)}
        
             {/* <SearchBarQuickInfo location={queryResults}></SearchBarQuickInfo> */} 
            
        </div>
        }
    </div>
}

export default SearchBar