import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Movies } from "./screens/Movies";
import { MovieDetail } from "./screens/MovieDetail";
import { getMovies } from "./data/movies";

export default function App() {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies().then((resp) => {
      const sortedMovies = resp.sort((a, b) => b.releaseYear - a.releaseYear);
      setMovies(sortedMovies);
    });
  }, []);

  const handlePress = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <View style={styles.container}>
      {selectedMovie ? <MovieDetail movie={selectedMovie} onBack={handleBack} /> : <Movies movies={movies} onPress={handlePress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
