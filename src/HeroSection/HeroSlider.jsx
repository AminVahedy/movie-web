import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const baseUrl = "https://image.tmdb.org/t/p/w500";
export default function HeroSlider({ moviesData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(moviesData);
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 5000 }}
      loop
      className="h-screen"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {moviesData.slice(0, 5).map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${baseUrl}${slide.backdrop_path})`,
            }}
          >
            <div className="bg-black/40 p-6 md:p-12 rounded-xl text-white w-full max-w-7xl flex flex-col md:flex-row gap-8 items-center md:items-stretch">
              <motion.div
                key={activeIndex === index ? `content-${index}` : undefined}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-between"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg mb-6 line-clamp-6">
                  {slide.overview}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                    دکمه اول
                  </button>
                  <button className="bg-transparent border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
                    دکمه دوم
                  </button>
                </div>
              </motion.div>

              <motion.div
                key={activeIndex === index ? `card-${index}` : undefined}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden md:block w-full md:w-1/2"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 h-full flex items-center justify-center">
                  <img
                    src={`${baseUrl}${slide.poster_path}`}
                    alt="Card"
                    className="w-full h-80 object-cover rounded-md"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
