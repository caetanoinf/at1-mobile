import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { movies } from '../data/movies';

export function Movies({ onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes em cartaz</Text>

      <FlatList
        data={movies}
        renderItem={({item}) => <Card title={item.title} poster={item.poster} onPress={() => onPress(item)} />}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
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
  title: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 30
  }
});
