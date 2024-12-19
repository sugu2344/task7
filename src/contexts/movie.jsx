import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (movie) => {
    setFavourites((prev) =>
      prev.some((fav) => fav.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const removeFromFavourites = (imdbID) => {
    setFavourites((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <MovieContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
