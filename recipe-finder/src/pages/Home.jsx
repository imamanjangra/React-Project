
import RecipeCard from '../components/RecipeCard';

function Home() {
  const recipes = [
    { title: 'Spaghetti Arrabiata', image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
    { title: 'Chicken Curry', image: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' },
    { title: 'Greek Salad', image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg' },
    { title: 'Pancakes', image: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full max-w-xl p-3 rounded-l-lg border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600">Search</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((r, index) => (
          <RecipeCard key={index} title={r.title} image={r.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
