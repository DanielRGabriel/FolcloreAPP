import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function PersonagensCard({ nome, onPress }) {
  return (
    <View style={styles.card}>
      {/* Botão estilizado com TouchableOpacity */}
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
