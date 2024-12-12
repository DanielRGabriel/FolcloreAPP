import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a tela
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue', // Cor para o link
    textDecorationLine: 'underline', // Sublinha o texto
  },
});
