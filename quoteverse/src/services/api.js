export const fetchQuotes = async (page = 1) => {
  try {
    const res = await fetch(
      `https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=1`
    );
    const data = await res.json();
    return data?.data || null;
  } catch (err) {
    console.error("Error fetching quotes:", err);
    return null;
  }
};