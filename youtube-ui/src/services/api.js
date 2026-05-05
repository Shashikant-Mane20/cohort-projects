export const fetchVideos = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/youtube/videos"
    );
    const data = await res.json();

    return data?.data?.data || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};