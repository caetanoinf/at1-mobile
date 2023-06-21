import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Card({ title, poster, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Image style={styles.image} source={{ uri: poster }} resizeMode="contain" transition={1000} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 300,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    margin: 5,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    marginTop: 20,
    borderRadius: 8,
    height: 200,
    width: "100%",
  },
});
