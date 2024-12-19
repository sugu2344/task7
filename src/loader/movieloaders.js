import axios from "axios";

const moviesLoader = async () => {
  try {
    const response = await axios.get(
      "https://omdbapi.com/?apikey=2847fd3c&type=movie&s=infinity%20war"
    );
    const data = response.data;
    console.log(data);
    return data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};

export default moviesLoader;
