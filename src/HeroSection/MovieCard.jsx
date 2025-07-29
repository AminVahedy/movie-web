// components/MovieCard.jsx
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-60 md:h-72 object-cover"
      />

      <div className="p-3 flex flex-col justify-between">
        <h3 className="text-base font-semibold truncate">{movie.title}</h3>
        <p className="text-sm text-muted-foreground">
          {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </motion.div>
  );
}
