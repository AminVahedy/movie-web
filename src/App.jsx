import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { fechData } from "./api";
import Loading from "./Loading";
import HeroSlider from "./HeroSection/HeroSlider";
import Header from "./Header";
import SearchMovie from "./HeroSection/SearchMovie";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Upcoming from "./HeroSection/Upcoming";
import NowPlayingMovie from "./HeroSection/NowPlayingMovie";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدت زمان انیمیشن (ms)
      easing: "ease-out", // نوع انیمیشن
      once: false, // فقط بار اول اجرا شه
    });
  }, []);
  const { isLoading, error, data } = useQuery({
    queryKey: ["hero"],
    queryFn: fechData,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>خطا: {error.message}</p>;

  const moviesData = data.results;
  return (
    <>
      <Header />
      <HeroSlider moviesData={moviesData} />
      <SearchMovie />
      <Upcoming />
      <NowPlayingMovie />
      <Footer />
    </>
  );
}

export default App;
