import { useEffect, useState } from "react";
import { fetchMeals } from "../services/api";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals().then((data) => {
      setMeals(data);
      setLoading(false);
    });
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-black">
      
  
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
        Meals Hub
          </h1>

          <div className="w-full md:w-96">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
     
        {loading && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading delicious meals... 
          </div>
        )}

        {!loading && filteredMeals.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            😢 No meals found for "{search}"
          </div>
        )}

  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMeals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;