import { createContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const movieData = {};

  return (
    <MovieContext.Provider value={empty}>{children}</MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
