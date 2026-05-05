import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { fetchVideos } from "../services/api";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };

    getVideos();
  }, []);

  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default Home;