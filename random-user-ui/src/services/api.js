// services/api.js

export const fetchUsers = async (page = 1) => {
  const res = await fetch(
    `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=1`
  );

  const data = await res.json();

  return data?.data?.data[0]; // single user
};