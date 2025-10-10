import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addcity } from "../Features/WetherSlice";

function SearchBar() {
  
  const [value , setValue] = useState("") 
  const dispatch = useDispatch()
  
  const takeInput = () => {
    
      console.log(value)
      dispatch(addcity(value))
      setValue('')
    }
    
  return (
    <div className="mb-8 w-full max-w-md flex flex-col sm:flex-row gap-2">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Enter city"
        className="flex-1 p-3 rounded-md bg-[#1E1E1E] text-[#E0E0E0] border border-[#555555] outline-none"
      />
      <button
      onClick={takeInput}
      className="p-3 bg-[#333333] text-[#E0E0E0] rounded-md hover:bg-[#444444]">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
