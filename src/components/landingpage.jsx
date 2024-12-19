import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { moviesLoader } from "../loader/movieloaders";
import { useMovieContext } from "../contexts/movie";

const LandingPage = () => {
  const initialMovies = useLoaderData();
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const { addToFavourites } = useMovieContext();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setMovies(initialMovies);
      return;
    }

    const searchedMovies = await moviesLoader(value);
    applyFilter(searchedMovies, filter);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    applyFilter(movies, value);
  };

  const applyFilter = (moviesList, type) => {
    if (type === "all") {
      setMovies(moviesList);
    } else {
      const filteredMovies = moviesList.filter((movie) => movie.Type === type);
      setMovies(filteredMovies);
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      const loadedMovies = await moviesLoader(searchTerm);
      applyFilter(loadedMovies, filter);
    };
    loadMovies();
  }, [searchTerm, filter]);

  const handleViewDetails = (movie) => {
    navigate(`/detailpage/${movie.imdbID}`, {
      state: { imdbID: movie.imdbID },
    });
  };

  const handleAddToFavorites = (movie) => {
    addToFavourites(movie);
  };

  return (
    <div className="py-10 my-3 mx-3">
      <div className="bg-[#F7F7F2]">
        <div className="pt-3 pb-3 flex justify-center items-center gap-4">
          <input
            className="w-[60%] p-2 border border-spacing-2"
            placeholder="Search by Movie Name...."
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="p-2 border border-spacing-2"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>

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
                    <button
                      onClick={() => handleViewDetails(movie)}
                      className="border-2 p-2 rounded-xl text-[#FF3562] hover:bg-black hover:text-white cursor-pointer mt-auto"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleAddToFavorites(movie)}
                      className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer mt-auto"
                    >
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
