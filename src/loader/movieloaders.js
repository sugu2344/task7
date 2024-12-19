import instance from "../services/instance";

const moviesLoader = async () => {
  try {
    const response = await instance.get("/", {
      params: {
        apikey: "2847fd3c",
        // type: "movie",
        s: "infinity war",
      },
    });
    const data = response.data;
    console.log(data);
    return data.Search;
  } catch (error) {
    console.error("Error fetching :", error.message);
    return null;
  }
};

export default moviesLoader;
