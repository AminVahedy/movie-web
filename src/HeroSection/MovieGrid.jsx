// components/MovieGrid.jsx
import MovieCard from "./MovieCard";

export default function MovieGrid({ movieItems }) {
  if (!movieItems || movieItems.length === 0) {
    return (
      <div
        data-aos="fade-up"
        className="min-h-[50vh] flex items-center justify-center"
      >
        <span className="text-white text-lg text-center">Movie not found.</span>
      </div>
    );
  }

  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4"
    >
      {movieItems.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
