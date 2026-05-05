export const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts"
    );
    const data = await res.json();
    return data?.data?.data || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};