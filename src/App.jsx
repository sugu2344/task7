import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import MovieDetailPage from "./components/moviedetailpage";
import LandingPage from "./components/landingpage";
import moviesLoader from "./loader/movieloaders";

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
          path: "/detailpage",
          element: <MovieDetailPage />,
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
    <movieProvider>
      <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
    </movieProvider>
  );
};

export default App;
