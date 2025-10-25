
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { useDispatch  } from 'react-redux';
import { addDish } from '../Feature/RecipeSlice';
import SearchAPI from '../Hooks/SearchAPI';

function Home() {



  const [value , setValue] = useState(""); 
  const dispatch = useDispatch();
  // const RecipeName = useSelector(state => state.Recipe)
  const recipesData = SearchAPI() ;

  const handleSubmit = () => {
    console.log(value)
    dispatch(addDish(value))
    console.log(recipesData)
  }

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search recipes..."
          className="w-full max-w-xl p-3 rounded-l-lg border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button 
          onClick={handleSubmit}
         className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600"
         >Search</button>
      </div>

      <div className="w-full max-w">
        <RecipeCard/>
      </div>
    </div>
  );
}

export default Home;
