import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {

  const {name} = useParams();
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe Details</h1>
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-xl mx-auto">
        <img className="w-full h-64 object-cover rounded-lg mb-4" src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="Recipe" />
        <h2 className="text-2xl font-semibold mb-2 text-gray-100">Spaghetti Arrabiata</h2>
        <h3 className="font-semibold text-gray-200">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Spaghetti</li>
          <li>Tomatos</li>
          <li>Garlic</li>
          <li>Olive oil</li>
          <li>Chili flakes</li>
        </ul>
        <h3 className="font-semibold text-gray-200">Instructions:</h3>
        <p className="text-gray-300">Boil spaghetti. Saute tomato & garlic. Mix spaghetti with sauce. Serve hot.</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
