import React from "react";
import { useMovieContext } from "../contexts/movie";

const Favourites = () => {
  const { favourites, removeFromFavourites } = useMovieContext();

  return (
    <div className="pt-16">
      <div>
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <div key={movie.imdbID} className="bg-white mb-2 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between px-3 py-3 items-center sm:items-start">
                <div className="flex flex-row items-center mb-2 sm:mb-0 sm:w-[35%]">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://placehold.co/600x400"
                    }
                    alt={movie.Title}
                    className="w-12 h-12 mr-3"
                  />
                  <h6 className="text-base sm:text-lg">{movie.Title}</h6>
                </div>
                <button
                  onClick={() => removeFromFavourites(movie.imdbID)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm sm:w-[10%]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5 text-xl text-blue-400">
            Add your Favourites ........
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
