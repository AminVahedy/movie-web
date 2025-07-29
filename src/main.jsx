import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./MovieDetail/MovieDetail.jsx";

const quaryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={quaryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
