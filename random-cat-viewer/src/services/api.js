export const fetchCat = async () => {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/cats/cat/random"
  );
  const data = await res.json();

  return data?.data || null;
};