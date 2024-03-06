import { useState } from "react"



const WeatherCard = ({weather, temp,}) => {

    

    const [isCelsius, setIsCelsius] = useState(true)

    const changeTemp = () => {
        setIsCelsius(!isCelsius)
    }

  return (
    <article className="flex flex-col md:flex-row items-center -mt-14 scale-90">
            
            <section className=" z-20 animate-blurred-fade-in bg-opacity-70 bg-slate-300 w-80 h-80 rounded-xl flex flex-col items-start pl-4 justify-evenly shadow-lg md:shadow-slate-950/80 md:-ml-1 hover:scale-105 ">

                <h1 className=" text-4xl font-bold text-slate-800">{weather?.name}</h1>
                <h2 className=" text-xs text-slate-700 flex items-center" >
                <svg className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor">
                <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> 
                </svg>
                {weather?.sys.country} 
                </h2>
                <section>
                    <header >
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                    </header>
                </section>
                <article>
                    <h2 className="text-5xl font-bold text-slate-800">
                        { isCelsius ?  `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}
                    </h2>
                    <h3 className="text-1xl text-slate-700"> 
                        {weather?.weather[0].description}
                    </h3>
                </article>
        </section>
        <div className="animate-blurred-fade-in md:bg-slate-800 w-80 h-80 rounded-xl flex flex-col items-center justify-around z-10 shadow-lg md:shadow-slate-950/80 md:-ml-1 hover:scale-95" >
            <ul className="space-y-3">
                <li className="text-1xl text-slate-200 w-64 h-14 flex justify-center items-center border-2 rounded-md border-slate-200 hover:bg-slate-200 hover:text-slate-700 transition-transform " >
                   
                    <span> Win speed:</span> <span>{weather?.wind.speed} Mps</span> 
                </li>
                <li className=" text-1xl text-slate-200 w-64 h-14 flex justify-center items-center border-2 rounded-md border-slate-200 hover:bg-slate-200 hover:text-slate-700">
                    <span>Clouds: </span><span>{weather?.clouds.all} %</span>
                </li>
                <li className="text-1xl text-slate-200 w-64 h-14 flex justify-center items-center border-2 rounded-md border-slate-200 hover:bg-slate-200 hover:text-slate-700">
                    <span>Pressure:</span> <span>{weather?.main.pressure} hPa</span> 
                </li>                      
            </ul>
            <footer>
                <button 
                    className="text-1xl text-slate-800 font-bold bg-amber-600 w-64 h-14 flex justify-center items-center rounded-md hover:animate-bouncing" 
                    onClick={changeTemp}>
                        Change to F°/C°
                </button>
            </footer>
        </div>
    </article>
  )
}

export default WeatherCard


