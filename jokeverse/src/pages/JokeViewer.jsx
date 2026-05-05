import { useEffect, useState } from "react";
import { fetchJokes } from "../services/api";
import JokeCard from "../components/JokeCard";

const JokeViewer = () => {
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadJokes = async () => {
    try {
      setLoading(true);
      const data = await fetchJokes(page);
      setJokes(data?.data || []);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJokes();
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6">
      
     
      <h1 className="text-3xl font-bold text-center mb-20 text-gray-800">
        Jokes Viewer
      </h1>


      {loading && (
        <p className="text-center text-gray-500">Loading jokes...</p>
      )}

  
      <div className="max-w-2xl mx-auto space-y-4">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded bg-white disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-medium">{page}</span>

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

export default JokeViewer;