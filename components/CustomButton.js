import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d89ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center', // Centraliza o texto no botão
    width: '70%',
  },
  buttonText: {
    color: '#fff', // Texto branco
    fontSize: 16, // Tamanho de fonte ajustado
    fontWeight: 'bold',
  },
});
