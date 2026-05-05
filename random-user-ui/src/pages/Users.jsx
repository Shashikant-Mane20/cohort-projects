// pages/Users.jsx

import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";

const Users = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadUser(page);
  }, [page]);

  const loadUser = async (currentPage) => {
    const data = await fetchUsers(currentPage);
    setUser(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center gap-6">
      
      <h1 className="text-3xl font-semibold text-white text-center">
        Random User Viewer
      </h1>

      {/* 👤 SINGLE USER */}
      {user && <UserCard user={user} />}

      {/* 🔘 NAVIGATION */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-white font-semibold">
          User #{page}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Users;