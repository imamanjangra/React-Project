import React from 'react';

function RecipeCard({ title, image }) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-100">{title}</h2>
        <span className="text-yellow-400 text-xl cursor-pointer">⭐</span>
      </div>
    </div>
  );
}

export default RecipeCard;
