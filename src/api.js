const apiKey = "5d66d7bd77d9574ec397d87b529ef66e";
export async function fechData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("خطا در دریافت دیتا");
  return await res.json();
}
