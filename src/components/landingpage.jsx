import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { moviesLoader } from "../loader/movieloaders";
import { useMovieContext } from "../contexts/movie";

const LandingPage = () => {
  const initialMovies = useLoaderData();
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;
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
    applyFilter(searchedMovies, filterType);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterType(value);
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
      applyFilter(loadedMovies, filterType);
    };
    loadMovies();
  }, [searchTerm, filterType]);

  const handleViewDetails = (movie) => {
    navigate(`/detailpage/${movie.imdbID}`, {
      state: { imdbID: movie.imdbID },
    });
  };

  const handleAddToFavorites = (movie) => {
    addToFavourites(movie);
  };

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-around gap-4 p-5 bg-[#0D1F2D] py-6 mx-4">
          {currentMovies.length > 0 ? (
            currentMovies.map((movie) => (
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
                  {/* <p className="text-justify flex justify-center">
                    {movie.Year}
                  </p> */}
                  <div className="flex space-x-2 justify-around">
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

        <div className="flex justify-center mt-4 mb-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 rounded-xl ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
