import React from "react";

function Forecast() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="w-full max-w-md overflow-x-auto">
      <div className="flex gap-4">
        {days.map((day) => (
          <div
            key={day}
            className="flex flex-col items-center bg-[#1E1E1E] p-4 rounded-lg shadow-md min-w-[80px] sm:min-w-[100px]"
          >
            <p className="text-[#B0B0B0] text-sm sm:text-base">{day}</p>
            <img
              src="https://openweathermap.org/img/wn/01d.png"
              alt="icon"
              className="w-12 h-12 sm:w-16 sm:h-16 my-2"
            />
            <p className="text-[#FFD700] text-sm sm:text-base">25°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
