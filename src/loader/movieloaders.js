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
    console.log(data);
    return data.Response === "True" ? data.Search : [];
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
};

export default moviesLoader;
