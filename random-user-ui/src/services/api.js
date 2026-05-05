export const fetchUsers = async () => {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/randomusers"
  );
  const data = await res.json();

  return data?.data?.data || [];
};