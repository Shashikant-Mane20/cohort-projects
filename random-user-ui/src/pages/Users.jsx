import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      
      <h1 className="text-3xl font-semibold text-white mb-6 text-center">
        Random Users 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;