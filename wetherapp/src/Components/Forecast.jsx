import React from "react";

function Forecast() {
 const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">7-Day Forecast</h3>
      <div className="flex overflow-x-auto gap-4">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center bg-[#2C2C2C] p-3 rounded-lg min-w-[90px]">
            <p className="text-[#B0B0B0]">{day}</p>
            <img src="https://openweathermap.org/img/wn/02d.png" alt="icon" className="w-10 h-10 my-2" />
            <p className="text-white text-sm">25°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
