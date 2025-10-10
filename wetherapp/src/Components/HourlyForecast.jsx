import React from "react";

function HourlyForecast() {
  const hours = ["10AM", "1PM", "4PM", "7PM", "10PM"];

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Hourly Forecast</h3>
      <div className="flex gap-4 overflow-x-auto">
        {hours.map((hour) => (
          <div key={hour} className="flex flex-col items-center bg-[#2C2C2C] p-3 rounded-lg min-w-[70px]">
            <p className="text-[#B0B0B0]">{hour}</p>
            <img src="https://openweathermap.org/img/wn/03d.png" alt="icon" className="w-10 h-10 my-2" />
            <p className="text-white text-sm">26°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
