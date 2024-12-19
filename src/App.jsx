import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import MovieDetailPage from "./components/moviedetailpage";
import LandingPage from "./components/landingpage";
import { moviesLoader } from "./loader/movieloaders";
import Favourites from "./components/favourites";
import { MovieProvider } from "./contexts/movie";
import Error from "./components/error";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
          loader: moviesLoader,
          hydrateFallbackElement: <p>Loading.......</p>,
        },
        {
          path: "/detailpage/:id",
          element: <MovieDetailPage />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ];

  let router = createBrowserRouter(routes, {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
      v7_partialHydration: true,
      v7_startTransition: true,
    },
  });

  return (
    <MovieProvider>
      <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
    </MovieProvider>
  );
};

export default App;
