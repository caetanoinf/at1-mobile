import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Card } from "../components/Card";

export function Movies({ movies, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes em cartaz</Text>

      <FlatList
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={movies}
        renderItem={({ item }) => <Card title={item.title} poster={item.poster} onPress={() => onPress(item)} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
