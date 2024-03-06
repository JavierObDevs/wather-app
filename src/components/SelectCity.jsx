import React, { useRef } from 'react'

const SelectCity = ({setInputValue}) => {
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  return (
    <form  
        className="z-20 flex space-x-3 -mt-20 md:w-full items-center justify-center md:scale-105"
        onSubmit={handleSubmit}>
          <input 
            className="text-slate-700 placeholder:text-slate-700 bg-slate-300 bg-opacity-70 h-8 w-36 rounded-lg shadow-lg shadow-slate-950/20 pl-2 md:w-80"
            ref={inputSearch}
            type="text" 
            placeholder='Madrid España'
          />
          <button
            className=" text-xs bg-amber-600 h-8 w-24 rounded-lg font-bold text-slate-800 shadow-lg shadow-slate-950/20 md:w-52">
              Change city
          </button>
    </form>
  )
}

export default SelectCity