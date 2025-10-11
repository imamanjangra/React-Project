import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcity } from "../Features/WetherSlice";

function Favorites() {
  const [cities, setCities] = useState(["Delhi", "Mumbai", "London", "Tokyo"]);

  const [add , setAdd] = useState("")
  console.log(add)

  const dispatch = useDispatch()

  const saveHandle=(city) => (
    dispatch(addcity(city))
  )
  const value = new String(add)
  const handleAdd = () => {
    setCities([...cities , value])
    setAdd(" ")
    console.log(value)
  }

  const deleteCity = (city) => {
    setCities(cities.filter(item => item != city))
  }

  return (
    <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Saved Locations</h3>
      <ul className="text-white">
        {cities.map((city) => (
          <li
      key={city}
      className="border-b border-[#333] py-1 flex justify-between items-center"
      onClick={() => saveHandle(city)}
    >
      <span>{city}</span>
      <button 
      onClick={() => deleteCity(city)}
       className=" text-white px-2 py-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
      </button>
    </li>
           
        ))}
      </ul>
        <div className="border-b border-[#333] py-1 ">
      <input className="border rounded" type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
     
      <button onClick={handleAdd}>
        +
      </button>
      </div>
    </div>
  );
}

export default Favorites;
