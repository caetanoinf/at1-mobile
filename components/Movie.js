import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export function Movie({ title, location, startTime, poster, director, genre, releaseYear, ageRating }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Image style={styles.image} source={{ uri: poster }} transition={1000} />

      <View style={styles.info}>
        <Text>Diretor: {director}</Text>
        <Text>Cinema: {location}</Text>
        <Text>Horário de Início: {startTime}</Text>
        <Text>Gênero: {genre}</Text>
        <Text>Ano de Lançamento: {releaseYear}</Text>
        <Text>Classificação Indicativa: {ageRating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  image: {
    marginTop: 20,
    borderRadius: 8,
    width: "100%",
    height: 500,
    resizeMode: "contain",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
});
