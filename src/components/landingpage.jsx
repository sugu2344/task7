import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import moviesLoader from "../loader/movieloaders";

const LandingPage = () => {
  const initialMovies = useLoaderData();
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setMovies(initialMovies);
      return;
    }

    const searchedMovies = await moviesLoader(value);
    setMovies(searchedMovies);
  };

  useEffect(() => {
    const loadMovies = async () => {
      const loadedMovies = await moviesLoader(searchTerm);
      setMovies(loadedMovies);
    };
    loadMovies();
  }, [searchTerm]);
  return (
    <div className="py-10 my-3 mx-3">
      <div className="bg-[#F7F7F2]">
        {/* Search Input */}
        <div className="pt-3 pb-3 flex justify-center">
          <input
            className="w-[60%] p-2 border border-spacing-2"
            placeholder="Search by Movie Name...."
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Movies Card */}
        <div className="flex flex-wrap gap-4 p-5 bg-[#0D1F2D] py-6 mx-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://placehold.co/600x400"
                  }
                  alt={movie.Title}
                  className="h-60 object-cover"
                />
                <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
                  <h1 className="font-bold text-2xl">{movie.Title}</h1>
                  <p className="text-justify flex justify-center">
                    {movie.Year}
                  </p>
                  <div className="flex space-x-2">
                    <button className="border-2 p-2 rounded-xl text-[#FF3562] hover:bg-black hover:text-white cursor-pointer mt-auto">
                      View Details
                    </button>
                    <button className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer mt-auto">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
