import React, { useEffect, useState } from 'react';
import SearchAPI from '../Hooks/SearchAPI';
import js from '@eslint/js';



function RecipeCard() {

 const recepes = [];

 for(let i = 0 ; i<=10 ; i++){
  recepes.push(SearchAPI())
 }

 console.log(recepes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
      {recepes.map((data, i) => (
        <div
          className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer w-full"
          key={i} 
          
        >
          <img
            className="w-full h-48 object-cover"
            src={`https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg`}
            alt={`Recipe ${i}`}
          />
          <div className="p-4 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-gray-100 truncate"
            
            >
              Recipe Title {i + 1}
            </h2>
            <span className="text-yellow-400 text-xl cursor-pointer">⭐</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
