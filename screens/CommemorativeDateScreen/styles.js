import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
    paddingHorizontal: 15, // Adiciona espaçamento lateral
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Adiciona cor para contraste com o fundo
  },
  translucentBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo translúcido
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  translucentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo branco translúcido
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Para sombra no Android
  },
});
