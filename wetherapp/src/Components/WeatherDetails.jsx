import React from "react";
import WetherHook from "../1Hooks/WetherHook";
function WeatherDetails() {

const Api_wether_data = WetherHook()

  const details = [
    { label: "Wind Speed", value: Api_wether_data.wind?.speed + " Km" },
    { label: "Humidity", value: Api_wether_data.main?.humidity },
    { label: "Pressure", value: Api_wether_data.main?.pressure},
    { label: "Visibility", value: Api_wether_data.visibility/1000 + " km" },
  ];

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Weather Details</h3>
      <div className="grid grid-cols-2 gap-3">
        {details.map((item) => (
          <div key={item.label} className="text-[#E0E0E0]">
            <p className="font-semibold">{item.label}</p>
            <p className="text-[#B0B0B0]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDetails;
