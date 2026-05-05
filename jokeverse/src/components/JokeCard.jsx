const JokeCard = ({ joke }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      
      <p className="text-gray-800 text-sm leading-relaxed">
        {joke.content}
      </p>

      {joke.categories.length > 0 && (
        <span className="inline-block mt-3 text-xs px-2 py-1 bg-gray-100 rounded">
          {joke.categories[0]}
        </span>
      )}
    </div>
  );
};

export default JokeCard;