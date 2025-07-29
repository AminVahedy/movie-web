const apiKey = "5d66d7bd77d9574ec397d87b529ef66e";
export async function fechData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("خطا در دریافت دیتا");
  return await res.json();
}

export async function fetchMovieBySearch(quary) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${quary}&api_key=${apiKey}
`
  );
  if (!res.ok) throw new Error("خطا در دریافت دیتا");
  return await res.json();
}

export async function fechUpcomingMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  );
  if (!res.ok) throw new Error("خطا در دریافت دیتا");
  return await res.json();
}

export async function fetchNowPlayingMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );
  if (!res.ok) throw new Error("خطا در دریافت دیتا");
  return await res.json();
}

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  return res.json();
};

export const fetchMovieVideos = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  return data.results;
};
