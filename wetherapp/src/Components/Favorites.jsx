import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcity } from "../Features/WetherSlice";

function Favorites() {
 
  const cities = ["Delhi", "Mumbai", "London", "Tokyo"];

  const dispatch = useDispatch()

  const saveHandle=(city) => (
    dispatch(addcity(city))
  )

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Saved Locations</h3>
      <ul className="text-white">
        {cities.map((city) => (
          <li
          onClick={() => saveHandle(city)}
           key={city} className="border-b border-[#333] py-1">{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
