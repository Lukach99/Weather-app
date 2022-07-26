import { useEffect, useMemo, useState } from "react"
import { GeolocationHttp } from "../../http/geolocation.http"

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const [queryResults, setqueryResults] = useState<any>([])

    const geolocationHttp = useMemo(() => new GeolocationHttp() , [])
  
    const fetchData = async() => {
      const data = await geolocationHttp.getCityGeolocation(query)
      setqueryResults(data)
      console.log(data)
    }

    console.log("search render")

    useEffect(() => {
      
        fetchData()
    
      
    }, [query])
    

    return <div>
        <input type="search" placeholder="Enter city" onChange={event => setQuery(event.target.value)  }/>
        {query && <div>
            <ul>
                {queryResults.map((item:any, index:number) => <li key={index}>{item.name}</li>)}
            </ul>
            
        </div>
        }
    </div>
}

export default SearchBar