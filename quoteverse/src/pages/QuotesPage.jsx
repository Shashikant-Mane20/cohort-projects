import { useEffect, useState } from "react";
import { fetchQuotes } from "../services/api";
import QuoteCard from "../components/QuoteCard";

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadQuotes = async () => {
    try {
      setLoading(true);
      const data = await fetchQuotes(page);
      setQuotes(data?.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6">
      
    
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Quotes Gallery
      </h1>

  
      {loading && (
        <p className="text-center text-gray-500">Loading quotes...</p>
      )}

   
      <div className="max-w-3xl mx-auto space-y-6">
        {quotes.map((quote) => (
          <QuoteCard key={quote._id} quote={quote} />
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

export default QuotesPage;