import React, { useEffect, useMemo, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { WeatherHttp } from '../http/weather.http';

import './App.scss';

function App() {
  const [weather, setWeather] = useState<any>({})

  const weatherHttp = useMemo(() => new WeatherHttp() , [])
  
  const fetchData = async() => {
    const data = await weatherHttp.getWeatherData(45,45)
    setWeather(data)
  }
  console.log("rendered")

  useEffect(() => {
    
    
    fetchData()
    
  }, [])
  

  return (
    <div className="App">
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
