import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchNowPlayingMovie } from "../api";
import NowPlayingSlider from "./NowPlayingSlider";

export default function NowPlayingMovie() {
  const { isLoading, error, data } = useQuery({
    queryKey: "NowPlayingMovie",
    queryFn: fetchNowPlayingMovie,
  });
  if (isLoading) return;
  if (error) return;
  console.log(data);
  const nowPlayingMovie = data.results;
  return (
    <div className="min-h-[40vh] bg-stone-950 py-[90px] px-[10px] md:px-[70px] flex flex-col gap-10">
      <h2
        data-aos="fade-up"
        className="text-white text-xl sm:text-2xl md:text-3xl font-bold px-4 mb-4"
      >
        Nowplaying
      </h2>
      <NowPlayingSlider movies={nowPlayingMovie} />
    </div>
  );
}
