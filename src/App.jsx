import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import SelectCity from "./components/SelectCity"






function App() {
  
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [isLoading, setIsLoading] = useState(true)
  
  

  const [inputValue, setInputValue] = useState(coords)

  useEffect(() => {
    if(inputValue) {
      const url = `https://api.api-ninjas.com/v1/geocoding?city=${inputValue}`
      axios.get(url, {
        headers: {
          'X-Api-Key': 'SYAszI1ZMEBvQNdifbvH+Q==bQXxy1RUSWapl0jp'
        }
      })
        .then(res => {
          setCoords({
            lat: res.data[0].latitude,
            lon: res.data[0].longitude
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    
  }, [inputValue])
  


  const success = (info) => {
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude,
    });
  };
  const error = () => {
  setCoords({
      lat: 40.790886,
      lon: -73.974709,
    });
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

  }, []);

  useEffect(() => {
    if (coords) {
      const APIKEY = "ceeafbc3c15e53a876c551a087ad9630";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;

      axios
        .get(url)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(0);
          const fahrenheit = ((9 / 5) * celsius + 32).toFixed(0);
          setTemp({
            celsius,
            fahrenheit,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [coords]);

  return (
    <div 
    
    className="bg-slate-900 h-full w-full md:w-screen md:h-screen flex items-center justify-center flex-wrap p-24 gap-10 bg-cover" >
      <img 
      className="hidden md:block w-full h-full object-fill opacity-30 z-0 absolute"
      src="img\bg.jpg" alt="" />
      {
        isLoading
        ? <Loader/>
        : (
            <>
              <SelectCity
                setInputValue={setInputValue}
              />

              <WeatherCard
                weather={weather}
                temp={temp}
              />
            </>
          )
      }
      
    </div>
  );
} 

export default App;
