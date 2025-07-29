import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fechUpcomingMovie } from "../api";
import UpComingSlider from "./UpComingSlider";

export default function Upcoming() {
  const { isLoading, error, data } = useQuery({
    queryKey: "UpcomingMovie",
    queryFn: fechUpcomingMovie,
  });
  if (isLoading) return;
  if (error) return;
  console.log(data);
  const upComingMovie = data.results;
  return (
    <div className="min-h-[40vh] bg-stone-950 py-[90px] px-[10px] md:px-[70px] flex flex-col gap-10">
      <h2
        data-aos="fade-up"
        className="text-white text-xl sm:text-2xl md:text-3xl font-bold px-4 mb-4"
      >
        Upcoming
      </h2>
      <UpComingSlider movies={upComingMovie} />
    </div>
  );
}
