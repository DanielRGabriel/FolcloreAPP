import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  quizBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    width: '100%',
    alignItems: 'center', // Alinha o conteúdo do botão no centro
    justifyContent: 'center', // Garante que o texto também seja centralizado
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Certifica-se que o texto está centralizado
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4caf50',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
  },
  finalScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'column',
    width: '100%',
  },
  gif: {
    width: 200, // Ajuste o tamanho conforme necessário
    height: 200,
    marginTop: 80,
  },
});

export default styles;
