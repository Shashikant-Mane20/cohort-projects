import { formatViews, timeAgo } from "../utils/format";

const VideoCard = ({ video }) => {
  const data = video.items;

  return (
    <div className="cursor-pointer hover:scale-105 transition duration-200">
      <img
        src={data.snippet.thumbnails.high.url}
        alt={data.snippet.title}
        className="w-full rounded-xl"
      />

      <div className="mt-2">
        <h2 className="font-semibold text-sm line-clamp-2">
          {data.snippet.title}
        </h2>

        <p className="text-gray-600 text-xs">
          {data.snippet.channelTitle}
        </p>

        <p className="text-gray-500 text-xs">
          {formatViews(data.statistics.viewCount)} views •{" "}
          {timeAgo(data.snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;