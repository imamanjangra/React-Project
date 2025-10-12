import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addcity } from "../Features/WetherSlice";

function Favorites() {
  const [cities, setCities] = useState(["Delhi", "Mumbai", "London", "Tokyo"]);
  const [add, setAdd] = useState("");

  const dispatch = useDispatch();

  const saveHandle = (city) => dispatch(addcity(city));

  const value = new String(add);
  const handleAdd = () => {
    if (value.trim() !== "") {
      setCities([...cities, value]);
      setAdd("");
    }
  };

  const deleteCity = (city) => {
    setCities(cities.filter((item) => item !== city));
  };

  useEffect(() => {
    const wetherLocal = JSON.parse(localStorage.getItem("wether"));
    if ( wetherLocal.length > 0) {
      setCities(wetherLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wether", JSON.stringify(cities));
  }, [cities]);

  return (
    <div className="bg-[#1E1E1E] p-5 rounded-2xl shadow-lg mb-6 border border-[#2E2E2E]  ">
      <h3 className="text-xl font-semibold text-[#FFD700] mb-4 text-center tracking-wide">
         Saved Locations
      </h3>

      <ul className="text-white space-y-2">
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => saveHandle(city)}
            className="flex justify-between items-center bg-[#2C2C2C] hover:bg-[#3A3A3A] px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
          >
            <span className="text-sm font-medium">{city}</span>
            <button
              onClick={() => {
                deleteCity(city);
              }}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          placeholder="Add new city..."
          className="flex-grow bg-[#2C2C2C] text-white px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#FFD700]/50 placeholder-gray-400"
        />
        <button
          onClick={handleAdd}
          className="bg-[#FFD700] text-black font-bold px-4 py-2 rounded-lg "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Favorites;
