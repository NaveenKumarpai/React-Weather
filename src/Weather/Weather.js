import React,{ useState } from 'react'
import axios from 'axios'

function Weather() {
    const [data,setData] = useState({});
    const [location,setLocation] = useState('')

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5510fe620b6ce167701940e44759cb27`
 
    const searchLocation =(event) =>{
        if(event.key === "Enter"){
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data)
            });
            setLocation('')
        }
        
    };
 
 
    return (
    <div className="weather">
        <div className="search">
            <input
             type='text'
            placeholder='Enter Location'
            onKeyPress={searchLocation}
            onChange={event =>setLocation(event.target.value)}
            value={location}/>
        </div>
        <div className="container">
            <div className="top">
                <div className="location">
                    
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{((data.main.temp-32)*(5 / 9)).toFixed(1)} <span>&#8451;</span></h1> :null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}  
                </div>
            </div>

            {data.name !== undefined &&
            <div className="bottom">
                <div className="feels">
                    {data.main ? <p className='bold'>{((data.main.feels_like-32) *(5 / 9)).toFixed()}<span>&#8451;</span></p> : null}
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
                    <p>Speed</p>
                </div>
        </div>
            }
            
        </div>
    </div>
  )
}

export default Weather;