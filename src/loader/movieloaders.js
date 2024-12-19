const moviesLoader = async () => {
  try {
    const response = await fetch(
      "https://omdbapi.com/?apikey=2847fd3c&type=movie&s=infinity%20war"
    );
    const data = await response.json();
    console.log(data);
    return data.Search;
  } catch (error) {
    return null;
  }
};

export default moviesLoader;
