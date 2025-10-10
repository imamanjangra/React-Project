import React from "react";
import WetherHook from "../1Hooks/WetherHook";
function SunInfo() {
  const Api_wether_data = WetherHook()
  const sunrise = new Date(Api_wether_data.sys?.sunrise *1000)
  const sunr = sunrise.toLocaleTimeString()

  const sunset = new Date(Api_wether_data.sys?.sunset *1000)
  const suns = sunset.toLocaleTimeString()

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Sunrise & Sunset</h3>
      <div className="flex justify-between text-white">
        <div>
          <p>🌅 Sunrise</p>
          <p className="text-[#FFD700]">{sunr}</p>
        </div>
        <div>
          <p>🌇 Sunset</p>
          <p className="text-[#FFD700]">{suns}</p>
        </div>
      </div>
    </div>
  );
}

export default SunInfo;
