const MealCard = ({ meal }) => {
  const data = meal;

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
      
    
      <div className="overflow-hidden">
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>

     
      <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/30">
        {data.strCategory}
      </div>

     
      <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-3 py-1 rounded-full">
        {data.strArea}
      </div>

  
      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="text-lg font-semibold line-clamp-2 group-hover:text-yellow-400 transition">
          {data.strMeal}
        </h2>

        <p className="text-xs text-gray-300 mt-1">
          Delicious & trending recipe 
        </p>
      </div>
    </div>
  );
};

export default MealCard;