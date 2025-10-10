import React from "react";
import {  useSelector } from "react-redux";

function CurrentWeather() {
  const wether = useSelector(state => state.wether)
   console.log(wether)


  
  return (
    <div className="w-full max-w-md bg-[#1E1E1E] rounded-lg p-6 mb-8 shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{wether.text}, Country</h2>
        <p className="text-4xl sm:text-5xl font-bold text-[#FFD700]">25°C</p>
        <p className="text-[#B0B0B0] text-sm sm:text-base">Sunny</p>
      </div>
      <div>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
          className="w-20 h-20 sm:w-24 sm:h-24"
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
