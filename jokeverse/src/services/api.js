export const fetchJokes = async (page = 1) => {
  try {
    const res = await fetch(
      `https://api.freeapi.app/api/v1/public/randomjokes?page=${page}&limit=1`
    );

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};