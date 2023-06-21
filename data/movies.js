export const getMovies = async () => {
  return fetch("https://api.jsonbin.io/v3/b/649379aeb89b1e2299b2f4f8")
    .then((response) => response.json())
    .then((json) => {
      return json.record;
    });
};
