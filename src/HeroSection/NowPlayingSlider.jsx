import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MovieSlider({ movies }) {
  return (
    <div data-aos="fade-up" className="w-full px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        spaceBetween={16}
        navigation
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
          //   1536: { slidesPerView: 7 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 md:h-70 object-cover"
              />
              <div className="p-2 text-white">
                <h3 className="text-sm font-semibold truncate">
                  {movie.title}
                </h3>
                <p className="text-xs text-gray-300">{movie.release_date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
