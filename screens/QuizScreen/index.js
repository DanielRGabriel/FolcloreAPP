import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { quiz1, quiz2, quiz3 } from '../../data/questions';
import styles from './styles';

const QuizScreen = ({ route, navigation }) => {
  const { quizNumber } = route.params || {};
  const [quiz, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [showGif, setShowGif] = useState(false); // Estado para controlar o GIF

  // Carrega o quiz baseado no número selecionado
  useEffect(() => {
    if (quizNumber === 1) setQuiz(quiz1);
    else if (quizNumber === 2) setQuiz(quiz2);
    else if (quizNumber === 3) setQuiz(quiz3);
  }, [quizNumber]);

  // Lida com a seleção de uma resposta
  const handleAnswerSelection = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const correctAnswer = quiz[currentQuestionIndex].answer;
    if (option === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Marca o quiz como finalizado na última pergunta
    if (currentQuestionIndex === quiz.length - 1) {
      setIsQuizFinished(true);

      // Exibe o GIF por 3 segundos antes de mostrar o placar
      setShowGif(true);
      setTimeout(() => {
        setShowGif(false);
      }, 3000);
    }
  };

  // Avança para a próxima pergunta
  const goToNextQuestion = () => {
    if (isAnswered && currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  // Reinicia o quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsQuizFinished(false);
    setShowGif(false); // Reseta o GIF quando reiniciar
  };

  // Retorna para a página inicial
  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  // Função para carregar um novo quiz aleatório
  const startNewQuiz = () => {
    // Gera um número aleatório entre 1 e 3
    let randomQuizNumber;
    do {
      randomQuizNumber = Math.floor(Math.random() * 3) + 1;
    } while (randomQuizNumber === quizNumber); // Garante que o quiz seja diferente do atual

    navigation.replace('Quiz', { quizNumber: randomQuizNumber });
  };

  // Tela de resultado final
  if (isQuizFinished) {
    return (
      <ImageBackground
        source={require('../../assets/fundo_quiz.jpg')}
        style={styles.container}
      >
        <View style={styles.finalScreen}>
          {showGif && (
            <Image
              source={require('../../assets/saci_animado.gif')} // Caminho do seu GIF
              style={styles.gif}
            />
          )}
          {!showGif && (
            <>
              <Text style={styles.title}>Quiz Finalizado!</Text>
              <Text style={styles.scoreText}>
                Seu placar: {score} de {quiz.length}
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={restartQuiz}>
                  <Text style={styles.buttonText}>Reiniciar Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToHome}>
                  <Text style={styles.buttonText}>Voltar à Página Inicial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={startNewQuiz}>
                  <Text style={styles.buttonText}>Novo Game</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    );
  }

  // Tela principal do quiz
  return (
    <ImageBackground
      source={require('../../assets/fundo_quiz.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>Game {quizNumber}</Text>

      {quiz.length > 0 && (
        <View style={styles.quizBox}>
          <Text style={styles.questionText}>
            {quiz[currentQuestionIndex].question}
          </Text>

          {quiz[currentQuestionIndex].options.map((option, index) => {
            let backgroundColor = '#fff';
            if (selectedOption === option) {
              const answer = quiz[currentQuestionIndex].answer;
              backgroundColor = option === answer ? '#4caf50' : '#f44336';
            }

            return (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor,
                  padding: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                }}
                onPress={() => handleAnswerSelection(option)}
                disabled={isAnswered}
              >
                <Text
                  style={{
                    color: selectedOption === option ? '#fff' : '#000',
                    textAlign: 'center',
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}

          {isAnswered && currentQuestionIndex < quiz.length - 1 && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={goToNextQuestion}
            >
              <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
            </TouchableOpacity>
          )}

          {/* Botões para reiniciar ou voltar à tela inicial */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={restartQuiz}>
              <Text style={styles.buttonText}>Reiniciar Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={startNewQuiz}>
              <Text style={styles.buttonText}>Novo Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToHome}>
              <Text style={styles.buttonText}>Voltar à Página Inicial</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default QuizScreen;
