// components/PersonagensCard/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 5, // Reduzir o padding vertical para diminuir o espaço entre os elementos
    marginBottom: 8, // Diminuir o espaço entre os cards (ajuste o valor conforme necessário)
    alignItems: 'center', // Alinhar verticalmente o conteúdo
  },
  button: {
    backgroundColor: '#007BFF', // Cor de fundo do botão
    paddingVertical: 10, // Espaçamento dentro do botão
    paddingHorizontal: 20, // Espaçamento dentro do botão
    borderRadius: 25, // Bordas arredondadas no botão
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // Cor do texto no botão
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1, // Faz com que a caixa ocupe mais espaço disponível
    minWidth: 250, // Tamanho mínimo da caixa
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Cor branca para o nome
  },
  description: {
    fontSize: 14,
    color: '#fff', // Cor branca para a descrição, se necessária
  },
});
