export const fetchMeals = async () => {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/meals"
  );
  const data = await res.json();

  return data?.data?.data || [];
};