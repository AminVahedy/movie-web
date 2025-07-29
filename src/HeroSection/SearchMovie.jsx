import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchMovieBySearch } from "../api";
import Loading from "../Loading";
import MovieGrid from "./MovieGrid";

// import Loading from "../Loading";

export default function SearchMovie() {
  const [search, setSearch] = useState("popular");
  const [query, setQuary] = useState(search);
  const { isLoading, error, data } = useQuery({
    queryKey: ["searchmovie", query],
    queryFn: () => fetchMovieBySearch(query),
    enabled: !!query,
  });
  if (isLoading) return <Loading />;
  if (error) return console.log(error);
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;

    setQuary(search);
  }

  const movieItems = data.results;
  console.log("data    " + movieItems);
  return (
    <div className="min-h-screen bg-stone-950 py-[90px] px-[10px] md:px-[70px] flex flex-col  gap-8 ">
      <form
        data-aos="fade-right"
        onSubmit={handleSubmit}
        className="w-full flex justify-end gap-2"
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 border border-stone-600 rounded-md px-3"
        />
        <button
          type="submit"
          className="bg-[red] text-[#fff] px-6 py-2 rounded-lg transition"
        >
          Submit
        </button>
      </form>
      <MovieGrid movieItems={movieItems} />
    </div>
  );
}
