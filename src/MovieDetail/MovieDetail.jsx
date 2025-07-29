import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TrailerPlayer from "./TrailerPlayer";
import { fetchMovieDetails } from "../api";

export default function MovieDetail() {
  const { id } = useParams();
  const { data: movie, isLoading } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) return <p className=" text-center">در حال بارگذاری...</p>;

  return (
    <div className="p-4 bg-stone-950 space-y-6">
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* افکت محو به پایین (fade to next section) */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-stone-950 pointer-events-none" />
      </section>
      <section></section>
    </div>
  );
}

// <h1 className="text-3xl font-bold">{movie.title}</h1>
//       <p className="text-gray-600">{movie.overview}</p>
//       <p>تاریخ انتشار: {movie.release_date}</p>

//       {/* پوستر */}
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="w-full max-w-md rounded-lg"
//       />

//       {/* تریلر در پایین صفحه */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">تریلر</h2>
//         <TrailerPlayer movieId={id} />
//       </div>
