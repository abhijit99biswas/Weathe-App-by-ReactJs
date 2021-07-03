import React, {useState, useEffect} from 'react'
import './css/style.css';

const MainPage = () => {
    const [city, setCity] = useState(null)
    const [weatherr, setWeatherr] = useState()
    const [searchValue, setsearchValue] = useState("Kharagpur")

    useEffect( () => {
        const fetchApi = async () => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b63a65ae6357a1b29e6d9c9095e76c5a`
            const response = await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main);
            setWeatherr(resJson.weather);
        };
        fetchApi();
    },[searchValue])


    
    return (
        <>
         <div className="box">
            <div className="inputData">
                <input className="inputField" 
                placeholder="Search Your City Here"
                type="search" onChange={ (event) => {
                    setsearchValue(event.target.value)
                } } />
            </div>
            {
                !city ? (
                    <h2 className="errorMsg"> 
                        No Data Found
                    </h2>
                ):
                (
                <div>
                    <div className="info">
                        <div className="weathercon">
                            {weatherr? 
                            <div>
                            <img src={`http://openweathermap.org/img/w/${weatherr[0].icon}.png`} alt="" />
                            <p>{weatherr[0].description}</p>
                            </div>
                            : <span></span>
                        }
                            </div>
                        <h2 className="location"> 
                            {searchValue}
                        </h2>
                        <h1 className="temp">
                            {city.temp}&#176;C
                            
                            {/* 23.3&#176; C */}
                        </h1>
                        <h2 className="tempmin_max">
                            Feels Like: {city.feels_like}&#176;C
                        </h2>
                        
                        <h3 className="tempmin_max">
                            Min: {city.temp_min}&#176;C | Max: {city.temp_max}&#176;C
                        </h3>
                        <h3 className="tempmin_max">
                            Humidity: {city.humidity}&#37;
                        </h3>
                        <div className="social" >
                            <a href="https://github.com/abhijit99biswas"><i class="fab fa-github-square"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100005429806880"><i class="fab fa-facebook-square"></i></a>
                            <a href="https://www.linkedin.com/in/abhijit-biswas-0975351a5/"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    <div className="social" >
                        
                    </div>
                </div>
                )
            }
            
         </div>

        </>
    )
}

export default MainPage
