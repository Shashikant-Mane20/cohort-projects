const CatCard = ({ cat }) => {
  if (!cat) {
    return (
      <div className="h-52 bg-gray-200 animate-pulse rounded-2xl" />
    );
  }

  const image = cat.url || cat.image;
  const name = cat.name || "Random Cat ";
  const origin = cat.origin || "Unknown";
  const lifeSpan = cat.life_span || "-";
  const temperament = cat.temperament || "";
  const description = cat.description || "";

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      
   
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

   
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {name}
        </h2>

  
        <span className="inline-block mt-1 px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
          {origin}
        </span>


        <p className="text-xs text-gray-500 mt-2">
          {lifeSpan} years
        </p>

     
        {temperament && (
          <div className="flex flex-wrap gap-1 mt-2">
            {temperament.split(",").slice(0, 3).map((temp, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {temp.trim()}
              </span>
            ))}
          </div>
        )}
      </div> 

   
      {description && (
        <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-gray-700 text-sm p-4 text-center">
          {description.slice(0, 120)}...
        </div>
      )}
    </div>
  );
};

export default CatCard;

