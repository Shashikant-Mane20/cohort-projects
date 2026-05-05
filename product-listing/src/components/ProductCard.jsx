const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      
  
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover"
        />

       
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{product.discountPercentage}%
        </span>
      </div>


      <div className="p-3">
        
      
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          {product.brand}
        </p>

   
        <p className="mt-2 text-lg font-bold text-gray-900">
          ₹{product.price}
        </p>

      
        <p className="text-xs text-yellow-500 mt-1">
          ⭐ {product.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;