import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function Card({ title, poster, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Image
          style={styles.image}
          source={{ uri: poster }}
          resizeMode="contain"
          transition={1000}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    borderRadius: 8,
    width: '100%',
    height: 250,
  },
});
