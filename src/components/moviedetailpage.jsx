import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../loader/movieloaders";

const MovieDetailPage = () => {
  const location = useLocation();
  const { imdbID } = location.state || {};

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const detailedMovie = await fetchMovieDetails(imdbID);
      setMovie(detailedMovie);
    };
    if (imdbID) {
      loadMovieDetails();
    }
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#0D1F2D] px-8 py-8 mt-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-24">
        <div className="w-full md:w-[700px] mb-8 md:mb-0">
          <img
            className="w-full object-cover"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://placehold.co/600x400"
            }
            alt={movie.Title}
          />
        </div>
        <div className="w-full md:w-auto">
          <p>
            <strong>Title:</strong> {movie.Title}
          </p>
          <p>
            <strong>Release Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre || "N/A"}
          </p>
          <p>
            <strong>Plot Summary:</strong> {movie.Plot || "N/A"}
          </p>
          <p>
            <strong>Rating:</strong> {movie.imdbRating || "N/A"}
          </p>
          <p>
            <strong>Cast:</strong> {movie.Actors || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
