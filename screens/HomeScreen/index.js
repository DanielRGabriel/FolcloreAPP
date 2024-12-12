import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles'; // Importe o arquivo de estilos
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const navigation = useNavigation();

  // Definindo a lista de personagens
  const personagens = [
    {
      nome: 'Saci Pererê',
      historia:
        'O Saci Pererê é um dos personagens mais conhecidos do folclore brasileiro. Ele é retratado como um menino travesso, que vive aprontando brincadeiras e pegadinhas.',
      foto: require('../../assets/saci.jpg'),
    },
    {
      nome: 'Curupira',
      historia:
        'O Curupira é um protetor das florestas, com os pés virados para trás, ele engana os caçadores e ladrões da natureza.',
      foto: require('../../assets/curupira.jpg'),
    },
    {
      nome: 'Iara',
      historia:
        'A Iara é uma bela sereia do Rio Amazonas que seduz os homens com seu canto e os atrai para as águas profundas, onde eles desaparecem.',
      foto: require('../../assets/iara.jpg'),
    },
    {
      nome: 'Boitatá',
      historia:
        'Boitatá é uma cobra de fogo que protege as florestas e o campo. Dizem que ela queima tudo que vê pela frente, inclusive as almas dos maus.',
      foto: require('../../assets/boitata.jpg'),
    },
    {
      nome: 'Mula Sem Cabeça',
      historia:
        'A Mula Sem Cabeça é uma lenda que fala sobre uma mulher amaldiçoada, que se transforma em uma mula com fogo saindo de seu pescoço, sem cabeça.',
      foto: require('../../assets/mula_sem_cabeca.jpg'),
    },
    {
      nome: 'Lobisomem',
      historia:
        'O Lobisomem é um homem que se transforma em lobo nas noites de lua cheia. Segundo a lenda, ele ataca as pessoas e os animais, deixando um rastro de destruição.',
      foto: require('../../assets/lobisomem.jpg'),
    },
    {
      nome: 'Cuca',
      historia:
        'A Cuca é uma bruxa velha, com aparência de jacaré, que sequestra crianças desobedientes. Ela é uma figura temida pelas crianças do Brasil.',
      foto: require('../../assets/cuca.jpg'),
    },
    {
      nome: 'Negrinho do Pastoreio',
      historia:
        'Negrinho do Pastoreio é um personagem que foi castigado por seu patrão e virou um espírito que ajuda aqueles que têm boa índole, sempre com um cavalo junto dele.',
      foto: require('../../assets/negrinho_do_pastoreio.jpg'),
    },
    {
      nome: 'Vitória Régia',
      historia:
        'A vitória-régia é originalmente uma índia que se afogou após se inclinar no rio para tentar tocar o reflexo da Lua. Para os índios, a Lua era Jaci, deusa da Lua na mitologia tupi, que transformava as índias que escolhia em estrelas do céu..',
      foto: require('../../assets/vitoria_regia.jpg'),
    },
  ];

  return (
    <ImageBackground
      source={require('../../assets/selva.jpg')}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <Text style={styles.title}>Folclore Brasileiro</Text>

      <CustomButton
        title="Personagens"
        onPress={() => navigation.navigate('CharactersScreen', { personagens })}
      />

      <CustomButton
        title="Game Perguntas"
        onPress={() => {
          const randomQuizNumber = Math.floor(Math.random() * 3) + 1;
          navigation.navigate('Quiz', { quizNumber: randomQuizNumber });
        }}
      />

      <CustomButton
        title="Saiba Mais"
        onPress={() => navigation.navigate('SaibaMaisScreen')}
      />

      <CustomButton
        title="Datas Comemorativas"
        onPress={() => navigation.navigate('CommemorativeDatesScreen')}
      />
    </ImageBackground>
  );
}
