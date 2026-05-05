const QuoteCard = ({ quote }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      
     
      <p className="text-lg text-gray-800 leading-relaxed italic">
        “{quote.content}”
      </p>

    
      <p className="mt-4 text-sm text-gray-500 text-right">
        — {quote.author}
      </p>
    </div>
  );
};

export default QuoteCard;