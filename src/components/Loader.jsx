
const Loader = () => {
  return (
    <div className=" z-20 text-slate-50 flex  flex-col justify-evenly items-center gap-2 w-full h-full">
      <img 
      className="h-40 w-40 animate-[fade-in_2s_ease-in-out_infinite]"
      src="\img\Sun.svg" alt="Logo svg" />
      <h1
      className="text-center font-bold text-4xl animate-[fade-in_2s_ease-in-out_infinite]"
      > 
      WeatherApp Loading
      </h1>
      <h2
      className="text-center -mt-10 animate-[fade-in_2s_ease-in-out]"
      >Activate your location for a better experience</h2>
    </div>
  )
}

export default Loader
