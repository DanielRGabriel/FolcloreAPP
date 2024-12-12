import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo semitransparente
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginTop: 30,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333', // Cor do texto de explicação
    lineHeight: 24, // Para melhorar a legibilidade
    textAlign: 'center', // Alinha o texto ao centro
    marginBottom: 20, // Adiciona um pouco de espaço abaixo do texto
  },
});
