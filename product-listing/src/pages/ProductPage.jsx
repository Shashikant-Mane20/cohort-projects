import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async (pageNumber) => {
    const res = await fetch(
      `https://api.freeapi.app/api/v1/public/randomproducts?page=${pageNumber}&limit=10`
    );
    const data = await res.json();
    setProducts(data.data.data);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      <h1 className="text-2xl font-bold text-center mb-6">
        Product Listing
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

   
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded bg-white disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">{page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded bg-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;