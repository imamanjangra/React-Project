import React from 'react';
import RecipeCard from '../components/RecipeCard';

function Favorites() {
  const favorites = [
    { title: 'Spaghetti Arrabiata', image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
    { title: 'Chicken Curry', image: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((r, index) => (
          <RecipeCard key={index} title={r.title} image={r.image} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
