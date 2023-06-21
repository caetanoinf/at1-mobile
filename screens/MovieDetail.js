import React from 'react'
import { View, Button } from 'react-native'
import { Movie } from '../components/Movie'

export function MovieDetail({ movie, onBack }) {
  return (
    <View>
      <Button title="Voltar" onPress={onBack} />
      
      <Movie {...movie} />
    </View>
  )
}