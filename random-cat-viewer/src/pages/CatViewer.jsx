import { useEffect, useState } from "react";
import { fetchCat } from "../services/api";
import CatCard from "../conponents/CatCard";

const CatViewer = () => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCat = async () => {
    setLoading(true);
    const data = await fetchCat();
    setCat(data);
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCat();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-black p-6">
      
  
      <h1 className="text-3xl font-semi mb-6 text-gray-800 dark:text-white">
    Random Cat Viewer
      </h1>

    
      <CatCard cat={cat} loading={loading} />

  
      <button
        onClick={getCat}
        className="mt-6 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
      >
        Get New Cat
      </button>
    </div>
  );
};

export default CatViewer;