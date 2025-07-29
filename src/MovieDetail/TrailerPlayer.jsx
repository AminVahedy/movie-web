import { useQuery } from "@tanstack/react-query";
import { fetchMovieVideos } from "../api";

export default function TrailerPlayer({ movieId }) {
  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["movieTrailer", movieId],
    queryFn: () => fetchMovieVideos(movieId),
  });

  const trailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  if (isLoading)
    return <p className="text-white text-center">در حال بارگذاری...</p>;

  return trailer ? (
    <div className="aspect-video w-full max-w-4xl mx-auto">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <p className="text-white text-center">تریلری موجود نیست.</p>
  );
}
