const UserCard = ({ user }) => {
  const data = user;

  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300">
      

      <div className="flex justify-center">
        <img
          src={data.picture.large}
          alt="user"
          className="w-20 h-20 rounded-full border-2 border-white shadow-md"
        />
      </div>

   
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-white dark:text-white">
          {data.name.first} {data.name.last}
        </h2>

        <p className="text-sm text-gray-300">
          {data.email}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {data.location.city}, {data.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;