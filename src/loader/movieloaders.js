import instance from "../services/instance";

const moviesLoader = async (searchTerm = "infinity war") => {
  try {
    const response = await instance.get("/", {
      params: {
        apikey: "2847fd3c",
        s: searchTerm.trim() === "" ? "infinity war" : searchTerm,
      },
    });
    const data = response.data;
    return data.Response === "True" ? data.Search : [];
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
};

const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await instance.get("/", {
      params: {
        apikey: "2847fd3c",
        i: imdbID,
        plot: "full",
      },
    });
    const data = response.data;
    return data.Response === "True" ? data : null;
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    return null;
  }
};

export { moviesLoader, fetchMovieDetails };
