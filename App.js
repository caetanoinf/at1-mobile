import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Movies } from './screens/Movies';
import { MovieDetail } from './screens/MovieDetail';

export default function App() {
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handlePress = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <View style={styles.container}>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} onBack={handleBack} />
      ) : (
        <Movies onPress={handlePress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
