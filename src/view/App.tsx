import React, { useEffect, useMemo, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { WeatherHttp } from '../http/weather.http';

import './App.css';

function App() {
  const [weather, setWeather] = useState<any>({})

  const weatherHttp = useMemo(() => new WeatherHttp() , [])
  
  const fetchData = async() => {
    const data = await weatherHttp.getWeatherData()
    setWeather(data)
  }
  console.log("rendered")

  useEffect(() => {
    
    
    fetchData()
    
  }, [])
  

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <p>{weather.name || "null"}</p>
    </div>
  );
}

export default App;
