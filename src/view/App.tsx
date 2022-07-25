import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [weather, setWeather] = useState<any>({})

  const fetchData = async () => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3f6f5b5d8c57fa8889630a6fc3cd6c72")
    setWeather(await data.json())
  }
  

  useEffect(() => {
    
    
    fetchData()
    
  }, [])
  

  return (
    <div className="App">
      <p>{weather.name || "null"}</p>
    </div>
  );
}

export default App;
