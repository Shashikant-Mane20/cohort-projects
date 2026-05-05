import { useRef } from "react";

const SearchBar = ({ search, setSearch }) => {
  const inputRef = useRef(null);

  const clearSearch = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
 
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

 
      <input
        ref={inputRef}
        type="text"
        placeholder="Search meals, cuisines, recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-11 pr-10 py-3 rounded-2xl
                   bg-white/80 dark:bg-gray-900/70
                   backdrop-blur-md
                   border border-gray-200 dark:border-gray-700
                   text-gray-800 dark:text-white
                   placeholder-gray-400
                   shadow-md
                   focus:outline-none focus:ring-2 focus:ring-yellow-400/70
                   transition duration-300"
      />

    
      {search && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     text-gray-400 hover:text-red-400 transition"
          aria-label="Clear search"
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;