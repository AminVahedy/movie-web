import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { fechData } from "./api";
import Loading from "./Loading";
import HeroSlider from "./HeroSection/HeroSlider";

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["hero"],
    queryFn: fechData,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>خطا: {error.message}</p>;
  const moviesData = data.results;
  return <HeroSlider moviesData={moviesData} />;
}

export default App;
